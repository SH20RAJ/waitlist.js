import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

// Users table
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "timestamp_ms" }),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Accounts table (for OAuth providers)
export const accounts = sqliteTable("accounts", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Sessions table
export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  sessionToken: text("session_token").notNull().unique(),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Verification tokens table (for email verification)
export const verificationTokens = sqliteTable("verification_tokens", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Waitlists table
export const waitlists = sqliteTable("waitlists", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Declare the type first to avoid circular reference issues
export const waitlistEntries = sqliteTable("waitlist_entries", {
  id: text("id").primaryKey(),
  waitlistId: text("waitlist_id")
    .notNull()
    .references(() => waitlists.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  name: text("name"),
  referralCode: text("referral_code").notNull(),
  referredBy: text("referred_by"),  // We'll add the reference after the table is defined
  position: integer("position").notNull(),
  status: text("status").notNull().default("pending"),
  metadata: text("metadata"), // JSON string for additional data
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Add the self-reference after the table is defined
// This is a workaround for the circular reference issue
sql`ALTER TABLE waitlist_entries ADD CONSTRAINT fk_referred_by FOREIGN KEY (referred_by) REFERENCES waitlist_entries(id)`;