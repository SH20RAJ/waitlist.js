import { and, eq } from "drizzle-orm";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { Adapter } from "next-auth/adapters";
import { v4 as uuid } from "uuid";
import * as schema from "../db/schema";

export function DrizzleAdapter(
  db: LibSQLDatabase<typeof schema>
): Adapter {
  return {
    async createUser(user) {
      const id = uuid();
      
      await db.insert(schema.users).values({
        id,
        email: user.email,
        emailVerified: user.emailVerified,
        name: user.name,
        image: user.image,
      });
      
      const dbUser = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.id, id))
        .then((res) => res[0]);
        
      return dbUser;
    },
    
    async getUser(id) {
      const dbUser = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.id, id))
        .then((res) => res[0] || null);
        
      return dbUser;
    },
    
    async getUserByEmail(email) {
      const dbUser = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.email, email))
        .then((res) => res[0] || null);
        
      return dbUser;
    },
    
    async getUserByAccount({ providerAccountId, provider }) {
      const result = await db
        .select()
        .from(schema.users)
        .innerJoin(schema.accounts, eq(schema.users.id, schema.accounts.userId))
        .where(
          and(
            eq(schema.accounts.providerAccountId, providerAccountId),
            eq(schema.accounts.provider, provider)
          )
        )
        .then((res) => res[0] || null);
        
      return result?.users || null;
    },
    
    async updateUser(user) {
      if (!user.id) {
        throw new Error("User id is required");
      }
      
      await db
        .update(schema.users)
        .set({
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
          updatedAt: new Date(),
        })
        .where(eq(schema.users.id, user.id));
        
      const dbUser = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.id, user.id))
        .then((res) => res[0]);
        
      return dbUser;
    },
    
    async deleteUser(userId) {
      await db.delete(schema.users).where(eq(schema.users.id, userId));
    },
    
    async linkAccount(account) {
      await db.insert(schema.accounts).values({
        id: uuid(),
        userId: account.userId,
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        refresh_token: account.refresh_token,
        access_token: account.access_token,
        expires_at: account.expires_at,
        token_type: account.token_type,
        scope: account.scope,
        id_token: account.id_token,
        session_state: account.session_state,
      });
    },
    
    async unlinkAccount({ providerAccountId, provider }) {
      await db
        .delete(schema.accounts)
        .where(
          and(
            eq(schema.accounts.providerAccountId, providerAccountId),
            eq(schema.accounts.provider, provider)
          )
        );
    },
    
    async createSession({ sessionToken, userId, expires }) {
      await db.insert(schema.sessions).values({
        id: uuid(),
        userId,
        sessionToken,
        expires,
      });
      
      const session = await db
        .select()
        .from(schema.sessions)
        .where(eq(schema.sessions.sessionToken, sessionToken))
        .then((res) => res[0]);
        
      return session;
    },
    
    async getSessionAndUser(sessionToken) {
      const result = await db
        .select({
          session: schema.sessions,
          user: schema.users,
        })
        .from(schema.sessions)
        .innerJoin(schema.users, eq(schema.sessions.userId, schema.users.id))
        .where(eq(schema.sessions.sessionToken, sessionToken))
        .then((res) => res[0] || null);
        
      if (!result) return null;
      
      return {
        session: result.session,
        user: result.user,
      };
    },
    
    async updateSession({ sessionToken, expires, userId }) {
      await db
        .update(schema.sessions)
        .set({
          expires,
          userId,
          updatedAt: new Date(),
        })
        .where(eq(schema.sessions.sessionToken, sessionToken));
        
      const session = await db
        .select()
        .from(schema.sessions)
        .where(eq(schema.sessions.sessionToken, sessionToken))
        .then((res) => res[0] || null);
        
      return session;
    },
    
    async deleteSession(sessionToken) {
      await db
        .delete(schema.sessions)
        .where(eq(schema.sessions.sessionToken, sessionToken));
    },
    
    async createVerificationToken({ identifier, expires, token }) {
      await db.insert(schema.verificationTokens).values({
        identifier,
        token,
        expires,
      });
      
      const verificationToken = await db
        .select()
        .from(schema.verificationTokens)
        .where(
          and(
            eq(schema.verificationTokens.identifier, identifier),
            eq(schema.verificationTokens.token, token)
          )
        )
        .then((res) => res[0]);
        
      return verificationToken;
    },
    
    async useVerificationToken({ identifier, token }) {
      const verificationToken = await db
        .select()
        .from(schema.verificationTokens)
        .where(
          and(
            eq(schema.verificationTokens.identifier, identifier),
            eq(schema.verificationTokens.token, token)
          )
        )
        .then((res) => res[0] || null);
        
      if (!verificationToken) return null;
      
      await db
        .delete(schema.verificationTokens)
        .where(
          and(
            eq(schema.verificationTokens.identifier, identifier),
            eq(schema.verificationTokens.token, token)
          )
        );
        
      return verificationToken;
    },
  };
}
