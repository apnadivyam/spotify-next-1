import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "../components/Songs";
const colors = ["from-indigo-500", "from-blue-500", "from-green-500", "from-red-500", "from-yellow-500", "from-pink-500", "from-purple-500"];

function Center() {
	const { data: session } = useSession();
	const [color, setColor] = useState(null);
	const spotifyApi = useSpotify();
	const playlistId = useRecoilValue(playlistIdState);
	const [playlist, setPlaylist] = useRecoilState(playlistState);

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)]);
	}, [playlistId]);

	useEffect(() => {
		spotifyApi
			.getPlaylist(playlistId)
			.then((data) => {
				setPlaylist(data.body);
			})
			.catch((err) => {
				// console.log("!!!! ", err);
			});

		// console.log("playlist 🚀 ", playlist);
	}, [playlistId, spotifyApi]);

	return (
		<div className="flex-grow text-white overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-white">
			<header className=" absolute top-2 right-3">
				<div onClick={signOut} className=" flex items-center space-x-3 opacity-90 hover:opacity-80 bg-black cursor-pointer rounded-full p-1 pr-2">
					<img className=" rounded-full h-10" src={session?.user.image} alt="profil pic" />
					<h2>{session?.user.name}</h2>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</div>
			</header>
			<section className={` flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 p-8`}>
				<img className="h-44 w-44" src={playlist?.images[0].url} alt="playlist image" />
				<div>
					<p>PLAYLIST</p>
					<h1 className=" text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
				</div>
			</section>
			<div>
				<Songs />
			</div>
		</div>
	);
}

export default Center;
