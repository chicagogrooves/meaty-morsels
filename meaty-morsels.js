/*
Router.map(function() { 
  this.route('saveUrl');
  this.route('home', {path:'/'});
});
*/
/* The following is a server-side hack to return some javascript to get around 
   Cross-domain Ajax policy by sourcing js via a script tag in the bookmarklet.
   Note: passing the userId in via query parameters is *not* how we'd do it in
   a production app - but for the demo, and to work around the fact that this 
   shortcut function doesn't have access to Meteor.userId, it'll be fine.
*/
Urls = new Meteor.Collection('urls');

Router.map(function() { 
  this.route('saveUrl', {
    path: '/saveUrl',
    where: 'server'
  }, function(){
    this.response.setHeader('Content-Type', 'text/javascript');
    //this.response.setHeader('Access-Control-Allow-Origin', '*');
    this.response.setHeader('access-control-allow-origin', '*');
    
    //var url = this.request.query.url,
    //    userId = this.request.query.userId; //for demo purposes only !
    //this.response.write('var url="' + url + '"; ');
    //this.response.write('var userId="' + userId + '"; ');
    //this.response.write('console.log("server: saved the url: " + url + " for user: " + userId);');
    //console.log('saved url for user + ' this.request.query.userId );
    
    Urls.insert({
      userId: this.request.query.userId,
      url: this.request.query.urlSaved
    });
    this.response.write('didit({"urlSaved": "' + this.request.query.urlSaved + '"});')
  });
  
  this.route('home', {path:'/'});
});


if (Meteor.isClient) {
  Template.home.saverUrl = function(){ 
    return "http://localhost:3000/saveUrl"; 
  }
  Template.home.userInfo = function(){
    return Meteor.userId();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
