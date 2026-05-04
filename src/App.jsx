import Card from './components/Card.jsx';
const USER={
	user1 :{
	   pseudo:"apex",
	   image:"https://img-cdn.hltv.org/playerbodyshot/3M9h08qvl3YOsaRcAvKhs4.png?ixlib=java-2.1.0&w=400&s=c1acc9777d9e3165140548582e9bf1f5",
	   email:"apex@gmail.com",
	   description:"best igl ever"
   },
	user2 :{
	   pseudo:"Zywoo",
	   image:"https://profilerr.net/static/content/thumbs/335x335/1/93/vpjnei---c1x1x200px0p-rc--a38a8adaa4e86e9f8d23a09ffab90931.png",
	   email:"Zywoo@gmail.com",
	   description:"The Goat"
   },
	user3 :{
	   pseudo:"ropz",
	   image:"https://www.lequipe.fr/_medias/img-photo-jpg/robin-ropz-kool-derniere-recrue-de-vitality-sur-vitality/1500000002137209/0:0,2000:1333-1200-800-75/49ebe.jpg",
	   email:"Ropz@gmail.com",
	   description:"best lurker ever"
   },
}

const users = Object.values(USER);

function App() {

  return (
    <>
      <h1>Liste des Utilisateurs</h1>
	  {users.map((user)=> (
			<Card
				key={user.email}
				pseudo={user.pseudo}
				image={user.image}
				email={user.email}
				description={user.description}
			/>
	  ))}
    </>
  );
}

export default App
