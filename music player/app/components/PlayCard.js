export default function PlayCard() {
    return (
        <div className="flex items-center gap-16  border border-slate-800 p-3 px-5 rounded-lg w-[22rem] cursor-pointer hover:shadow-xl card">
            <div className="">
                <h2 className="leading-4">Lorem ipsum dolor sit...</h2>
                <p className="font-semibold">Ram Kumar</p>
                <p className="font-semibold">5:00</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full flex justify-center items-center">
                <img src="https://th.bing.com/th/id/OIP.k0xuWKOj0sXgY4j-njoD3QHaE8?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="h-full" />
            </div>
        </div>
    )
}