(function(exports){

  var Guardian = function(){}

  function findTodayDate(){
    var date = new Date()
    var year = date.getFullYear().toString()
    var month = (date.getMonth()+1).toString()
    var day = (date.getDay()+1).toString()
    return year + "-" + ("0"+month).slice(-2) + "-" + ("0"+day).slice(-2)
  }

  function generateListUrl(date){
    var makersUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl"
    var apiRequestUrl = "http://content.guardianapis.com/search?from-date=" + date
    return makersUrl + apiRequestUrl
  }

  exports.Guardian = Guardian
  exports.findTodayDate = findTodayDate
  exports.generateListUrl = generateListUrl

})(this);
