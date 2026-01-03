
export default function SongPreview({songStructure}:any){
   return <div className="flex-1 ">
    <h3 className="text-3xl  font-bold">Previsualizacion</h3>
    <div className="overflow-y-scroll h-70">
        {songStructure?.parts.map((part:any, index:number)=>
                <div key={index} className="flex flex-col">
                    <h3 className="text-lg font-bold">{part.type.toUpperCase()}</h3>
                    <p style={{whiteSpace:'pre-wrap'}}>{part.text}</p>
                </div>)}
    </div>
   </div>
}