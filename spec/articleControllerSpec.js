function testControllerHasListModel(){
  function testArticleListDouble(){}
  var testArticleController = new ArticleController(testArticleListDouble)
  assert.isTrue(testArticleController.hasOwnProperty("articleList"))
}

function testControllerCreatesNewView(){
  var testArticleController = new ArticleController()
  assert.isTrue(testArticleController.hasOwnProperty("articleListView"))
}

testControllerHasListModel();
testControllerCreatesNewView();
