'use strict';
var blog = require("./blog");
// const options = {
//    "page_size": 14,
//    "root_url": "http://www.bloggingwizard.com/blog",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "div.post",
//       "post_title": ".entry-title a",
//       "post_url": ".entry-title a",
//       "published_date": ".post-meta-data",
//       "comments_count": ".post-meta-data a[rel='author'] + a",
//       "post_author": ".post-meta-data a[rel='author']",
//       "short_description": ".entry-content > p"
//    }
// }

// const options = {
//    "page_size": 3,
//    "root_url": "http://buzzsumo.com/blog",
//    "drill_down": true,
//    "selector": {
//       "drill_down": ".articles a",
//       "top_level": "article",
//       "post_title": ".entry-title a",
//       "post_author": ".entry-meta a",
//       "post_url": "",
//       "published_date": ".entry-meta time",
//       "comments_count": {
//          "selector": "#dsq-app2 .comment-count"
//       }
//    }
// }

// const options = {
//    "page_size": 10,
//    "root_url": "http://boostblogtraffic.com",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "article",
//       "post_title": ".post-title a",
//       "post_author": ".author-name a",
//       "post_url": ".post-title a",
//       "published_date": "time",
//       "comments_count": ".post-comment a"
//    }
// }


// const options = {
//    "page_size": 1,
//    "root_url": "http://kikolani.com",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "article",
//       "post_title": ".entry-title a",
//       "post_author": ".entry-author-name",
//       "post_url": ".entry-title a",
//       "published_date": "time",
//       "comments_count": ".entry-comments-link a"
//    }
// }

// const options = {
//    "page_size": 1,
//    "root_url": "http://blog.videofruit.com",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": ".post",
//       "post_title": ".entry-title a",
//       "post_author": ".the-author a",
//       "post_url": ".entry-title a",
//       "published_date": "",
//       "comments_count": ".post-header-meta > a"
//    }
// }

// const options = {
//    "page_size": 1,
//    "root_url": "http://blog.hubspot.com/marketing",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "article",
//       "post_title": ".post-header a",
//       "post_url": ".post-header a",
//       "post_author": ".hubspot-author__link",
//       "published_date": "",
//       "comments_count": "",
//       "short_description": ".content-post__body p:last-child"
//    }
// }

// const options = {
//    "page_size": 1,
//    "root_url": "http://blog.hubspot.com/sales",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "article",
//       "post_title": ".post-header a",
//       "post_url": ".post-header a",
//       "post_author": ".hubspot-author__link",
//       "published_date": "",
//       "comments_count": "",
//       "short_description": ".content-post__body p:last-child"
//    }
// }

// const options = {
//    "page_size": 1,
//    "root_url": "http://blog.hubspot.com/agency",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "article",
//       "post_title": ".post-header a",
//       "post_url": ".post-header a",
//       "post_author": ".hubspot-author__link",
//       "published_date": "",
//       "comments_count": "",
//       "short_description": ".content-post__body p:last-child"
//    }
// }

// const root_url = "http://www.matthewbarby.com/blog/"; //not work
// const page_size = 0; 
// const options = {
// 	page_size: page_size,
// 	root_url: root_url,
// 	drill_down: true,
// 	selector: {
// 		drill_down: { top_level: "article h2 a", short_description: "p:first_child"},
// 		top_level: "section.singlePost",
// 		post_title: "meta[itemprop='headline']",
// 		post_url: "meta[itemprop='url']",
// 		post_author: "meta[itemprop='name']",
// 		published_date: "meta[itemprop='datePublished']",
// 		comments_count: "div.responses h2",  
// 		short_description: "",
// 		meta: true

// 	}
// }

// const options = {
//    "page_size": 0,
//    "root_url": "http://zacjohnson.com",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": ".awr",
//       "post_title": ".entry-title a",
//       "post_url": ".entry-title a",
//       "post_author": "ul.meta li:last-child",
//       "published_date": "ul.meta li:first-child",
//       "comments_count": "",
//       "short_description": "p"
//    }
// }

// const options = {
//    "page_size": 0,
//    "root_url": "http://blog.meetedgar.com",
//    "drill_down": true,
//    "selector": {
//       "drill_down": {
//          "top_level": ".post-preview",
//          "short_description": "p"
//       },
//       "top_level": "article",
//       "post_title": "meta[property='og:title']",
//       "post_url": "meta[property='og:url']",
//       "post_author": "meta[property='og:site_name']",
//       "published_date": "meta[property='article:published_time']",
//       "comments_count": {
//          "selector": ".comments-title"
//       },
//       "short_description": {
//          "selector": ".comments-title"
//       },
//       "meta": true
//    }
// }

