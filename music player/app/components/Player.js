export default function Player() {
    return (
        <div className="p-16 flex flex-col items-center justify-center h-[100vh] w-full">
            <div className="w-[400px] h-[400px] bg-black overflow-hidden flex justify-center items-center rounded-full">
                <img src="https://th.bing.com/th/id/OIP.k0xuWKOj0sXgY4j-njoD3QHaE8?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="rotate" />
            </div>
            <div className=" w-[80%] mt-7 ">
                <div className="">
                    <figure>
                        <figcaption>Rockabye Baby - Annie Marie</figcaption>

                        <audio controls src="./music1.mp3" className="w-full my-3"></audio>
                        <a href="/music1.mp3" className="underline" download={'true'}> Download </a>
                    </figure>
                </div>
            </div>

        </div>
    )
}