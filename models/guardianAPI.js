(function(exports){

  function generateListUrl(){
    var makersUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
    var apiRequestUrl = "http://content.guardianapis.com/search?show-fields=all"
    return makersUrl + apiRequestUrl
  }

  function httpGetAsync(url, callback){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        callback(JSON.parse(xhr.responseText))
      }
    }
    xhr.open("GET", url, true)
    xhr.send();
  }

  function httpGetArticleList(controller){
    httpGetAsync(generateListUrl(), function(data){
      var list = data.response.results
      controller.initialLoad(list);
    })
  }

  exports.news = {
    httpGetArticleList: httpGetArticleList
  }

})(this);
