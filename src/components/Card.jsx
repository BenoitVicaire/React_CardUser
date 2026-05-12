import './Card.css' ;
import Like from './Like.jsx';

function Card({image, pseudo, email, description, sexe, className='card'}){
    return (
        <>
            <article  className={className}>
                <h2>{pseudo}</h2>
                <img src={image} alt="profil picture" />
                <h3>{email}</h3>
                <p>{description}</p>
            <Like />
            </article>
        </>
    )
}

export default Card;