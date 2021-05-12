const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const express = require ('express')
const cors = require ('cors')
const app = express()
const PORT = 3000
const path = require('path')
const bodyParser = require('body-parser')
const server = app.listen(PORT,()=>console.log(`server OK runing on localhost:${PORT}`))
const dotenv = require('dotenv');
app.use(express.static('dist'))
dotenv.config();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;
console.log(`API key: ${API_KEY}`)
app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))    
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
app.post('/geturl', async (req, res) => {
    let ArticleUrl = `${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${req.body.url}`;
    console.log(ArticleUrl )
    const response = await fetch(ArticleUrl)
    console.log('server response: Done');
    const data = await response.json();
    console.log('server side sample: ', data);
    /*const projectData = {
      model:data.model,      
       text:data.sentence_list[0].text,
       score_tag: data.score_tag,
       confidence: data.confidence,
       irony: data.irony,
       subjectivity: data.subjectivity

     };*/
     try{res.send(data);}
     catch(error){console.log(error)}
     //console.log("Opject to send: ",projectData);
    });
    module.exports = app;