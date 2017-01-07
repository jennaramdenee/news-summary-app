(function(exports){

  var Article = function(title){
    this.title = title
  }

  Article.prototype.generateArticleHTML = function(){
    return "<div id='desc'><title>" + this.title
      + "</title></div>"
  }

  Article.prototype.getInfoFromUrl = function(){
    news.httpGetAsync(function(data){
      console.log(data)
      // this.title = data.response.content.webTitle
    })
  }



  exports.Article = Article;


})(this);
