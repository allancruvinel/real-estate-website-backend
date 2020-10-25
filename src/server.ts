import './database/connection'
import express from 'express';
const app = express();
app.use(express.json())
import routes from './routes';


app.use(routes);


console.log("App read to use")
app.listen(3333);