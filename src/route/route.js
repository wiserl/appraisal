import {Router} from 'Express';
import {appraisalType} from '../data/data.js';
import {getCollection} from '../db.js';


const router = new Router();

const getAllAppraisalTypes = async() => {
  const appraisalTypes = await getCollection('appraisalTypes');

  return await ( await appraisalTypes.find({})).toArray();
}

router.get ('/', (req, res) => {

  return getAllAppraisalTypes()
    .then(appraisalTypes => {
        console.log(appraisalTypes);
        return res.json(appraisalTypes);
    })
});


export default router;



