//const { checkURL} =require('./checkURL')
function handleSubmit(event) {
    //event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
       alert("Hiiiiiiiiiii")
     
alert("here"+checkURL(formText))
    if(checkURL(formText))
    {
     alert("::: Form Submitted :::")
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
    let pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (pattern.test(myURL)) {
        return true;
    } else {
        return false;
    }
    alert(pattern.test(myURL))
}
export { handleSubmit }
