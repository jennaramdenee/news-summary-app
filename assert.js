var assert = {
  isTrue: function(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Test Failed: " + assertionToCheck)
    } else {
      console.log("Test Passed")
    }
  }
}
