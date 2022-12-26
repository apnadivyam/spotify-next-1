import { useRecoilValue, useRecoilState } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";

function Songs() {
	const playlist = useRecoilValue(playlistState);
	// console.log(playlist);

	const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
	const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
	const spotifyApi = useSpotify();
	// function fun() {
	// }

	return (
		<div className="p-4">
			{playlist?.tracks.items.map((itm, i) => (
				<div
					key={itm.track.id}
					onClick={() => {
						setCurrentTrackId(itm.track.id);
						setIsPlaying(true);
						// try {
						// 	spotifyApi.play({ uris: [itm.track.uri] });
						// } catch (error) {
						// alert("Sorry to actually play the track you need a SPOTIFY PREMIUM ACCOUNT");
						// }
					}}
					className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer">
					<div className=" w-5">{i + 1}</div>
					<img src={itm.track.album.images[2].url} alt="" />
					<div className="flex-grow grid grid-cols-2 space-x-3">
						<div>
							<p className="font-bold h-6 overflow-hidden">{itm.track.name}</p>
							<p className="h-6 font-thin overflow-hidden">
								{itm.track.artists.map((artist, i) => {
									if (i) return ", " + artist.name;
									return artist.name;
								})}
							</p>
						</div>
						<div>
							<p>
								{Math.floor(itm.track.duration_ms / 60000)}m {Math.floor((itm.track.duration_ms / 1000) % 60)}s
							</p>
							<p className="h-6 font-thin overflow-hidden">{itm.track.album.name}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Songs;
