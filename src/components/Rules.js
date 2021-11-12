import React, { Component } from 'react';

class Rules extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Règles du jeu</h1>
                </div>
                <div>
                    <h2>Déroulement de la partie</h2>
                </div>
                <div>
                    <p>Chaque joueur commence dans l'écurie, à tour de rôle, ils lancent le dé jusqu'à l'obtention d'un
                        six, ce qui leur permettra de sortir de l'écurie.<br/>
                        Une fois sorti , le joueur relancera le dé et avancera de case en fonction du chiffre affiché sur le dé, si le chiffre est un six
                        il rejoue, sinon, il passe le tour au joueur suivant.
                        Le but du jeu est que chaque joueur fasse le  tour complet du plateau, puis remonte la ligne de cases de sa propre couleur avant de terminer
                        au milieu du plateau , la victoire est à lui ! 
                    </p>
                </div>
            </div>
        );
    }
}

export default Rules;