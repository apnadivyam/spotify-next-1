import { useRecoilValue, useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
// import { useSession } from "next-auth/react";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { useState, useEffect } from "react";

const dummySong = {
	album: {
		album_type: "single",
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/6X8lhZ7YaRUBlOsOYimlyD",
				},
				href: "https://api.spotify.com/v1/artists/6X8lhZ7YaRUBlOsOYimlyD",
				id: "6X8lhZ7YaRUBlOsOYimlyD",
				name: "Kiasmos",
				type: "artist",
				uri: "spotify:artist:6X8lhZ7YaRUBlOsOYimlyD",
			},
		],
		external_urls: {
			spotify: "https://open.spotify.com/album/28ca0l17GEvV86ZuPAND8g",
		},
		href: "https://api.spotify.com/v1/albums/28ca0l17GEvV86ZuPAND8g",
		id: "28ca0l17GEvV86ZuPAND8g",
		images: [
			{
				height: 640,
				url: "https://i.scdn.co/image/ab67616d0000b2732c97f5f49b3f9b3fff0636a0",
				width: 640,
			},
			{
				height: 300,
				url: "https://i.scdn.co/image/ab67616d00001e022c97f5f49b3f9b3fff0636a0",
				width: 300,
			},
			{
				height: 64,
				url: "https://i.scdn.co/image/ab67616d000048512c97f5f49b3f9b3fff0636a0",
				width: 64,
			},
		],
		name: "Looped",
		release_date: "2015-04-18",
		release_date_precision: "day",
		total_tracks: 3,
		type: "album",
		uri: "spotify:album:28ca0l17GEvV86ZuPAND8g",
	},
	artists: [
		{
			external_urls: {
				spotify: "https://open.spotify.com/artist/6X8lhZ7YaRUBlOsOYimlyD",
			},
			href: "https://api.spotify.com/v1/artists/6X8lhZ7YaRUBlOsOYimlyD",
			id: "6X8lhZ7YaRUBlOsOYimlyD",
			name: "Kiasmos",
			type: "artist",
			uri: "spotify:artist:6X8lhZ7YaRUBlOsOYimlyD",
		},
	],
	disc_number: 1,
	duration_ms: 377402,
	explicit: false,
	external_ids: {
		isrc: "GBWZD1506601",
	},
	external_urls: {
		spotify: "https://open.spotify.com/track/53k0rPq5qhzslsjB3XBdl8",
	},
	href: "https://api.spotify.com/v1/tracks/53k0rPq5qhzslsjB3XBdl8",
	id: "53k0rPq5qhzslsjB3XBdl8",
	is_local: false,
	name: "Looped",
	popularity: 40,
	preview_url: "https://p.scdn.co/mp3-preview/bfeaa806fb3a152898831ba586a81f4108d6ffd3?cid=d8c49285ab7c41208bbf9811f980cdff",
	track_number: 1,
	type: "track",
	uri: "spotify:track:53k0rPq5qhzslsjB3XBdl8",
};

function Player() {
	const spotifyApi = useSpotify();
	// const { data: session, status } = useSession();
	const currentTrackId = useRecoilValue(currentTrackIdState);
	const [isplaying, setIsPlaying] = useRecoilState(isPlayingState);
	// const [volume, setVolume] = useState(50);
	const [songInfo, setSongInfo] = useState(dummySong);

	const fetchSongInfo = async () => {
		if (currentTrackId) {
			const trackInfo = await fetch(
				// helo
				`https://api.spotify.com/v1/tracks/${currentTrackId}`,
				// "https://api.spotify.com/v1/me/player/currently-playing",
				// helo
				{
					headers: {
						Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
					},
				},
			).then((res) => res.json());
			// console.log("songInfo before =>  ", songInfo);
			setSongInfo(trackInfo);
			// console.log("trackInfo  =>  ", trackInfo);
		}
	};

	// console.log(songInfo);
	useEffect(() => {
		fetchSongInfo();
	}, [currentTrackId, spotifyApi]);

	// fetchSongInfo();
	return (
		<div className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer">
			<img src={songInfo?.album.images[2].url} alt="" />
			<div className="flex-grow grid grid-cols-2 space-x-3">
				<div>
					<p className="font-bold h-6 overflow-hidden">{songInfo?.name}</p>
					<p className="h-6 font-thin overflow-hidden">
						{songInfo?.artists.map((artist, i) => {
							if (i) return ", " + artist.name;
							return artist.name;
						})}
					</p>
				</div>
				<div>
					<p>
						{Math.floor(songInfo?.duration_ms / 60000)}m {Math.floor((songInfo?.duration_ms / 1000) % 60)}s
					</p>
					<p className="h-6 font-thin overflow-hidden">{songInfo?.album.name}</p>
				</div>
			</div>
		</div>
	);
}
export default Player;
