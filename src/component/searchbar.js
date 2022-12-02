import filterEmoji from "./filterEmoji";

export default function SearchBar(props)
{
  function handleChange(ei){

      const value = ei.target.value;
      const filteredEmoji = filterEmoji(value,20);
      props.setEmoji(filteredEmoji)

    }
  
  return(

    <div className="component-search-input">
  <input onChange={handleChange}/>
</div>
     )
  }