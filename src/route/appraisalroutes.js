import {Router} from 'Express';
import {appraisals} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';




const getAllAppraisals = async() => {
  const appraisals = await getCollection('appraisals');

  return await ( await appraisals.find({})).toArray();
}

router.get ('/', (req, res) => {

  return getAllAppraisals()
    .then(appraisals => {
        console.log(appraisals);
        return res.json(appraisals);
    })
});
router.get ( '/:types', (req,res) => {

  let appraisal = appraisals.filter( appraisals => appraisals.type === req.params.type);
  return res.json(appraisals);

});
    export default router; 

    