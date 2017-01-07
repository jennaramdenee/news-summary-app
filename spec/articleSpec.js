function testArticleHasTitle(){
  var testArticle = new Article("Test", 1);
  assert.isTrue(testArticle.hasOwnProperty("title"))
}

function testArticleHasId(){
  var testArticle = new Article("Another", 2);
  assert.isTrue(testArticle.hasOwnProperty("id"))
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
testArticleHasId();
testGenerateArticleHTML();
// testGetInfoFromUrl();
