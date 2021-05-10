// TODO: Configure the environment variables
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const express = require ('express')
const cors = require ('cors')
const app = express()
const PORT = 3000
app.use(express.static('dist'))
const bodyParser = require('body-parser')
app.use(cors())
const server = app.listen(PORT,()=>console.log(`server OK runing on localhost:${PORT}`))
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())


// TODO add Configuration to be able to use env variables
// TODO: Create an instance for the server
// TODO: Configure cors to avoid cors-origin issue
// TODO: Configure express to use body-parser as middle-ware.
// TODO: Configure express static directory.
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;
//const API_KEY ="d69075c3aedb46bc8e7e597e53224357";
console.log(`API key: ${API_KEY}`)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
    //console.log(req.body)
    
})
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.post('/add', async (req, res) => {
    let urlEntry = `${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${req.body.url}`;
    console.log(urlEntry)
    const response = await fetch(urlEntry)
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
     res.send(projectData);
     console.log("here i am: ",projectData);
    });

// designates what port the app will listen to for incoming requests
/*app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})*/

// TODO: export app to use it in the unit testing

module.exports = app;