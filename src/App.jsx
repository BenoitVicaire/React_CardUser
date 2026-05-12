import Card from './components/Card.jsx';
import SearchBar from './components/SearchBar.jsx';
import { USER } from './assets/Dataset.js';
import { useState } from 'react';


const users = Object.values(USER);


function App() {
	const [search, SetSearch] = useState("")
	const USERS_LIST = users.filter((e)=>{
    if(!e.pseudo.includes(search)){
        return false
    }else{
        return true
    }
})

  	return (
    <>
		<SearchBar Params={search} Setter={SetSearch} />
		{(Object.keys(USER).length)>0 ? (
			<h1>Liste des Utilisateurs</h1>
		) : (
			<h1>Aucun utilisateur d'inscrit</h1>
		)}
		{(Object.keys(USER).length>0) && (
			<p>Il y a {(Object.keys(USER).length)} utilisateurs</p>
		)}
	  	{USERS_LIST.map((user)=> {
			return <Card
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
