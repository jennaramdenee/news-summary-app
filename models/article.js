(function(exports){

  var Article = function(title, body, image, id){
    this.title = title
    this.body = body
    this.image = image
    this.id = id
  }

  Article.prototype.generateArticleHTML = function(){
    return "<div class='pure-g'><div class='pure-u-1-2'>"
      + "<div class='image'><img src='" + this.image + "'></div>"
      + "<div class='desc'>" + this.title + "</div>"
      + "<div class='content'>" + this.body + "</div>"
      + "</div></div>"
  }

  exports.Article = Article;

})(this);
