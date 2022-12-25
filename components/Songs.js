import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

function Songs() {
	const playlist = useRecoilValue(playlistState);
	// console.log(playlist);
	return (
		<div className="p-4">
			{playlist?.tracks.items.map((itm, i) => (
				<div key={itm.track.id} className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer">
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
