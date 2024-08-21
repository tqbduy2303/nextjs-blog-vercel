import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv23lidsa0rQncvS0mDz",
      clientSecret: "13227a5cb3e510a6b1937014fec22dedef05348a",
    }),
  ],
  callbacks: {
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