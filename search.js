EasySearch.createSearchIndex('posts', {
   'field'        : ['url', 'message', 'title', 'author'], 
   'collection'   : Posts,
   'use'          : 'mongo-db',
   'limit'        : 20,
});

EasySearch.createSearchIndex('comments', {
   'field'        : ['body', 'author'],
   'collection'   : Comments,
   'use'          : 'mongo-db',
   'limit'        : 20,
});

Template.searchPosts.indexes = ['posts', 'comments'];
