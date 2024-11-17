const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const API_KEY = process.env.API_KEY;

app.get('/api/get-data', async (req, res) => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/recipe?query=meat', {
      headers: {
        'X-Api-Key': API_KEY,
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
