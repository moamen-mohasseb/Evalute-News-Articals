// TODO declare a function to check the url ..
//  The question now how can i do it. I understand you are very busy mate so here's some hints pick the one you like
/* HINTS
    1. https://gist.github.com/franciskim/41a959f8e3989254ef5d
    2. https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
    3. https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
    4. https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
    5. https://stackoverflow.com/a/5717133/6483379
    6. https://www.npmjs.com/package/valid-url
 */

    function checkURL(myURL) {
      // alert("in check url")
       let pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
       if (pattern.test(myURL)) {
           return true;
       } else {
           return false;
       }
       //alert(pattern.test(myURL))
   }
  export{checkURL}