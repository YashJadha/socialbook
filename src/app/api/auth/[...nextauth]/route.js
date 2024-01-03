import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "884536225290-8384h013soprpln2n370bfqo839pe32f.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const data = {
                    email: credentials.email,
                    password: credentials.password
                }
                let user;
                const resdata = await axios.post('http://localhost:3000/api/authentication', data);
                if (resdata.status === 200) {
                    user = await resdata.data;
                    return user;
                }
            }
        }),
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token.user
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    // debug: true,
    pages: {
        signIn: '/login',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },

});

export { handler as GET, handler as POST }