// const options = {
//    "page_size": 0,
//    "root_url": "http://conversionxl.com/blog",
//    "drill_down": true,
//    "selector": {
//       "drill_down": {
//          "top_level": "article",
//          "short_description": ".entry-summary",
//          "post_author": "span[itemprop='name']"
//       },
//       "top_level": "article",
//       "post_title": "meta[property='og:title']",
//       "post_url": "meta[property='og:url']",
//       "post_author": "",
//       "published_date": "meta[property='article:published_time']",
//       "comments_count": "",
//       "short_description": "",
//       "meta": true
//    }
// }

// const options ={
//    "page_size": 0,
//    "root_url": "https://www.marketdoc.com/blog",
//    "drill_down": true,
//    "selector": {
//       "drill_down": {
//          "top_level": "article",
//          "post_author": "span[itemprop='name']"
//       },
//       "top_level": "article",
//       "post_title": "meta[property='og:title']",
//       "post_url": "meta[property='og:url']",
//       "post_author": "",
//       "published_date": "meta[property='article:published_time']",
//       "comments_count": {
//          "selector": "ol.comment-list li",
//          "length": true
//       },
//       "short_description": "meta[property='og:description']",
//       "meta": true
//    }
// }

// const options = {
//    "page_size": 0,
//    "root_url": "https://ahrefs.com/blog",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": ".post",
//       "post_title": ".post-header a",
//       "post_url": ".post-header a",
//       "post_author": "span.author",
//       "published_date": "span.post-date",
//       "comments_count": "",
//       "short_description": ".post-excerpt"
//    }
// }
// const options = {
//    "page_size": 0,
//    "root_url": "http://neilpatel.com/blog",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": "div.content",
//       "post_title": ".title a",
//       "post_url": ".title a",
//       "post_author": {
//          "selector": ".author img",
//          "img": true
//       },
//       "published_date": "span.date",
//       "comments_count": "span.comments",
//       "short_description": ""
//    }
// }

// const options = {
//    "page_size": 20,
//    "root_url": "https://www.quicksprout.com/blog",
//    "drill_down": false,
//    "selector": {
//       "drill_down": "",
//       "top_level": ".post",
//       "post_title": ".entry-title a",
//       "post_url": ".entry-title a",
//       "post_author": "span.author",
//       "published_date": "span.time",
//       "comments_count": ".post-comments a",
//       "short_description": ".entry-content"
//    }
// }

// const options = {
//    "page_size": 20,
//    "root_url": "http://backlinko.com/blog",
//    "drill_down": true,
//    "selector": {
//       "drill_down": {
//          "top_level": "article",
//          "short_description": ".entry-content"
//       },
//       "top_level": ".post",
//       "post_title": ".article-header h1",
//       "post_url": "",
//       "post_author": "p span.entry-author",
//       "published_date": "p .entry-time",
//       "comments_count": "#comments-title span",
//       "short_description": ""
//    }
// }


// const options= {
// 	"page_size": 41,
// 	"root_url": "http://socialtriggers.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article",
// 		"post_title": "h2.title",
// 		"post_url": "a:first-child",
// 		"post_author": {name:"DEREK HALPERN"},
// 		"published_date": ".time",
// 		"comments_count": ".comment-count",
// 		"short_description": ".article-content"
// 	}
// }


// const options= {
// 	"page_size": 60,
// 	"root_url": "http://kimgarst.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".entry-title a",
// 		"post_url": ".entry-title a",
// 		"post_author": "span.entry-author-name",
// 		"published_date": ".entry-meta",
// 		"comments_count": ".entry-comments-link a",
// 		"short_description": ".entry-content p:last-child"
// 	}
// }

// const options= {
// 	"page_size": 12,
// 	"root_url": "http://www.navidmoazzez.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".entry-title a",
// 		"post_url": ".entry-title a",
// 		"post_author": ".entry-meta",
// 		"published_date": ".entry-date",
// 		"comments_count": ".entry-comments",
// 		"short_description": ".entry-content p:last-child"
// 	}
// }

// const options= {
// 	"page_size": 241,
// 	"root_url": "http://www.socialmediaexaminer.com",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": ".blog",
// 		"post_title": ".page-header a",
// 		"post_url": ".page-header a",
// 		"post_author": ".meta-post li a[rel='author']",
// 		"published_date": ".meta-post li:last-child",
// 		"comments_count": ".comments_link",
// 		"short_description": ".post-excerpt"
// 	}
// }

// const options= {
// 	"page_size": 279,
// 	"root_url": "http://contentmarketinginstitute.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "div.post",
// 		"post_title": ".entry-title a",
// 		"post_url": ".entry-title a",
// 		"post_author": ".posted a",
// 		"published_date": ".posted span",
// 		"comments_count": "",
// 		"short_description": ".entry-content"
// 	}
// }

// const options= {
// 	"page_size": 85,
// 	"root_url": "https://blog.bufferapp.com",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".entry-title",
// 		"post_url": ".entry-header a:first-child",
// 		"post_author": "span.author-avatar",
// 		"published_date": ".timestamp",
// 		"comments_count": "",
// 		"short_description": ".entry-content"
// 	}
// }

