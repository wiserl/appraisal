import Express from 'express';
import Parser from 'body-parser';
import AppraisalRoute from "./route/route.js";
import {deleteData} from'./data/data.js';
import {loadData} from './data/data.js';
import regionsroutes from './route/regionsroutes.js'
import requesterroutes from './route/requesterroutes'
import appraisalroutes from './route/appraisalroutes'
import cors from 'cors';
const app = Express();
const port = process.env.PORT || 5000;

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(Parser.json());
app.use('/AppraisalTypes', AppraisalRoute);
app.use('/regions', regionsroutes);
app.use('/requesters', requesterroutes);
app.use('/appraisals', appraisalroutes)

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app; 


if(ENV === 'development'){
     deleteData();
     loadData();
    
}