import React from 'react';

// Creation d'une classe Voiture
// extends : On hérite de la classe Component définie dans React
// React.component est un composant que les dev react ont crées
class Voiture extends React.Component{
    // Attributs

    // Methodes
constructor(){
    super(); // il prend le comportement du composant parent : excecution du constructor qui est defini dans React.Component
}

render(){
    return <h2>Coucou, je suis la voiture {this.props.brand}, de couleur {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
    }
}


export default Voiture;
