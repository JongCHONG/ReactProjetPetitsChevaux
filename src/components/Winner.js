import React, { Component } from 'react';

class Winner extends Component {
    render() {
        const { players } = this.props
        return (
            <div>
                <div className="win">
                    {players[0].positionActuelle >= 63 && <div><p>{players[0].name} a gagné ! </p></div>}
                    {players[1].positionActuelle >= 63 && <div><p>{players[1].name} a gagné ! </p></div>}
                    {players[2].positionActuelle >= 63 && <div><p>{players[2].name} a gagné ! </p></div>}
                    {players[3].positionActuelle >= 63 && <div><p>{players[3].name} a gagné ! </p></div>}
                </div>
            </div>
        );
    }
}

export default Winner;