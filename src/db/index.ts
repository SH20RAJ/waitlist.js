import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

// In development, we can use a default SQLite database if DATABASE_URL is not set
const DATABASE_URL = process.env.DATABASE_URL || 'file:./local.db';

// Only warn about missing auth token for remote databases
if (!process.env.DATABASE_AUTH_TOKEN && !DATABASE_URL.includes('file:')) {
  console.warn('DATABASE_AUTH_TOKEN environment variable is not set. This is required for remote databases.');
}

// Create the database client
const client = createClient({
  url: DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

// Create the drizzle ORM instance
export const db = drizzle(client, { schema });

// Export the schema for use in other files
export { schema };
