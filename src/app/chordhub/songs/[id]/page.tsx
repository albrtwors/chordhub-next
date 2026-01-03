
"use client"
import SongPreview from "@/components/chordhub/songs/SongPreview"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page(){
    const {id} = useParams()
    const [song,setSong]: any = useState(null)
    useEffect(()=>{
      
        axios.get(`/api/auth/songs/${id}`).then(res=>{
            const {song} = res.data
            setSong(song)
        })
       
        
    })
   
    
   

    return <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">{song && song.name}</h1>
        <SongPreview songStructure={song && song.structure}></SongPreview>
        
    </div>
}