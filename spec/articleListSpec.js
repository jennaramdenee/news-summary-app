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
  function testArticleDouble(){}
  var testArticleDouble = new testArticleDouble()
  testArticleList.addArticle(testArticleDouble)
  assert.isTrue(testArticleList.articles.length === 1)
}

function testGenerateListHTML(){
  var testArticleList = new ArticleList()
  testArticleList.addArticle("Test2")
  testArticleList.addArticle("Test3")
  assert.isTrue(testArticleList.generateListHTML() === "<div><title><a href='#article/1'>Test2</a></title></div><div><title><a href='#article/2'>Test3</a></title></div>")
}

testArticleListHasArticles();
testArticleListHasCounter();
testGenerateArticleId();
// testAddNewArticleToList();
// testGenerateListHTML();
