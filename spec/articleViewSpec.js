function testArticleViewHasModel(){
  function ArticleDouble(){}
  var testArticleDouble = new ArticleDouble()
  var testArticleView = new ArticleView(testArticleDouble)

  assert.isTrue(testArticleView.hasOwnProperty("articleModel"))
}

function testUpdateArticleView(){
  function ArticleDouble(){}
  ArticleDouble.prototype.generateArticleHTML = function(){
    return "<div id='desc'><title>Test</title></div>"
  }
  var testArticleDouble = new ArticleDouble()

  var testArticleView = new ArticleView(testArticleDouble)
  testArticleView.updateArticleHTML()
  assert.isTrue(document.getElementById("summary").innerHTML.includes("Test"))
}

testArticleViewHasModel();
testUpdateArticleView();
