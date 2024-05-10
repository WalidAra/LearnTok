import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize(credentials) {
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
