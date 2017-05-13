import test from 'ava';

import {appraisalTypes} from '../data/data.js';
import AppraisalType from '../data/appraisaltype.js';
// import Region from '../data/region.js';
// import Requester from '../data/requester.js';
// import Appraisal from '../data/appraisal.js';

test( 'tests', t => {
  let appraisaltypetest = new AppraisalType(1004, 900, 30, "Colorado");

  t.deepEqual( appraisalTypes[0], appraisaltypetest, "Test types are not being created correctly" );
});

  