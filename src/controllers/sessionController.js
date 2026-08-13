const { readData, writeData } = require('../utils/dataHandler');

const getSessions = (req, res) => {
  const sessions = readData('sessions.json');
  res.status(200).json(sessions);
};

const createSession = (req, res) => {
  const { requestId, mentorId, menteeId, date, topic } = req.body;
  if (!requestId || !mentorId || !menteeId || !date) {
    return res.status(400).json({ message: 'requestId, mentorId, menteeId, and date are required' });
  }

  const sessions = readData('sessions.json');
  const newSession = {
    id: `ses_${Date.now()}`,
    requestId,
    mentorId,
    menteeId,
    date,
    topic: topic || 'General Mentorship Session',
    feedback: null
  };

  sessions.push(newSession);
  writeData('sessions.json', sessions);
  res.status(201).json(newSession);
};

module.exports = { getSessions, createSession }; 
