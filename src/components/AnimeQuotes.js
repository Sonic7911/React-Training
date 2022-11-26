import { useEffect, useState } from "react"

export default function AnimeQuotes()
{
        const [data, setData]=useState('');
        {
    useEffect(()=>
    {
        fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then((data)=>{
        setData(data);
    })
        .then(quote => console.log(quote));
    }
    )
    
    }
    
    return(
        <div>
        <h1> Anime Quotes  </h1>
<div>
    {data.anime}     
</div>

        </div>
    )
}
