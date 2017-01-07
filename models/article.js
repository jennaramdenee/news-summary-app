(function(exports){

  var Article = function(title, id){
    this.title = title
    this.id = id
  }

  Article.prototype.generateArticleHTML = function(){
    return "<div id='desc'><title>" + this.title
      + "</title></div>"
  }

  Article.prototype.getInfoFromUrl = function(){
    news.httpGetAsync(function(data){
      this.title = data.response.content.webTitle
    })
  }



  exports.Article = Article;


})(this);
