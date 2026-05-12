import Card from './components/Card.jsx';
const USER={
	user1 :{
	   pseudo:"apex",
	   image:"https://img-cdn.hltv.org/playerbodyshot/3M9h08qvl3YOsaRcAvKhs4.png?ixlib=java-2.1.0&w=400&s=c1acc9777d9e3165140548582e9bf1f5",
	   email:"apex@gmail.com",
	   description:"best igl ever",
	   sexe:"homme"
   },
	user2 :{
	   pseudo:"Zywoo",
	   image:"https://profilerr.net/static/content/thumbs/335x335/1/93/vpjnei---c1x1x200px0p-rc--a38a8adaa4e86e9f8d23a09ffab90931.png",
	   email:"Zywoo@gmail.com",
	   description:"The Goat",
	   sexe:"femme"
   },
	user3 :{
	   pseudo:"ropz",
	   image:"https://www.lequipe.fr/_medias/img-photo-jpg/robin-ropz-kool-derniere-recrue-de-vitality-sur-vitality/1500000002137209/0:0,2000:1333-1200-800-75/49ebe.jpg",
	   email:"Ropz@gmail.com",
	   description:"best lurker ever",
	   sexe:"non binaire"
   },
}
const users = Object.values(USER);

function App() {
	console.log(Object.keys(USER).length);

  return (
    <>
		{(Object.keys(USER).length)>0 ? (
			<h1>Liste des Utilisateurs</h1>
		) : (
			<h1>Aucun utilisateur d'inscrit</h1>
		)}
		{(Object.keys(USER).length>0) && (
			<p>Il y a {(Object.keys(USER).length)} utilisateurs</p>
		)}
	  {users.map((user)=> {
			<Card
				key={user.email}
				pseudo={user.pseudo}
				image={user.image}
				email={user.email}
				description={user.description}

			/>
		})}
    </>
  );
}

export default App
