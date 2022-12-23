// import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

function Sidebar({}) {
	// const { data: session, status } = useSession();
	// console.log(session);

	return (
		<div className="Sidebar text-gray-500 border-r border-gray-900 pl-2 pt-4">
			<div className=" space-y-3 ">
				<button onClick={() => signOut()} className="flex items-center space-x-2 hover:text-white">
					<p>Log Out</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>
					<p>Home</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
					<p>Search</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
					</svg>
					<p>Library</p>
				</button>
				<hr className="bor-t-[0.1px] border-gray-900" />
				<button className="flex items-center space-x-2 hover:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
						/>
					</svg>
					<p>Create Playlist</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
					<p>Liked Songs</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
					</svg>
					<p>Your Episodes</p>
				</button>
				<hr className="bor-t-[0.1px] border-gray-900" />
				{/* Playlists */}
				<button className="hover:text-white cursor-pointer">playlist ...</button>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
				<p className="hover:text-white cursor-pointer">playlist ...</p>
			</div>
		</div>
	);
}

export default Sidebar;
