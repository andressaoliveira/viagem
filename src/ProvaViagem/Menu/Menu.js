import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/harry-potter">Página inicial</Link>
                <Link to="/harry-potter/Destinos">Destinos</Link>
                <Link to="/harry-potter/Combustivel">Combustível</Link>
            </div>
        );
    }
}