const fs = require('fs');
const path = require('path');

const _EMAIL = process.env.EMAIL || 'completeEmail!';

// environment.prod.ts file
const envContent = `
export const environment = {
    production: true,
    proxyUrl: '/.netlify/functions',
    email: '${_EMAIL}',
    web: 'https://bluecitycode.com.ar',
    linkedin: 'https://www.linkedin.com/in/juan-pablo-villa-19074013b',
    youtube: 'https://youtube.com/@bluecitycode'
  };
`;

// write environment.prod.ts
const envFilePath = path.join(__dirname, 'src', 'environments', 'environment.prod.ts');
fs.writeFileSync(envFilePath, envContent);

console.log('environment.prod.ts file created.');