function testArticleListHasArticles(){
  var testArticleList = new ArticleList()
  assert.isTrue(testArticleList.hasOwnProperty("articles"))
}

function testArticleListHasCounter(){
  var testArticleList = new ArticleList()
  assert.isTrue(testArticleList.hasOwnProperty("counter"))
}

function testGenerateArticleId(){
  var testArticleList = new ArticleList()
  testArticleList.generateArticleId()
  assert.isTrue(testArticleList.counter === 1)
}

function testAddNewArticleToList(){
  var testArticleList = new ArticleList()
  function testArticleDouble(){
    this.webTitle = "title"
    this.fields = {
      bodyText: "text",
      thumbnail: "image"
    }
  }
  var testArticleDouble = new testArticleDouble()
  testArticleList.addArticle(testArticleDouble)
  assert.isTrue(testArticleList.articles.length === 1)
}

function testGenerateListHTML(){
  var testArticleList = new ArticleList()
  function testArticleDouble(){
    this.webTitle = "title"
    this.fields = {
      bodyText: "text",
      thumbnail: "image"
    }
  }
  var testArticleDouble = new testArticleDouble()
  testArticleList.addArticle(testArticleDouble)
  assert.isTrue(testArticleList.generateListHTML() === "<div class='pure-g'><div class='pure-u-1-2'><div class='image'><img src='image'></div><div class='summary'><a href='#article/1'>title</a></div></div></div>")
}

testArticleListHasArticles();
testArticleListHasCounter();
testGenerateArticleId();
testAddNewArticleToList();
testGenerateListHTML();
