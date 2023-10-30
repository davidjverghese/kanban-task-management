import Image from 'next/image';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar/>
      <div className="tasks-section w-4/5">
        <Header/>
        <div className="grid grid-cols-4 gap-4 m-3">
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5 "></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5 "></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
          <div className="bg-slate-300 mt-4 p-5"></div>
        </div>
      </div>
    </main>
  )
}
