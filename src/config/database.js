import 'dotenv.config';

import { neon, neonconfig } from 'drizzle-orm/neon-serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql);

export {db, sql};