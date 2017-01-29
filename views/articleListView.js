(function(exports){

  var ArticleListView = function(articleList){
    this.articleList = articleList
  }

  ArticleListView.prototype.updateArticleListHTML = function(){
    document.getElementById("app").innerHTML = this.articleList.generateListHTML()
  }

  exports.ArticleListView = ArticleListView

})(this)
