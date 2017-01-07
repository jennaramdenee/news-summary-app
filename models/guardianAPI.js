function findTodayDate(){
  var date = new Date()
  var year = date.getFullYear().toString()
  var month = (date.getMonth()+1).toString()
  var day = (date.getDay()+1).toString()

  return year + "-" + ("0"+month).slice(-2) + "-" + ("0"+day).slice(-2)
}

function generateUrl(date){
  var makersUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl"
  var apiRequestUrl = "http://content.guardianapis.com/search?from-date=" + date

  return makersUrl + apiRequestUrl
}

// "http://news-summary-api.herokuapp.com/
// guardian?apiRequestUrl=
// http://content.guardianapis.com/politics
// /blog/2014/feb/17/alex-salmond-speech-first-
// minister-scottish-independence-eu-currency-live
// ?show-fields=body"

// {
// -response: {
// status: "ok"
// userTier: "developer"
// total: 1299
// startIndex: 1
// pageSize: 10
// currentPage: 1
// pages: 130
// orderBy: "newest"
// -results: [
// -{
// id: "football/2017/jan/06/west-ham-united-manchester-city-fa-cup-third-round-match-report"
// type: "article"
// sectionId: "football"
// sectionName: "Football"
// webPublicationDate: "2017-01-06T21:59:23Z"
// webTitle: "Manchester City cruise past West Ham thanks to David Silva masterclass"
// webUrl: https://www.theguardian.com/football/2017/jan/06/west-ham-united-manchester-city-fa-cup-third-round-match-report
// apiUrl: https://content.guardianapis.com/football/2017/jan/06/west-ham-united-manchester-city-fa-cup-third-round-match-report
// isHosted: false
// }
// -{
// id: "football/live/2017/jan/06/west-ham-manchester-city-fa-cup-third-round-live"
// type: "liveblog"
// sectionId: "football"
// sectionName: "Football"
// webPublicationDate: "2017-01-06T21:47:12Z"
// webTitle: "West Ham 0-5 Manchester City: FA Cup third round – as it happened"
// webUrl: https://www.theguardian.com/football/live/2017/jan/06/west-ham-manchester-city-fa-cup-third-round-live
// apiUrl: https://content.guardianapis.com/football/live/2017/jan/06/west-ham-manchester-city-fa-cup-third-round-live
// isHosted: false
// }
