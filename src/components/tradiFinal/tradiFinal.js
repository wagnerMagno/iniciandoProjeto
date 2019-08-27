import React from "react";

import TradiFinalComponentStyled from "./tradiFinalStyled";

import { Row } from 'react-bootstrap'


import imgGestorCondominio from '../../images/gestor_condominio.png'
import imgGestao from '../../images/gestao_financeira.png'
import imgMalote from '../../images/malote.png'
import imgCompras from '../../images/compras.png'

export default class TradiFinalComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {


        }

    }


    render() {
        return (
            <TradiFinalComponentStyled className={this.props.className}>
                <div className="title">
                    <div class="info">
                        <div className="header">
                            <div className="div-descricao">
                                <p className="p-title">
                                    ADMINISTRAÇÃO DE CONDOMÍNIO
                                </p>
                                <p className="font-orange p-title">
                                    TRADICIONAL
                                </p>

                                <p className="descricao">
                                    Ideal para Condomínos maiores. O Já tradicional serviço da F&F que engloba todos os serviços essencialista ADMINISTRAÇÃO DIGITAL, mais serviços úteis como:
                                </p>
                            </div>

                            <div className="img">
                                <img src={imgGestorCondominio}></img>
                            </div>


                        </div>



                        <br />

                        <div className="container">
                            {/* <Row> */}
                                <div className="card">
                                    <div className="img">
                                        <img src={imgGestao}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            GESTÃO FINANCERIA E RH
                                        </p>
                                        <p className="descricao">
                                            Geração e impressão de Holerites, encargos, benefícios, contas a pagar, boletos e prestação de contas pessoais.
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="img">
                                        <img src={imgGestorCondominio}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            GESTOR DE CONDOMÍNIO
                                        </p>
                                        <p className="descricao">
                                            Geração e impressão de Holerites, encargos, benefícios, contas a pagar, boletos e prestação de contas pessoais.
                                        </p>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>

                            {/* </Row> */}
                            {/* <Row> */}
                                <div className="card">
                                    <div className="img">
                                        <img src={imgMalote}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            MALOTE E REPRESENTAÇÃO
                                        </p>
                                        <p className="descricao">
                                            Geração e impressão de Holerites, encargos, benefícios, contas a pagar, boletos e prestação de contas pessoais.
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="img">
                                        <img src={imgCompras}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            COMPRAS E ORÇAMENTO
                                        </p>
                                        <p className="descricao">
                                            Geração e impressão de Holerites, encargos, benefícios, contas a pagar, boletos e prestação de contas pessoais.
                                        </p>
                                    </div>
                                </div>
                            {/* </Row> */}


                        </div>

                    </div>

                </div>
                <br></br>
                <br />
                <br />


            </TradiFinalComponentStyled>
        )
    }

}