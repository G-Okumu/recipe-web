# HOW TO HIDE API KEY PROJECT DEMO

Author: George Okumu

- This project demonstrates how to securely use an API key by implementing a backend proxy. It consists of two parts: a backend for handling API requests and hiding the API key, and a frontend built with HTML and JavaScript for user interaction.


API Key Hiding Project with Backend Proxy
This project demonstrates how to securely use an API key by implementing a backend proxy. It consists of two parts: a backend for handling API requests and hiding the API key, and a frontend built with HTML and JavaScript for user interaction.

---

## Project Structure

```plaintext
.
├── backend/
│   ├── server.js         # Backend proxy server
│   ├── package.json      # Node.js dependencies
│   └── .env              # Environment variables (API key)
├──/
│   ├── index.html        # Frontend UI
│   ├── index.css
│   ├── recipe-detail.html
│   ├── recipe-detail.js
│   ├── main.css         
│   ├── footer.js        
│   └── foods.js          
└── README.md             # Project documentation

```


## How It Works

The frontend makes a request to the backend ```/api/get-data``` endpoint instead of directly accessing the external API.

The backend forwards the request to the external API, using the API key stored in the .env file.

The backend returns the response to the frontend, ensuring the API key is never exposed to the user.

# Backend Setup
The backend acts as a proxy to securely handle API requests and prevents exposing the API key directly in the frontend.

## Technologies
- Node.js
- Express.js
- dotenv for environment variables

###  Steps to Set Up the Backend
1. Navigate to the backend directory:

```
cd backend
```

2. Install dependencies:

```
npm install
```
3. Create a .env file to store your API key securely:

```plaintext
const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch'); // Install using `npm install node-fetch`

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = 5000;

// Proxy endpoint
app.get('/api/proxy', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://example-api.com/data?api_key=${apiKey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching API data:', error);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```


# Frontend Setup
The frontend interacts with the backend proxy to fetch data securely.

## Technologies
- HTML
- JavaScript
- Fetch API

### Steps to Set Up the Frontend

1. Navigate to the frontend directory.
- Open index.html in your browser.

 ``` Frontend Logic ```

- The frontend makes a request to the backend proxy:

```plaintext

fetch('http://localhost:5000/api/get-data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the data as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });

# LICENSE
- MIT