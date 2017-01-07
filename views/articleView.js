(function(exports){

  var ArticleView = function(articleModel){
    this.articleModel = articleModel
  }

  ArticleView.prototype.updateArticleHTML = function(){
    document.getElementById("summary").innerHTML = this.articleModel.generateArticleHTML()
  }

  exports.ArticleView = ArticleView

})(this)
