import StarsBackground from '@/components/StarsBG';

export default function Home() {
	return (
		<div className="w-full h-screen relative">
			<StarsBackground />
			<div className="w-full h-full flex flex-col text-[18rem] font-black items-center justify-center font-thunder text-white leading-[0.8]">
				<div className="w-fit flex flex-col items-end justify-center">
					<h1 className="uppercase">Eduard</h1>
					<h1 className="uppercase translate-x-2">Teller</h1>
				</div>
			</div>
		</div>
	);
}
