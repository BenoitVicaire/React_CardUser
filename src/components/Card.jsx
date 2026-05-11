import './Card.css' ;
import PP from '../assets/PP.jpg';

function Card({image, pseudo, email, description}){
    function handleMouseOver(event,classname){
        event.currentTarget.classList.add(classname);
    }
    function handleMouseLeave(event,classname){
        event.currentTarget.classList.remove(classname);
    }

    return (
        <article className='card'
            onMouseOver={(event)=>{
                event.stopPropagation();
                handleMouseOver(event,"border");
            }}
            onMouseLeave={(event)=>{
                event.stopPropagation();
                handleMouseLeave(event,"border")}}
        >
            <h2>{pseudo}</h2>
            <img src={image} alt="profil picture" />
            <h3>{email}</h3>
            <p>{description}</p>
        </article>
    )
}

export default Card;