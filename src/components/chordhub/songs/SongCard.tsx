export default function SongCard({name, type='show', author, id}: any){
    return <div className="px-6 py-3 flex flex-col items-center justify-center bg-gray-100 rounded-sm">
        <div className="w-50 h-50 bg-sky-400 rounded-lg"></div>

        <h3 className="text-lg">{name}</h3>
        <p>{author}</p>

    </div>
}