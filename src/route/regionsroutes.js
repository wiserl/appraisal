import {Router} from 'Express';
import {regions} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';




const getAllRegions = async() => {
  const regions = await getCollection('regions');

  return await ( await regions.find({})).toArray();
}

router.get ('/', (req, res) => {

  return getAllRegions()
    .then(regions => {
        console.log(regions);
        return res.json(regions);
    })
});
    export default router; 