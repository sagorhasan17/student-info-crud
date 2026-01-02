// getting-started.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import app from './index.js';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
