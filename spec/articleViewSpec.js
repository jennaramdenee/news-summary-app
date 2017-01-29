function testArticleViewHasModel(){
  function ArticleDouble(){}
  var testArticleDouble = new ArticleDouble()
  var testArticleView = new ArticleView(testArticleDouble)

  assert.isTrue(testArticleView.hasOwnProperty("articleModel"))
}

function testUpdateArticleView(){
  function ArticleDouble(){}
  ArticleDouble.prototype.generateArticleHTML = function(){
    return "<div id='desc'>Test</div>"
  }
  var testArticleDouble = new ArticleDouble()

  var testArticleView = new ArticleView(testArticleDouble)
  testArticleView.updateArticleHTML()
  assert.isTrue(document.getElementById("app").innerHTML.includes("Test"))
}

testArticleViewHasModel();
testUpdateArticleView();
