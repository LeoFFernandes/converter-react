import React from 'react';
import App from '../Views/App';

import './Styles/Conversor.css'

export default class Converter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_value: "",
            moedaB_value: 0,
        }
        this.convert = this.convert.bind(this);
    };

    convert(){
        let brl = this.state.moedaA_value;
        let donate = this.state.moedaB;

        if(brl <= 0) return null;
        
        donate = Math.floor(brl/2);
        this.setState({moedaB_value: donate});
    };

    render(){
        return(
            <div className="converter">
                <h1>Qual será minha bonificação?</h1>
                <h2>Valor em {this.props.moedaA}</h2>
                <input className="form-text" type="text" onChange={(e) => { this.setState({moedaA_value: e.target.value})}}></input>
                <input className="form-button" type="button" value="Gerar pedido" onClick={this.convert}></input>
                <h2>Quantidade de {this.props.moedaB}: {this.state.moedaB_value}</h2>
            </div>
            
        )
    }
}