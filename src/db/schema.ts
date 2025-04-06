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
  // Widget customization settings
  widgetSettings: text("widget_settings"), // JSON string for widget customization
  // Branding settings
  brandColor: text("brand_color").default("#0ea5e9"),
  logo: text("logo"),
  // Access settings
  accessMode: text("access_mode").default("fifo"), // fifo, random, manual
  accessRate: integer("access_rate").default(10), // How many users to let in per day/week
  accessPeriod: text("access_period").default("day"), // day, week, month
  // Referral settings
  referralEnabled: integer("referral_enabled", { mode: "boolean" }).default(true),
  referralBonus: integer("referral_bonus").default(5), // How many positions to move up per referral
  // Analytics tracking
  totalSignups: integer("total_signups").default(0),
  conversionRate: text("conversion_rate").default("0"), // Stored as string to handle decimal
  // Timestamps
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
  status: text("status").notNull().default("pending"), // pending, approved, rejected, invited
  // Referral tracking
  referralCount: integer("referral_count").default(0),
  // Engagement metrics
  engagementScore: integer("engagement_score").default(0),
  lastEngagement: integer("last_engagement", { mode: "timestamp_ms" }),
  // User data
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  country: text("country"),
  city: text("city"),
  // Custom fields and additional data
  metadata: text("metadata"), // JSON string for additional data
  // Timestamps
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Add the self-reference after the table is defined
// This is a workaround for the circular reference issue
sql`ALTER TABLE waitlist_entries ADD CONSTRAINT fk_referred_by FOREIGN KEY (referred_by) REFERENCES waitlist_entries(id)`;

// A/B Testing tables
export const abTests = sqliteTable("ab_tests", {
  id: text("id").primaryKey(),
  waitlistId: text("waitlist_id")
    .notNull()
    .references(() => waitlists.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  status: text("status").notNull().default("draft"), // draft, active, paused, completed
  startDate: integer("start_date", { mode: "timestamp_ms" }),
  endDate: integer("end_date", { mode: "timestamp_ms" }),
  winningVariantId: text("winning_variant_id"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

export const abTestVariants = sqliteTable("ab_test_variants", {
  id: text("id").primaryKey(),
  testId: text("test_id")
    .notNull()
    .references(() => abTests.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  settings: text("settings").notNull(), // JSON string for variant settings
  trafficAllocation: integer("traffic_allocation").default(50), // Percentage of traffic
  conversionRate: text("conversion_rate").default("0"), // Stored as string to handle decimal
  impressions: integer("impressions").default(0),
  conversions: integer("conversions").default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Segmentation tables
export const segments = sqliteTable("segments", {
  id: text("id").primaryKey(),
  waitlistId: text("waitlist_id")
    .notNull()
    .references(() => waitlists.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  rules: text("rules").notNull(), // JSON string for segment rules
  memberCount: integer("member_count").default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Analytics tables
export const analyticsEvents = sqliteTable("analytics_events", {
  id: text("id").primaryKey(),
  waitlistId: text("waitlist_id")
    .notNull()
    .references(() => waitlists.id, { onDelete: "cascade" }),
  entryId: text("entry_id").references(() => waitlistEntries.id),
  eventType: text("event_type").notNull(), // signup, referral, visit, conversion, etc.
  eventData: text("event_data"), // JSON string for event data
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  timestamp: integer("timestamp", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Campaigns and messaging
export const campaigns = sqliteTable("campaigns", {
  id: text("id").primaryKey(),
  waitlistId: text("waitlist_id")
    .notNull()
    .references(() => waitlists.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  type: text("type").notNull(), // email, notification, sms, etc.
  status: text("status").notNull().default("draft"), // draft, scheduled, active, completed
  segmentId: text("segment_id").references(() => segments.id),
  content: text("content").notNull(), // JSON string for campaign content
  scheduledAt: integer("scheduled_at", { mode: "timestamp_ms" }),
  sentCount: integer("sent_count").default(0),
  openCount: integer("open_count").default(0),
  clickCount: integer("click_count").default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

// Widgets and embeds
export const widgets = sqliteTable("widgets", {
  id: text("id").primaryKey(),
  waitlistId: text("waitlist_id")
    .notNull()
    .references(() => waitlists.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  type: text("type").notNull().default("inline"), // inline, popup, fullpage, etc.
  settings: text("settings").notNull(), // JSON string for widget settings
  customCss: text("custom_css"),
  customJs: text("custom_js"),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  views: integer("views").default(0),
  conversions: integer("conversions").default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(sql`(strftime('%s', 'now') * 1000)`),
});