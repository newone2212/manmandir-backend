const axios = require('axios');

const apiKey = '36d6743c416fe2bc787ffcb8dd035c98';
const username = '627560';

// Encode the credentials in base64 for Basic Auth
const auth = Buffer.from(`${username}:${apiKey}`).toString('base64');

// Set the Authorization header directly in the axios request
const headers = {
  'Authorization': `Basic ${auth}`,
};

const getDailyHoroscope = async (req, res) => {
  const { zodiacSign } = req.params;

  try {
    const response = await axios.post(`https://json.astrologyapi.com/v1/sun_sign_prediction/daily/${zodiacSign}`, {
      headers,
    });

    const horoscope = response.data;
    res.status(200).json(horoscope);
  } catch (error) {
    console.error('Error fetching daily horoscope:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getDailyHoroscope,
};
