//
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const express = require ('express')
const cors = require ('cors')
const app = express()
const PORT = 3000
const path = require('path')
app.use(express.static('dist'))
const bodyParser = require('body-parser')
app.use(cors())
const server = app.listen(PORT,()=>console.log(`server OK runing on localhost:${PORT}`))
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
//
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;
//const API_KEY ="d69075c3aedb46bc8e7e597e53224357";
console.log(`API key: ${API_KEY}`)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
    //console.log(req.body)
    
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// a route that handling post request for new URL that coming from the frontend


app.post('/add', async (req, res) => {
    let ArticleUrl = `${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${req.body.url}`;
    console.log(ArticleUrl )
    const response = await fetch(ArticleUrl )
    console.log('server response: Done');
    const data = await response.json();
    console.log('server side: ', data.score_tag);
    const projectData = {
       text:data.sentence_list[0].text,
       score_tag: data.score_tag,
       confidence: data.confidence,
       irony: data.irony,
       subjectivity: data.subjectivity,
     };
     try{res.send(projectData);}
     catch(error){console.log(error)}
     console.log("here i am: ",projectData);
    });
//
    module.exports = app;