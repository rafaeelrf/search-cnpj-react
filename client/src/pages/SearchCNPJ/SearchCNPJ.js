import React from 'react'
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchCNPJ.css';
import validate from 'validate.js';
import InputMask from 'react-input-mask';
import getCompanyByCnpj from '../../services/cnpj';

export default class SearchCNPJ extends React.Component {

    constraints = {
        cnpj: {
            presence: true,
            length: {
                minimum: 14,
                message: "deve conter 14 caracteres"
            },
        },
    };
    
    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
            cnpjErrorMessage: null,
            researched: false,
            cnpjFounded: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ cnpj: event.target.value.replace(/\D/g, ''), researched: false });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const validation = validate({
            cnpj: this.state.cnpj,
        }, this.constraints);
        if (validation) {
            this.setState({ cnpjErrorMessage: validation.cnpj[0] });
        } else {
            this.setState({ cnpjErrorMessage: '', researched: true });

            const result = await getCompanyByCnpj(this.state.cnpj);
            if (result) {
                this.setState({ cnpjFounded: true });
            } else {
                this.setState({ cnpjFounded: false });
            }
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="row">
                        <FontAwesomeIcon icon="chart-line" color="white"/>
                        <div className="titleContainer">
                            <small className="headerTitle">Nova cotação</small>
                            <small className="headerSubtitle">#0980</small>
                        </div>
                    </div>
                    <img className="user-image" src="https://cdn.dribbble.com/users/79571/screenshots/2562782/user_-_illustration.png" height="42" width="42"/>
                </div>
                <div className="body-container">
                    <div>
                        <div className="search-cnpj-container">
                            <FontAwesomeIcon icon="search" color="#8d84ee"/>
                            <p className="search-cnpj-title">Buscar por CNPJ ou Empresa</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="container-cnpj">
                                <label className="label-cnpj">CNPJ / Empresa</label>
                                <div className="input-cnpj-container">
                                    <InputMask className="input-cnpj" maskChar="_" mask="99.999.999/9999-99" value={this.state.cnpj} onChange={this.handleChange} autoFocus={true} />
                                    {this.state.researched && this.state.cnpjFounded && <FontAwesomeIcon icon="check-circle" color="#85cd1a"/>}
                                    {this.state.researched && !this.state.cnpjFounded && <FontAwesomeIcon icon="times-circle" color="red"/>}
                                </div>
                                <div className="error-message-container">
                                    {this.state.cnpjErrorMessage && <small>{this.state.cnpjErrorMessage}</small>}
                                </div>
                            </div>
                            <div className="submit-cnpj">
                                <Button type="submit" className="btn-search" label="OK" color="#FFF" backgroundColor="#32cccc" icon="arrow-right" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}