export default function Player({ song }) {
    return (
        <div className="p-16 flex flex-col items-center justify-center h-[100vh] w-full">
            <div className="w-[400px] h-[400px] bg-black overflow-hidden flex justify-center items-center rounded-full">
                <img src={song.image} alt="" className="rotate aspect-square" />
            </div>
            <div className=" w-[80%] mt-7 ">
                <div className="">
                    <figure>
                        <figcaption>{song.name}</figcaption>

                        <audio src={song.src} className="w-full my-3" autoPlay controls></audio>
                        <a href={song.src} className="underline" download> Download </a>
                    </figure>
                </div>
            </div>

        </div>
    )
}