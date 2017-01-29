function testControllerHasListModel(){
  function testArticleListDouble(){}
  var testArticleController = new ArticleController()
  assert.isTrue(testArticleController.hasOwnProperty("articleList"))
}

function testControllerCreatesNewView(){
  var testArticleController = new ArticleController()
  assert.isTrue(testArticleController.hasOwnProperty("articleListView"))
}

function testGetIdFromUrl(){
  var testArticleController = new ArticleController()
  var testlocation = window.location
  testlocation.hash = "/#article/1"
  assert.isTrue(testArticleController.getIdFromUrl(testlocation) === 1)
}

function testFindArticleFromId(){
  var testArticleController = new ArticleController()
  function ArticleDouble(){ this.id = 2 }
  var testArticleDouble = new ArticleDouble()
  function ArticleListDouble(){ this.articles = [testArticleDouble]}
  var testArticleList = new ArticleListDouble();
  testArticleController.articleList = testArticleList
  assert.isTrue(testArticleController.findArticleFromId(2) === testArticleDouble)
}

function testShowArticle(){
  var testArticleController = new ArticleController()
  var testlocation = window.location
  testlocation.hash = "/#article/2"

  function ArticleDouble(){ this.id = 2 }
  var testArticleDouble = new ArticleDouble()

  function ArticleListDouble(){ this.articles = [testArticleDouble]}
  var testArticleList = new ArticleListDouble();
  testArticleController.articleList = testArticleList
  assert.isTrue(testArticleController.showArticle() === testArticleDouble)
}

testControllerHasListModel();
testControllerCreatesNewView();
testGetIdFromUrl();
testFindArticleFromId();
// testShowArticle();
