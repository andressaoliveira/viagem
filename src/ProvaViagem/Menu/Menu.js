import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/viagem">Página inicial</Link>
                <Link to="/viagem/Destinos">Destinos</Link>
                <Link to="/viagem/Combustivel">Combustível</Link>
            </div>
        );
    }
}