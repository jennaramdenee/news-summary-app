function testArticleListViewHasModel(){
  var testArticleListView = new ArticleListView()
  assert.isTrue(testArticleListView.hasOwnProperty("articleList"))
}

function testUpdateArticleListView(){
  function ArticleListDouble(){}
  ArticleListDouble.prototype.generateListHTML = function(){
    return "<div><title>Test2</title></div>"
  }
  var testArticleListDouble = new ArticleListDouble()
  var testArticleListView = new ArticleListView(testArticleListDouble)
  testArticleListView.updateArticleListHTML()

  assert.isTrue(document.getElementById("app").innerHTML.includes("Test2"))
}

testArticleListViewHasModel()
testUpdateArticleListView()
