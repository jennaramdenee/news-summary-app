(function(exports){

  var ArticleController = function(articleList){
    this.articleList = articleList
    this.articleListView = new ArticleListView(articleList)
  }

  ArticleController.prototype.initialLoad = function(){
    this.articleListView.updateArticleListHTML()
  }

  exports.ArticleController = ArticleController

})(this);
