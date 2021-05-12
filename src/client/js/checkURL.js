    function checkURL(URL) {
      // alert("in check url")
      //get regex validator from https://stackoverflow.com/questions/4314741/url-regex-validation
       let regexPattern =  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
       if (regexPattern.test(URL)) {
           return true;
       } else {
           return false;
       }
    }
  export{checkURL}