const { checkURL} =require('./checkURL')
function handleSubmit(event) {
    //event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
    //
    if(checkURL(formText))
    {
   //  alert("::: Form Submitted :::")
       postData('http://localhost:3000/add', formText)
    .then(res => {
            alert('client side response', res);
           // document.getElementById('text').innerHTML = res
    })
    }
    else
    {alert("enter Valid URL")}
}
const postData = async(url ="",data={}) => {
    
    const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url : data})
        });
        try {
            alert("Back to client")
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch (error) {
            console.log("error", error);
        }
}

export { handleSubmit }
