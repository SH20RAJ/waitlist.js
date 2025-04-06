import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check if we have the required environment variables
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

async function main() {
  console.log('Initializing database...');
  
  // Create the database client
  const client = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
  
  // Create the drizzle ORM instance
  const db = drizzle(client);
  
  // Run migrations
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: './drizzle' });
  
  console.log('Database initialized successfully!');
  
  // Close the client
  await client.close();
}

main().catch((err) => {
  console.error('Error initializing database:', err);
  process.exit(1);
});
