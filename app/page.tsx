import Link from "next/link";
import React from "react";

const navigation = [
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<h1 className="z-10 text-4xl duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Danny O'Neal
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi my name is Danny O'Neal. I am a Software Engineer.{" "}
					{/* <Link
						target="_blank"
						href="https://upstash.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						Upstash
					</Link>

					<br />
					and working on{" "}
					<Link
						target="_blank"
						href="https://planetfall.io"
						className="underline duration-500 hover:text-zinc-300"
					>
						planetfall.io
					</Link>{" "}
					at night. */}
				</h2>
			</div>
		</div>
	);
}
