
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { v1CustomerRouter } from './version/v1';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))

//app.use('/api/v1/customer', v1CustomerRouter)

app.get('/hello', (req, res) => { 
  console.log('teste')  
  return res.status(200).send('Hello World!') 
});

app.listen(process.env.PORT || 8081, () => {
  console.log(`[App]: Server listening on ${process.env.PORT}`)
})

export { app };