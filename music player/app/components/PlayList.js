export default function PlayList({ onSongSelect, data }) {
    return (
        <div className="flex flex-col gap-5  pe-5 h-[90vh] my-8 p-12 w-fit">
            <h2 className="font-semibold text-2xl">Play Lists</h2>
            <div className="flex flex-col gap-5 overflow-y-scroll pe-5  my-2  w-fit">

                {
                    data.map(
                        (song, key) => {
                            return (
                                <div className="" key={key} onClick={() => { onSongSelect(song) }}>
                                    <div className="flex items-center gap-16  border border-slate-800 p-3 px-5 rounded-lg w-[22rem] cursor-pointer hover:shadow-xl card">
                                        <div className="">
                                            <h2 className="leading-4">{song.name}</h2>
                                            <p className="font-semibold">{song.singer}</p>
                                            <p className="font-semibold">{song.duration}</p>
                                        </div>
                                        <div className="h-16 w-16 overflow-hidden rounded-full flex justify-center items-center">
                                            <img src={song.image} alt="" className="aspect-square" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}