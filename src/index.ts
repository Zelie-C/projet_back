import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

let app = express();
app.use(cors());
app.use(bodyParser.json());

const port = parseInt(process.env.PORT as string);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })