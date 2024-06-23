import Card from "./PlayCard";

export default function PlayList() {
    return (
        <div className="flex flex-col gap-5  pe-5 h-[90vh] my-8 p-12 w-fit">
            <h2 className="font-semibold text-2xl">Play Lists</h2>
            <div className="flex flex-col gap-5 overflow-y-scroll pe-5  my-2  w-fit">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}