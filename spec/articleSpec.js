function testArticleHasBody(){
  var testArticle = new Article();
  assert.isTrue(testArticle.hasOwnProperty("body"))
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
  var testArticle = new Article("Test Title", "Test Body", "Test Image");
  assert.isTrue(testArticle.generateArticleHTML() === "<div class='pure-g'><div class='pure-u-1-2'><div class='image'><img src='Test Image'></div><div class='desc'>Test Title</div><div class='content'>Test Body</div></div></div>")
}


testArticleHasBody();
testArticleHasId();
testArticleHasTitle();
testArticleHasImage();
testGenerateArticleHTML();
