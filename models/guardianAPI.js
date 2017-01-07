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

  function generateArticleUrl(article){
    var makersUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
    // var apiRequestUrl = article.apiUrl //once I figure out how to actually get the data..
    return makersUrl + apiRequestUrl
  }

  function httpGetAsync(callback){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        callback(JSON.parse(xhr.responseText))
      }
    }
    xhr.open("GET", generateListUrl(findTodayDate()), true)
    xhr.send();
  }

  exports.news = {
    httpGetAsync: httpGetAsync
  }

})(this);
