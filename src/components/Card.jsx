import './Card.css' ;
import PP from '../assets/PP.jpg';

function Card(){
    return (
        <article className='card'>
            <h2>JOJO</h2>
            <img src={PP} alt="profil picture" />
            <h3>jojo@gmail.com</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ipsa porro, eum nulla aut saepe quas similique dolor molestiae exercitationem vero in praesentium. Officia odio quas omnis dolorem deserunt laudantium.</p>
        </article>
    )
}

export default Card;