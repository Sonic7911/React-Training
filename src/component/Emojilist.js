import EmojiItem from "./Emojiitem";

export default function EmojiList(props)
{
    
    const data = props.data;
    console.log(data);
    return(

        <div className="componenet-emoji-results">
{
    data.map(function(arr)
    {
        return(
            <EmojiItem symbol ={arr.symbol} title={arr.title}/>
        )
    })
}
        </div>
        
        )
}