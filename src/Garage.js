import React from 'react';
import Voiture from './Voiture';


class Garage extends React.Component{

// Attributs



// Methods
render(){
    const def ="grise";
    const voit ={color:"Blanche", brand:"Citroen", owner:"None", id:"WWWWW"};
    // On ouvre les parenthèses pour injecter de l'html via l'annotation JSX - javascript XML
    // c'est ici que l'on définit le contenu HTML affichable à l'appel de la balise <Garagre /> dans index.js
    return (
        <div>
            <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
            <Voiture color='verte' brand="Ford" owner="Cunégonde" id="NZXT6A"/><br/>
            <Voiture color='rose' brand="BMW" owner="Vulviza" id="AHBJA4"/><br/>
            <Voiture color='bleue' brand="Ferrari" owner="Eglantine" id="DSZA44"/><br/>
            <Voiture color='jaune' brand="Peugoet" owner="Clitorine" id="MMLL10"/><br/>
            <Voiture color='noire' brand="Audi" owner="Jean-Eude" id="BRRAHH"/><br/>
            <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id}/>
        </div>

    );
}
}

export default Garage;