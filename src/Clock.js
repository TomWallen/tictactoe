import React from 'react';

class Clock extends React.Component{
    
    // Premier fonction qui s'execute pour CREER le composant --> c'est celle qui le construit
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    // La fonction qui affiche l'HTML sur l'écran. To render = Afficher en anglais
    render(){
        return(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }

    // Une fois que l'affichage (render) a lieu, la fonction suivante s'execute directement
    // componentDidMount = le composant vient de s'afficher
    componentDidMount(){
        this.timerID = setInterval(()=>this.tictac() ,1000)
        
    }

    // Voici une fonction qui permet de mettre à jour la date dans l'état (this/state.date)
    // Attention: qui dit mise à jour de l'état : setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }

    // juste avant de finir le lifecycle et de quitter le composant, nous effaçons le contenu de l'intervalle de temps

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
}


export default Clock;