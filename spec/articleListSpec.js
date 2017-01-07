function testArticleListHasArticles(){
  var testArticleList = new ArticleList()
  assert.isTrue(testArticleList.hasOwnProperty("articles"))
}

function testAddNewArticleToList(){
  var testArticleList = new ArticleList()
  function testArticle(){}
  var testArticle = new testArticle()

  testArticleList.addArticle(testArticle)
  assert.isTrue(testArticleList.articles.length === 1)
}

testArticleListHasArticles();
testAddNewArticleToList();
