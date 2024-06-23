
import PlayList from "./components/PlayList";
import Player from "./components/Player";

export default function Home() {
  
  return (
    <main className=" min-h-screen  flex root text-white ">
      <div className="w-[25%]">
      <PlayList />
      </div>
      <div className="w-[75%]">
      <Player />
      </div>
    </main>
  );
}
