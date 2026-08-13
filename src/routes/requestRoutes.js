const express = require('express');
const router = express.Router();
const { getRequests, createRequest, updateRequestStatus } = require('../controllers/requestController');

router.get('/', getRequests);
router.post('/', createRequest);
router.put('/:id/status', updateRequestStatus);

module.exports = router;