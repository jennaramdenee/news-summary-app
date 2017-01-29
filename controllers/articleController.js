(function(exports){

  var ArticleController = function(){
    this.articleList = new ArticleList()
    this.articleListView = new ArticleListView(this.articleList)
  }

  ArticleController.prototype.initialLoad = function(list){
    var articles = this.articleList
    list.forEach(function(article){
      articles.addArticle(article)
    })
    this.articleListView.updateArticleListHTML()
  }

  ArticleController.prototype.getIdFromUrl = function(location){
    return parseInt(location.hash.split("#article/")[1])
  }

  ArticleController.prototype.findArticleFromId = function(id){
    var result;
    this.articleList.articles.forEach(function(article){
      if (article.id === id ){
        result = article
      }
    })
    return result
  }

  ArticleController.prototype.showArticle = function(){
    var article = this.findArticleFromId(this.getIdFromUrl(window.location))
    var articleView = new ArticleView(article)
    articleView.updateArticleHTML()
  }



  exports.ArticleController = ArticleController

})(this);
