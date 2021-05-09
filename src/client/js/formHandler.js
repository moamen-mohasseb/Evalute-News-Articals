function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
       alert(formText)
    if(validURL(formText))
    {
     console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/add')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
    }
    else
    {alert("enter Valid URL")}
}

export { handleSubmit }
