const fs = require('fs');
const path = require('path');

// Read environment variables
const spaceId = process.env['CONTENTFUL_SPACE_ID'] || '';
const accessToken = process.env['CONTENTFUL_ACCESS_TOKEN'] || '';
const previewKey = process.env['CONTENTFUL_PREVIEW_KEY'] || '';

// Create the environment content
const envContent = `export const environment = {
  production: true,
  spaceId: '${spaceId}',
  accessToken: '${accessToken}',
  previewKey: '${previewKey}'
};
`;

// Write the production environment file
const targetPath = path.join(__dirname, '../src/environments/environment.prod.ts');
fs.writeFileSync(targetPath, envContent);

console.log('Environment variables set for production build');
console.log(`Space ID: ${spaceId ? '***' + spaceId.slice(-4) : 'NOT SET'}`);
console.log(`Access Token: ${accessToken ? '***' + accessToken.slice(-4) : 'NOT SET'}`);
console.log(`Preview Key: ${previewKey ? '***' + previewKey.slice(-4) : 'NOT SET'}`);