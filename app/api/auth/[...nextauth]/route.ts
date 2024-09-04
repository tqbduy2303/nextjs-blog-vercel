import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv23lidsa0rQncvS0mDz",
      clientSecret: "13227a5cb3e510a6b1937014fec22dedef05348a",
    }),
    LinkedInProvider({
      clientId:"" ,
      clientSecret:"",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        // Add your own logic to validate credentials
        const user = { id: 1, name: "Admin", email: "admin@example.com" };
        if (credentials.username === "admin" && credentials.password === "admin") {
          return user as any;
        } else {
          return null;
        }
      },
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      console.log(session, token);

      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };