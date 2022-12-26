import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken() {
	try {
		spotifyApi.setAccessToken(token.accessToken);
		spotifyApi.setRefreshToken(token.refreshToken);

		const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

		return {
			...token,
			accessToken: refreshedToken.access_token,
			accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
			refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
		};
	} catch (error) {
		// console.error(error);
		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}

export const authOptions = {
	providers: [
		SpotifyProvider({
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
			authorization: LOGIN_URL,
		}),
	],
	secret: process.env.JWT_SECRET,
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async jwt({ token, account, user }) {
			// first time
			if (account && user) {
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providersAccountId,
					accessTokenExpires: account.expires_at * 1000,
				};
			}
			// not expired
			if (Date.now() < token.accessTokenExpires) {
				// console.log("EXISTING TOKEN IS VALID");
				return token;
			} else {
				// expired, refreshing ...
				// console.log("ACCESS TOKEN EXPIRED , REFRESHING ......");
				return await refreshAccessToken(token);
			}
		},
		async session({ session, token }) {
			session.user.accessToken = token.accessToken;
			session.user.refreshToken = token.refreshToken;
			session.user.username = token.username;

			return session;
		},
	},
};

export default NextAuth(authOptions);
