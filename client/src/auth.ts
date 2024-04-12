import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize(credentials, request) {
        const { token } = credentials as { token: string };
        return { id: token, name: token };
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
});
