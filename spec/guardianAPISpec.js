function testGenerateListUrl(){
  var news = new News()
  assert.isTrue(news.generateListUrl("2017-01-01").includes("2017-01-01"))
}
