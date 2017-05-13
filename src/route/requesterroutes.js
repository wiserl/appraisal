import {Router} from 'express';
import {getCollection} from '../db.js';
import {requesters} from '../data/data.js';
import Requester from '../data/requester.js';


const router = new Router();

const getAllRequesters = async() => {
  const requesters = await getCollection('requesters');

  return await ( await requesters.find({active: true})).toArray();
}

const getRequester = async(name) => {
  name = (name);
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

  let requester = requesters.find( requesters => requesters.name === req.params.name);
  return res.json(requesters);

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

    
     router.delete( '/:name', (req,res) => {
  deleteRequesters(req.params.name);
  return res.send( `requesters ${req.params.name} has been deleted` );
});

    
    const removeRequesters = async(name) => {
  const requestersCollection = await getCollection('requesters');
  requestersCollection.updateOne(
    { _name: (name) },
   { $set: { "active": false }
   }
  );
}
    
    
    const deleteRequesters = async(name) => {
   const requestersCollection = await getCollection('requesters');
   requestersCollection.deleteOne(
     { _name: (name) }
   );
 }
    
    export default router; 
