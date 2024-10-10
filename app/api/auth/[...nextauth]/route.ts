import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile: (profile) => {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    picture: profile.picture,
                };
            },
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const res = await fetch('http://localhost:3000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const data = await res.json();
                if (res.ok && data.token) {
                    return { id: data.user.id, email: data.user.email, name: data.user.name, avatar: data.user.avatar };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/dang-nhap",
        signOut: "/dang-xuat",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            console.log('JWT callback:', { token, user, account });
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.avatar = user.avatar || (account?.provider === 'google' ? (user.picture || '') : '');
            }
            return token;
        },
        async session({ session, token }) {
            console.log('Session callback:', { session, token });
            session.user = {
                id: token.id as string,
                name: token.name as string,
                email: token.email as string,
                avatar: token.avatar as string,
            };
            return session;
        }
    },
});

export { handler as GET, handler as POST };
