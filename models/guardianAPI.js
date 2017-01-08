(function(exports){

  function findTodayDate(){
    var date = new Date()
    var year = date.getFullYear().toString()
    var month = (date.getMonth()+1).toString()
    var day = (date.getDay()+1).toString()
    return year + "-" + ("0"+month).slice(-2) + "-" + ("0"+day).slice(-2)
  }

  function generateListUrl(date){
    var makersUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
    var apiRequestUrl = "http://content.guardianapis.com/search?from-date=" + date
    return makersUrl + apiRequestUrl
  }

  function generateArticleUrl(articleUrl){
    var makersUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
    var apiRequestUrl = articleUrl
    return makersUrl + apiRequestUrl + "?show-fields=all"
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

  function httpGetArticle(articleUrl){
    httpGetAsync(generateArticleUrl(articleUrl), function(data){
      //update body of the article
    })
  }

  function httpGetArticleList(){
    httpGetAsync(generateListUrl(findTodayDate()), function(data){
      var articleList = new ArticleList()
      var list = JSON.parse(data)
      list.response.results.forEach(function(result){
        articleList.addArticle(result)
      })
    })
  }


  exports.news = {
    httpGetArticle: httpGetArticle,
    httpGetArticleList: httpGetArticleList
  }

})(this);
