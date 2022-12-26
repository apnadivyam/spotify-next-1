import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
	return (
		<div className="Login flex items-center bg-black min-h-screen justify-center flex-col space-y-5">
			<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#18D860" className="bi bi-spotify" viewBox="0 0 16 16">
				<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
			</svg>

			<div className="text-white max-w-sm text-xl px-8">Spotif Clone</div>
			<div className="text-white max-w-sm px-8">Note❗Sorry❗Unfortunately we are unable to provide real playback for the moment as SPOTIFY has limited it's support to PREMIUM MEMBERS only</div>

			{Object.values(providers).map((p) => (
				<div key={p.name}>
					<button onClick={() => signIn(p.id, { callbackUrl: "/" })} className=" bg-[#18D860] p-5 rounded-full">
						Login with {p.name}
					</button>
				</div>
			))}

			<div className="text-white max-w-sm px-8">App developed by Divyam Kumar</div>
		</div>
	);
}

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