// const options= {
// 	"page_size": 306,
// 	"root_url": "http://sproutsocial.com/insights",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post-type",
// 		"post_title": ".post-type-title a",
// 		"post_url": ".post-type-title a",
// 		"post_author": "span.article-author",
// 		"published_date": "time.article-date",
// 		"comments_count": "",
// 		"short_description": ".article-preview p:last-child"
// 	}
// }


// const options= {
// 	"page_size": 365,
// 	"root_url": "http://www.businessesgrow.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": ".post",
// 		"post_title": ".title a",
// 		"post_url": ".title a",
// 		"post_author": { name: "Mark Schaefer" },
// 		"published_date": ".post-date p",
// 		"comments_count": ".comments a",
// 		"short_description": ".post-content"
// 	}
// }

// const options= {
// 	"page_size": 110,
// 	"root_url": "http://www.jonloomer.com",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".entry-title a",
// 		"post_url": ".entry-title a",
// 		"post_author": ".entry-author-name",
// 		"published_date": "time.entry-time",
// 		"comments_count": ".entry-comments-link a",
// 		"short_description": ".entry-content p:last-child"
// 	}
// }

// const options= {
// 	"page_size": 20,
// 	"root_url": "http://sociallysorted.com.au/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".entry-title a",
// 		"post_url": ".entry-title a",
// 		"post_author": ".entry-author-name",
// 		"published_date": "time.entry-date",
// 		"comments_count": ".entry-comments-link a",
// 		"short_description": ".entry-content p:last-child"
// 	}
// }


// const options= {
// 	"page_size": 92,
// 	"root_url": "http://rebekahradice.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".entry-title a",
// 		"post_url": ".entry-title a",
// 		"post_author": ".entry-author-name",
// 		"published_date": "time.entry-time",
// 		"comments_count": ".entry-comments-link a",
// 		"short_description": ".entry-content p:last-child"
// 	}
// }

// const options= {
// 	"page_size":111,
// 	"root_url": "http://simplymeasured.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.ruled-section",
// 		"post_title": ".heading-beta a",
// 		"post_url": ".heading-beta a",
// 		"post_author": ".red",
// 		"published_date": "time",
// 		"comments_count": ".entry-comments-link a",
// 		"short_description": "p.col-xs-12"
// 	}
// }


// const options= {
// 	"page_size": 54,
// 	"root_url": "http://socialbro.com/blog",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": "article.post",
// 		"post_title": ".title a",
// 		"post_url": ".title a",
// 		"post_author": ".meta-author a",
// 		"published_date": ".date",
// 		"comments_count": ".meta-comment-count a",
// 		"short_description": ".article-content-wrap p:last-child"
// 	}
// }


// const options= {
// 	"page_size": 39,
// 	"root_url": "http://www.ianbrodie.com",
// 	"drill_down": false,
// 	"selector": {
// 		"drill_down": "",
// 		"top_level": ".post-entry",
// 		"post_title": ".post-entry-title a",
// 		"post_url": ".post-entry-title a",
// 		"post_author": ".post-entry-meta a[rel='author']",
// 		"published_date": ".post-entry-meta",
// 		"comments_count": ".post-entry-meta",
// 		"short_description": ".post-entry-content"
// 	}
// }

// const options = {
//    "page_size": 156,
//    "root_url": "https://blog.kissmetrics.com",
//    "drill_down": true,
//    "selector": {
//       "drill_down": {
//          "top_level": ".post",
//          "comments_count": ".comments-link a"
//       },
//       "top_level": ".post",
//       "post_title": "meta[property='og:title']",
//       "post_url": "meta[property='og:url']",
//       "post_author": "",
//       "published_date": "",
//       "comments_count": "",
//       "short_description": "meta[property='og:description']",
//       "meta": true
//    }
// }

// const options= {
// 	"page_size": 130,
// 	"root_url": "http://blog.crazyegg.com",
// 	"drill_down": true,
// 	"selector": {
// 		"drill_down": {
// 			"top_level": ".post",
// 			"short_description": ".entry-content p"
// 		},
// 		"top_level": ".post",
// 		"post_title": ".entry-title",
// 		"post_url": "",
// 		"post_author": ".author a",
// 		"published_date": "span.time",
// 		"comments_count": "",
// 		"short_description": ""
// 	}
// }

const options= {
	"page_size": 141,
	"root_url": "http://www.briansolis.com",
	"drill_down": false,
	"selector": {
		"drill_down": "",
		"top_level": ".post",
		"post_title": "a:first-child",
		"post_url": "a:first-child",
		"post_author": {name:"Brian Solis"},
		"published_date": ".data-comments li:first-child",
		"comments_count": ".l-comments a",
		"short_description": "p:last-child"
	}
}




blog.crawl(options);














