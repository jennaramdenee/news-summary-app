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
  function testArticleDouble(text){}
  var testArticleDouble = new testArticleDouble("Test")

  testArticleList.addArticle(testArticleDouble)
  assert.isTrue(testArticleList.articles.length === 1)
}

function testGenerateListHTML(){
  var testArticleList = new ArticleList()
  var ArticleDouble = function(title){ this.id = id, this.title = title}
  var testArticleDouble = new ArticleDouble("Test2")
  var testArticleDouble2 = new ArticleDouble("Test3")
  testArticleList.addArticle(testArticleDouble)
  testArticleList.addArticle(testArticleDouble2)

  assert.isTrue(testArticleList.generateListHTML() === "<div><title><a href='#article/1'>Test2</a></title></div><div><title><a href='#article/2'>Test3</a></title></div>")
}

testArticleListHasArticles();
testArticleListHasCounter();
testGenerateArticleId();
testAddNewArticleToList();
testGenerateListHTML();
