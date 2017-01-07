(function(exports){

  var ArticleListView = function(articleListModel){
    this.articleListModel = articleListModel
  }

  ArticleListView.prototype.updateArticleListHTML = function(){
    document.getElementById("summary").innerHTML = this.articleListModel.generateListHTML()
  }

  exports.ArticleListView = ArticleListView

})(this)
