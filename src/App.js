import { useState } from "react";
import Header from "./component/Header";
import EmojiList from "./component/Emojilist";
import SearchBar from "./component/searchbar";
import filterEmoji from "./component/filterEmoji";
import "./index.css";

  
  export default function App()
  {
    const initialEmoji = filterEmoji("",20);
    const [filteredEmoji,setFilteredEmoji] = useState(initialEmoji);
 
  return (
    <div>
      <Header />
      <SearchBar setEmoji={setFilteredEmoji} />
      <EmojiList data={filteredEmoji} />
      </div>
  )
}