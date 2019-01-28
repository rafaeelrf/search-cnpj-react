import React from 'react';
import './Home.css';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quotation">
                <FontAwesomeIcon icon="chart-line" color="white"/>
                <p className="title">Cotação de seguros</p>
                <small className="subtitle">Solução inovadora da líder do mercado</small>
                <Link className="link" to="/search-cnpj">
                    <Button label="Iniciar" color="#a769f4" icon="arrow-right"/>
                </Link>
            </div>
        );
    }
}