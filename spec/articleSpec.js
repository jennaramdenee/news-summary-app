function testArticleHasAPIURL(){
  var testArticle = new Article();
  assert.isTrue(testArticle.hasOwnProperty("apiUrl"))
}

function testArticleHasId(){
  var testArticle = new Article();
  assert.isTrue(testArticle.hasOwnProperty("id"))
}

function testArticleHasTitle(){
  var testArticle = new Article("Another", 2);
  assert.isTrue(testArticle.hasOwnProperty("title"))
}

function testArticleHasImage(){
  var testArticle = new Article();
  assert.isTrue(testArticle.hasOwnProperty("image"))
}

function testGenerateArticleHTML(){
  var testArticle = new Article("Test", "TestAPI", 1);
  assert.isTrue(testArticle.generateArticleHTML() === "<div id='desc'><title>Test</title></div>")
}


testArticleHasAPIURL();
testArticleHasId();
testArticleHasTitle();
testArticleHasImage();
testGenerateArticleHTML();
