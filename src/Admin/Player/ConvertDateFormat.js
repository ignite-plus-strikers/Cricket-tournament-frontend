function convertDateFormat(str) {
    var date = new Date(str);
       var mnth = ("0" + (date.getMonth()+1)).slice(-2);
       var day  = ("0" + date.getDate()).slice(-2);
      
    return [ date.getFullYear(), mnth, day].join("-");
}
export default convertDateFormat