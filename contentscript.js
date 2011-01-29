chrome.extension.sendRequest({method: "localStorage"}, function(response) {
  var body, content, matcher;

  body = Sizzle(response['body_selector'])[0];
  content = Sizzle(response['content_selector'], body);
  matcher = new RegExp(response['content_matcher']);
  
  var length = content.length;
  for(var i=0; i < length; ++i){
    if(content[i].text.match(matcher)){
      body.removeChild(content[i].parentNode.parentNode.parentNode);
    }
  }
  
});