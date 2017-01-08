(function(exports){

  var ArticleList = function(){
    this.articles = []
    this.counter = 0
  }

  ArticleList.prototype.addArticle = function(article){
    var id = this.generateArticleId();
    var title = article.webTitle
    var apiUrl = article.apiUrl
    var image = article.apiUrl.main
    this.articles.push(new Article(title, apiUrl, image, id))
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
