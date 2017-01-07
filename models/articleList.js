(function(exports){

  var ArticleList = function(){
    this.articles = []
  }

  ArticleList.prototype.addArticle = function(article){
    this.articles.push(article)
  }

  exports.ArticleList = ArticleList

})(this);
