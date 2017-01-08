(function(exports){

  var Article = function(title, body, image, id){
    this.title = title
    this.body = body
    this.image = image
    this.id = id
  }

  Article.prototype.generateArticleHTML = function(){
    return "<div id='desc'><title>" + this.title
      + "</title></div>"
  }

  exports.Article = Article;

})(this);
