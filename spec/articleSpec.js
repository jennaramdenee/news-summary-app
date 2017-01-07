function testArticleHasNewsObject(){
  var testArticle = new Article();
  assert.isTrue(testArticle.hasOwnProperty("news"))
}

function testArticleGetInfoFromUrl(){
  var testArticle = new Article();
  testArticle.getInfoFromUrl();

  assert.isTrue(testArticle.hasOwnProperty("title"))
}

testArticleHasNewsObject();
testArticleGetInfoFromUrl();
