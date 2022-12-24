import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
const colors = ["from-indigo-500", "from-blue-500", "from-green-500", "from-red-500", "from-yellow-500", "from-pink-500", "from-purple-500"];

function Center() {
	const { data: session } = useSession();
	const [color, setColor] = useState(null);

	useEffect(() => {
		setColor(Math.floor(Math.random() * colors.length));
	}, []);

	return (
		<div className="flex-grow text-white">
			<header className=" absolute top-2 right-3">
				<div className=" flex items-center space-x-3 opacity-90 hover:opacity-80 bg-red-800 cursor-pointer rounded-full p-1 pr-2">
					<img className=" rounded-full h-10" src={session?.user.image} alt="profil pic" />
					<h2>{session?.user.name}</h2>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</div>
			</header>
			<section className={` flex items-end space-x-7 bg-gradient-to-b to-black from-red-600 h-80 p-8`}>
				<h1>jai hind</h1>
			</section>
		</div>
	);
}

export default Center;
