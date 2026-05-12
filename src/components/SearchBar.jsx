import './SearchBar.css' ;
import { useState } from "react";

function SearchBar({Params,Setter}){
    
    return(
        <input 
            type="text" 
            name="searchInput" 
            id="searchInput"
            placeholder='UserName?'
            value={Params}
            onChange={(event)=>{
                Setter(event.target.value)
            }}  
        />
    )
}

export default SearchBar;