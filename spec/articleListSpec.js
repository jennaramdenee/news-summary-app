function testArticleListHasArticles(){
  var testArticleList = new ArticleList()
  assert.isTrue(testArticleList.hasOwnProperty("articles"))
}

function testAddNewArticleToList(){
  var testArticleList = new ArticleList()
  function testArticleDouble(){}
  var testArticleDouble = new testArticleDouble()

  testArticleList.addArticle(testArticleDouble)
  assert.isTrue(testArticleList.articles.length === 1)
}

// function testGenerateListHTML(){
//   var testArticleList = new ArticleList()
//   function testArticleDouble(){}
//   var testArticleDouble = new testArticleDouble("Test Article")
// }

testArticleListHasArticles();
testAddNewArticleToList();
