const { readData, writeData } = require('../utils/dataHandler');

const getRequests = (req, res) => {
    const requests = readData('requests.json');
    res.status(200).json(requests);
};

const createRequest = (req, res) => {
    const { menteeId, mentorId, message } = req.body;
    if (!menteeId || !mentorId) {
        return res.status(400).json({ message: 'Mentee ID and Mentor ID are required' });
    }

    const requests = readData('requests.json');
    const newRequest = {
        id: `req_${Date.now()}`, // FIXED: Added backticks around req_${Date.now()}
        menteeId,
        mentorId,
        status: 'pending',
        message: message || '',
        createdAt: new Date().toISOString()
    };

    requests.push(newRequest);
    writeData('requests.json', requests);
    res.status(201).json(newRequest);
};

const updateRequestStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['accepted', 'rejected'].includes(status)) {
        return res.status(400).json({ message: 'Status must be accepted or rejected' });
    }

    const requests = readData('requests.json');
    const index = requests.findIndex((r) => r.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Request not found' });
    }

    requests[index].status = status;
    writeData('requests.json', requests);
    res.status(200).json(requests[index]);
};

module.exports = { getRequests, createRequest, updateRequestStatus };