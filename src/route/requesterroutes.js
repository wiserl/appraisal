import {Router} from 'Express';
import {requesters} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';




const getAllRequesters = async() => {
  const requesters = await getCollection('requesters');

  return await ( await requesters.find({})).toArray();
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
    export default router; 