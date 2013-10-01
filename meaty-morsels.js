Router.map(function() { 
  this.route('hello', {path: '/'});
  this.route('saveUrl');
});


if (Meteor.isClient) {
  $.extend( Template.saveUrl, {
    who: function(){ return "WHO";},
    what: function(){ return "WHAT"; }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
