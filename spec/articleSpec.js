function testArticleHasTitle(){
  var testArticle = new Article("Test Article");
  assert.isTrue(testArticle.hasOwnProperty("title"))
}

function testArticleHasContent(){
  var testArticle = new Article("Test Article");
  assert.isTrue(testArticle.hasOwnProperty("content"))
}

testArticleHasTitle();
testArticleHasContent();
