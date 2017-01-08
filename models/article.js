(function(exports){

  var Article = function(title, apiUrl, id){
    this.title = title
    this.apiUrl = apiUrl
    this.id = id
  }

  Article.prototype.generateArticleHTML = function(){
    return "<div id='desc'><title>" + this.title
      + "</title></div>"
  }

  exports.Article = Article;

})(this);
