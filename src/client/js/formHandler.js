//const { checkURL} =require('./checkURL')
function handleSubmit(event) {
    //event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
       alert("Hiiiiiiiiiii")
       try{checkURL(formText) }
       catch (error) {
        console.log("error", error);
    }

    if(checkURL(formText))
    {
     console.log("::: Form Submitted :::")
     let reqBody = {
        theText: formText
    };
    fetch('/add',{
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('text').innerHTML = data.message
    })
    }
    else
    {alert("enter Valid URL")}
}
function checkURL(myURL) {
    alert("in check url")
 var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
 '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
 '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
 '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
 '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
 '(\\#[-a-z\\d_]*)?$','i');
 alert(pattern.test(myURL))
 return pattern.test(myURL);
}
export { handleSubmit }
