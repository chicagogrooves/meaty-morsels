/*
javascript:(
  function(){
    var origurl=document.location.href;
    var saver='http://meaty-morsels.meteor.com/saveUrl';
    var userId='n3s6YNZYuTZRb9pYe'; // replace me
    var name=prompt('Enter a name for this link (or leave blank).');
    console.log('client: saving '+origurl+' to '+saver);
    getScript('//code.jquery.com/jquery.min.js', function(){
      $.ajax({
        url:saver,
        data:{urlSaved:origurl, userId:userId, name: name},
        dataType:'jsonp',
        jsonpCallback:'didit'
      }).then(
        function(data){
          console.log('client: saved it. data: '+data.urlSaved);
        }).fail(
          function(){console.log('client: save fail');
          });
      });
      function getScript(url,success){
        var script=document.createElement('script');
        script.src=url;
        var head=document.getElementsByTagName('head')[0];
        done=false;
        script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){done=true;success();script.onload=script.onreadystatechange=null;
        head.removeChild(script);}};head.appendChild(script);
      }
  })();
*/