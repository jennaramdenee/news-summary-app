function testArticleHasTitle(){
  var testArticle = new Article("Test");
  assert.isTrue(testArticle.hasOwnProperty("title"))
}

function testGenerateArticleHTML(){
  var testArticle = new Article("Test");
  assert.isTrue(testArticle.generateArticleHTML() === "<div id='desc'><title>Test</title></div>")
}

function testGetInfoFromUrl(){
  var testArticle = new Article()
  testArticle.getInfoFromUrl();
}

testArticleHasTitle();
testGenerateArticleHTML();
// testGetInfoFromUrl();
