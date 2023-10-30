import Image from 'next/image';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Grid from './components/Grid/Grid';

export default function Home() {
	return (
		<main className="flex h-screen">
			<Sidebar/>
			<div className="tasks-section w-4/5">
				<Header />
				<Grid/>
			</div>
		</main>
	)
}
