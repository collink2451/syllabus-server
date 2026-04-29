import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import db from './db';
const app = express();
dotenv.config();
db.connect();
const port = process.env.PORT || 3000

import api from './api';
app.use(api);


// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser.
app.use(express.static(__dirname + '/static'))

app.get('/', (request, response) => {
  response.send('Express Home Page')
});

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err: any, request: Request, response: Response, next: any) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
