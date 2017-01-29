(function(exports){

  var ArticleList = function(){
    this.articles = []
    this.counter = 0
  }

  ArticleList.prototype.addArticle = function(article){
    var id = this.generateArticleId();
    var title = article.webTitle
    var body = article.fields.bodyText
    var image = article.fields.thumbnail
    this.articles.push(new Article(title, body, image, id))
  }

  ArticleList.prototype.generateArticleId = function(){
    this.counter += 1
    return this.counter
  }

  ArticleList.prototype.generateListHTML = function(){
    var output = "<div class='pure-g'>"
    this.articles.forEach(function(article){
      output += "<div class='pure-u-1-2'><div class='image'><img src='" + article.image + "'></div><div class='summary'><a href='#article/" + article.id + "'>" + article.title + "</a></div></div>"
    })
    output += "</div>"
    return output
  }


  exports.ArticleList = ArticleList

})(this);
