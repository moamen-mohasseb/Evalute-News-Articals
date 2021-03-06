const { checkURL} =require('./checkURL')
function handleSubmit(event) {
    event.preventDefault()
    let formUrlText = document.getElementById('article-url').value
     if(checkURL(formUrlText))
    {
         postData('http://localhost:3000/geturl', formUrlText)
    .then(res => {
        console.log(res)
        updateUI(res)
    })
    }
    else
    {alert("Enter valid URL")}
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
            return await response.json();
        } catch (error) {
            console.log("error", error);
        }
}
function updateUI(res)
{
    document.getElementById('Model').innerHTML =`Model : ${res.model}`
    document.getElementById('Text').innerHTML =`Text : ${res.sentence_list[0].text}`
    document.getElementById('Agreement').innerHTML = `Agreement : ${res.agreement}`
    document.getElementById('Subjectivity').innerHTML = `Subjectivity : ${res.subjectivity}`
    document.getElementById('Confidence').innerHTML = `Confidence : ${res.confidence}`
    document.getElementById('Irony').innerHTML = `Irony : ${res.irony}`
    document.getElementById('Score_tag').innerHTML = `Score_tag : ${res.score_tag}`
}
export { handleSubmit }
