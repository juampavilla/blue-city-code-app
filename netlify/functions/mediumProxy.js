// netlify/functions/mediumProxy.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { path } = event;
  const mediumUrl = `https://medium.com${path.replace('/.netlify/functions/mediumProxy', '')}`;

  try {
    const response = await fetch(mediumUrl, {
      headers: {//avoid Cloudflare
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      },
    });
    const data = await response.text();
    return {
      statusCode: 200,
      body: data,
      headers: {
        'Content-Type': 'application/xml',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};