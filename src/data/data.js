import Requester from './requester.js';
import Appraisal from './appraisal.js';
import AppraisalType from './appraisaltype.js';
import Region from './region.js';
import {getCollection} from '../db.js';

let greg = new AppraisalType (1004, 900, 30, "Colorado");
let mike = new AppraisalType (1004, 900, 30, "New Mexico");

let colorado = new Region ("Colorado", 30, 900);
let newMexico = new Region ("New Mexico", 30, 900);

let carl = new Requester ("carl", "carl@carl.com", 14);
let jake = new Requester ("jake", "jake@jake.com", 14);

let robinave = new Appraisal ("carl@carl.com", 1004, "3/14/17", "3/18/17", "Colorado");
let batonRouge = new Appraisal ("jake@jake.com", 1004, "4/14/17", "4/18/17", "New Mexico");

//let data = [greg, colorado, carl, robinave];
export let appraisalTypes = [greg, mike];
export let regions = [colorado, newMexico];
export let requesters = [carl, jake];
export let appraisals = [robinave, batonRouge];
//export default data;

export const loadData = async() => {
   const appraisalTypes = await getCollection('appraisalTypes');
   const regions = await getCollection('regions');
   const requesters = await getCollection('requesters');
   const appraisals = await getCollection ('appraisals');
   await appraisalTypes.insertMany([greg, mike]);
   await regions.insertMany([colorado, newMexico]);
   await requesters.insertMany([carl, jake]);
   await appraisals.insertMany([robinave, batonRouge]);

};

export const deleteData = async() => {
   const appraisalTypes = await getCollection('appraisalTypes');
   const regions = await getCollection('regions');
   const requesters = await getCollection('requesters');
   const appraisals = await getCollection ('appraisals');
   await appraisalTypes.remove({});
   await regions.remove({});
   await requesters.remove({});
   await appraisals.remove({});

}

