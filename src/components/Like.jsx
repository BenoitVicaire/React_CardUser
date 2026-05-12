import { useState } from "react";
import './Like.css' ;

function Like(){
    const [like,setLike] = useState(45);

    function handleClick(event){
        event.target.classList.toggle('like');
        if(event.target.classList.contains('like')){
            setLike(like+1)
        }else{
            setLike(like-1)
        }
    }

    return(
        <>
        <div 
            className="likeContainer"
            onClick={event=>handleClick(event)}
        >
            Like {like}
        </div>

        </>
    )
};

export default Like;