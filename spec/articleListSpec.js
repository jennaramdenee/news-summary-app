function testArticleListHasArticles(){
  var testArticleList = new ArticleList()
  assert.isTrue(testArticleList.hasOwnProperty("articles"))
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
  var ArticleDouble = function(title){ this.title = title }
  var testArticleDouble = new ArticleDouble("Test2")
  var testArticleDouble2 = new ArticleDouble("Test3")
  testArticleList.addArticle(testArticleDouble)
  testArticleList.addArticle(testArticleDouble2)

  assert.isTrue(testArticleList.generateListHTML() === "<div><title>Test2</title></div><div><title>Test3</title></div>")
}

testArticleListHasArticles();
testAddNewArticleToList();
testGenerateListHTML();
