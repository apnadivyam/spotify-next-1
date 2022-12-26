import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
	"streaming",
	"user-top-read",
	"user-read-email",
	"user-follow-read",
	"user-read-private",
	"user-library-read",
	"app-remote-control",
	"user-library-modify",
	"playlist-read-private",
	"playlist-modify-public",
	"playlist-modify-private",
	"user-read-playback-state",
	"user-read-recently-played",
	"playlist-read-colaborative",
	"user-modify-playback-state",
	"user-read-playback-position",
	"user-read-currently-playing",
].join(",");

const params = {
	scopes,
};

const querySearchPrams = new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + querySearchPrams.toString();

// var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
	clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
	clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
	redirectUri: "/",
});

export default spotifyApi;
export { LOGIN_URL };
