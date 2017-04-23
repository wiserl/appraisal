import {Router} from 'Express';
import {getCollection} from '../db.js';
import {requesters} from '../data/data.js';
import Requester from '../data/requester.js';


const router = new Router();

const getAllRequesters = async() => {
  const requesters = await getCollection('requesters');

  return await ( await requesters.find({})).toArray();
}

const getRequester = async(name) => {
  name = parseInt(name);
  const requestersCollection = await getCollection('requesters');
  const value = await ( await requestersCollection.find({ name }) ).toArray();
  return value;
}

router.get ('/', (req, res) => {

  return getAllRequesters()
    .then(requesters => {
        console.log(requesters);
        return res.json(requesters);
    })
});

router.get ( '/:name', (req,res) => {

  let requester = requesters.filter( requesters => requesters.name === req.params.name);
  return res.json(requester);

});

router.post('/', (req,res)=>  {
    let requester = new Requester(
        req.body.name,
        req.body.email,
        req.body.appraisals
    );
    storeRequester(requester);
    return res.json(requester);
});

const storeRequester = async(requester) => {
    const requesterCollection = await getCollection ('requesters');
    requesterCollection.insertOne(requester);
}

    export default router; 
