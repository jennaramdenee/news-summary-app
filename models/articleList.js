(function(exports){

  var ArticleList = function(){
    this.articles = []
    this.counter = 0
  }

  ArticleList.prototype.addArticle = function(article){
    var id = this.generateArticleId();
    var title = article.response.content.webTitle
    var body = article.respoonse.content.fields.body
    var image = article.response.content.fields.main
    this.articles.push(new Article(title, body, image, id))
  }

  ArticleList.prototype.generateArticleId = function(){
    this.counter += 1
    return this.counter
  }

  ArticleList.prototype.generateListHTML = function(){
    var output = ""
    this.articles.forEach(function(article){
      output += "<div><title><a href='#article/" + article.id + "'>" + article.title + "</a></title></div>"
    })
    return output
  }


  exports.ArticleList = ArticleList

})(this);
