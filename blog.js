'use strict';

var request = require('request');
const cheerio = require('cheerio');
const url_parser = require('url');
const sleep = require('sleep');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/spider';
var items = [];
var options = {};
var drill_down_items = [];
var db = {};
// request = request.defaults({ jar: request.jar() });


module.exports.crawl = function(o){
	options = o;
	MongoClient.connect(url, function(err, database) {
	  if(err) console.log(err);
	  else {
	  	db = database;
	  	let query = {root_url: options.root_url};
	  	remove(db, 'posts', query, function(){
		  	if(options.drill_down) drillDownCrawl();
			else normalCrawl();
		});
	  	
	  }
	});
	
}

function normalCrawl(){
	for (var i = 0; i <= options.page_size; i++) {
		if(i != 0 && i%10==0) sleep.sleep(5);
		var url = getUrl(i);
		crawlUrl({url: url});
	}
}

function drillDownCrawl(){
	for (var i = 0; i <= options.page_size; i++) {
		if(i != 0 && i%10==0) sleep.sleep(5);
		let drill_down_url = getUrl(i);
		crawlDrillDownUrl(drill_down_url, function(){
			if(drill_down_items){
				drill_down_items.forEach(function(obj){
					crawlUrl(obj);
				})
			}
				
		});
		
	}
}


function crawlDrillDownUrl(url, next){
	request(getOptions(url), function (err, res, html) {
		if(err) console.log(err);
	  	if (!err && res.statusCode == 200) {
	    	extractDrilldownItems(html, next);
	  	}
	});
}

function crawlUrl(obj){
	request(getOptions(obj.url), function (err, res, html) {
		if(err) console.log(err);
	  	if (!err && res.statusCode == 200) {
	    	extractData(html, obj);
	  	}
	});
}

function extractDrilldownItems(html, next){
	try {
		let $ = cheerio.load(html);
		$(options.selector.drill_down.top_level).each(function(i, element){
		    let post = $(this);
		    try {
		    	let item = {};
			    item.url = post.find('a').attr('href');
			    if(options.selector.drill_down.short_description){
			    	item.short_description = post.find(options.selector.drill_down.short_description).text();
			    }
			    if(options.selector.drill_down.post_author){
			    	item.post_author = post.find(options.selector.drill_down.post_author).text();
			    }
			    if(options.selector.drill_down.comments_count){
			    	item.comments_count = post.find(options.selector.drill_down.comments_count).text();
			    }
			    if(item.url) drill_down_items.push(item);
		    } catch(e) {
		    	console.log(e);
		    }

	 	});
	} catch(e) {
		console.log(e);
	}

 	next();

}

function extractData(html, obj){
	let $ = cheerio.load(html);
	let url = obj.url;
	$(options.selector.top_level).each(function(i, element){
	    let post = $(this);
	    let item = {};
	    try {
	    	if(options.selector.meta)
	    		item = readContent($, obj);
	    	else	
	    		item = readText($, post, obj);

	    	item.root_domain = url_parser.parse(options.root_url).hostname.replace('www.', '');
		    
	    } catch(e) {
	    	console.log(e);
	    }

	    items.push(item);

 	});

	manage();

}

function readText($, post, obj){
	var item = {};
	item.post_title = post.find(options.selector.post_title).text().replace(/^\s+|\s+$/gm, "");;

	if(options.drill_down)
		item.post_url = obj.url;
	else
		item.post_url = post.find(options.selector.post_url).attr('href');

	if(options.selector.published_date) { 
	 	item.published_date = post.find(options.selector.published_date).text().replace(/^\s+|\s+$/gm, "");
	}

	if(typeof options.selector.post_author === "object"){
		if(options.selector.post_author.img)
			item.post_author = $(options.selector.post_author.selector).attr('alt').replace(/^\s+|\s+$/gm, "").replace("By\n", "");
		else if(options.selector.post_author.name)
			item.post_author = options.selector.post_author.name;
		else
			item.post_author = $(options.selector.post_author.selector).text().replace(/^\s+|\s+$/gm, "").replace("By\n", "");
	}
	else{
		if(obj.post_author)
			item.post_author = obj.post_author;
		else 
			item.post_author = post.find(options.selector.post_author).text().replace(/^\s+|\s+$/gm, "").replace("By\n", "");
	}
		    
		    
	if(typeof options.selector.comments_count === "object")
		item.comments_count = $(options.selector.comments_count.selector).text().replace(/^\s+|\s+$/gm, "");
	else if(options.selector.comments_count){
		if(obj.comments_count)
			item.comments_count = obj.comments_count.replace(/^\s+|\s+$/gm, "");
		else
			item.comments_count = post.find(options.selector.comments_count).text().replace(/^\s+|\s+$/gm, "");
	}

	item.root_url = options.root_url;
			
	if(obj.short_description)
		item.short_description = obj.short_description.replace(/^\s+|\s+$/gm, "");
	else if(options.selector.short_description){
		item.short_description = post.find(options.selector.short_description).text().replace(/^\s+|\s+$/gm, "");
	}

	return item;
}

function readContent($, obj){
	var item = {};
	item.post_title = $(options.selector.post_title).attr('content');

	if(options.drill_down)
		item.post_url = obj.url;
	else
		item.post_url = $(options.selector.post_url).attr('content');

	if(options.selector.published_date) { 
	 	item.published_date = $(options.selector.published_date).attr('content');
	}

	if(obj.post_author)
		item.post_author = obj.post_author;
	else 
		item.post_author = $(options.selector.post_author).attr('content');
		    
	if(obj.comments_count){
		item.comments_count = obj.comments_count.replace(/^\s+|\s+$/gm, "");
	}    
	else if(typeof options.selector.comments_count === "object"){
		if(options.selector.comments_count.length){
			item.comments_count = $(options.selector.comments_count.selector).length;
		}
		else {
			if(obj.comments_count)
				item.comments_count = obj.comments_count.replace(/^\s+|\s+$/gm, "");
			else
				item.comments_count = $(options.selector.comments_count.selector).text().replace(/^\s+|\s+$/gm, "");
		}
	}
	else if(options.selector.comments_count){
		item.comments_count = $(options.selector.comments_count).text().replace(/^\s+|\s+$/gm, "");
	}


	item.root_url = options.root_url;
			
	if(obj.short_description)
		item.short_description = obj.short_description.replace(/^\s+|\s+$/gm, "");
	else if(options.selector.short_description){
		item.short_description = $(options.selector.short_description).attr('content').replace(/^\s+|\s+$/gm, "");
	}

	return item;
}

function manage(){
	db.open(function(err, db){
	  	try {
	  		save(db);
	  	} catch(e) {
	  		if(db) db.close();
	  		console.log(e);
	  	}
	});
}

function save(db){
	try {
		let bulk = db.collection("posts").initializeUnorderedBulkOp();
		items.forEach( function(item, idx) {
			if(item.post_title) bulk.insert(item);
		  	console.log(item.post_title);
		});
		bulk.execute();
		if(db) db.close();

	} catch(e) {
		if(db) db.close();
		console.log(e);
	}

}

function remove(db, collectionName, query, next){
	db.collection(collectionName).deleteMany(
      query,
      function(err, results) {
         if(err) console.log(err);
         next();
      }
   );
}



function getUrl(page_number){
	let url = options.root_url;
	if(page_number > 0)	url = options.root_url.replace(/\/+$/, "") + "/page/" + page_number;
	return url;
}

function getOptions(url){
	return {
	  url: url,
	  headers: {
	    'User-Agent': 'request'
	  }
	};
}



