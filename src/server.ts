import './database/connection'
import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json())
app.use(cors())
import routes from './routes';


app.use(routes);


console.log("App read to use")
app.listen(3333);