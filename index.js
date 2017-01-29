var articleController = new ArticleController();

news.httpGetArticleList(articleController);

window.addEventListener("hashchange", function(){
  articleController.showArticle();
})
