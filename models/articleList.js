(function(exports){

  var ArticleList = function(){
    this.articles = []
  }

  ArticleList.prototype.addArticle = function(article){
    this.articles.push(article)
  }

  ArticleList.prototype.generateListHTML = function(){
    var output = ""
    this.articles.forEach(function(article){
      output += "<div><title>" + article.title + "</title></div>"
    })
    return output
  }

  exports.ArticleList = ArticleList

})(this);
