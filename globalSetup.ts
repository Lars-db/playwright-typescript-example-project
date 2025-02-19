import * as dotenv from 'dotenv';
import * as fs from 'fs';

export default async function globalSetup() {
  const ENV = process.env.ENV || 'test';
  const envPath = `environment/.env.${ENV}`;

  console.log(`🚀 Global Setup: Loading environment file: ${envPath}`);

  if (fs.existsSync(envPath)) {
    console.log(`✅ Found ${envPath}, loading it now...`);
    dotenv.config({ path: envPath });
  } else {
    console.warn(`⚠️ WARNING: ${envPath} not found!`);
  }
}
