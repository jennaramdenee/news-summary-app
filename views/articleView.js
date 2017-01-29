(function(exports){

  var ArticleView = function(articleModel){
    this.articleModel = articleModel
  }

  ArticleView.prototype.updateArticleHTML = function(){
    document.getElementById("app").innerHTML = this.articleModel.generateArticleHTML()
  }

  exports.ArticleView = ArticleView

})(this)
