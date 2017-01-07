(function(exports){

  var Article = function(){
    this.news = new News();
  }

  Article.prototype.getInfoFromUrl = function(callback){
    httpGetAsyncList(function callback(err, data){
      if (err) { throw new Error }
      else {
        callback(data)
      }
    })
  }

  this.title = data2.response.content.webTitle
  this.apiUrl = data2.response.results.apiUrl

  exports.Article = Article;


})(this);
