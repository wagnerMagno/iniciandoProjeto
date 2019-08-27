import React from "react";

import DigiFinalComponentStyled from "./digiFinalStyled";

import { Row } from 'react-bootstrap'


import imgAgilidade from '../../images/agilidade.png'
import imgTransparencia from '../../images/transparencia.png'
import imgEconomia from '../../images/economia.png'
import imgCompleto from '../../images/completo.png'
import imgDigital from '../../images/digital.png'
import CarroselComponent from "../CarrosselComponent/carroselComponent";

export default class DigiFinalComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            coment : [
                {
                    comentario : " Venho agradecer pelo profissionalismo e a qualidade dos serviços prestados, no qual a Administradora F&F sempre conseguiu proporcionar ao nosso condominio.Acreduti estar sendo uma ótima parceria, desde Outubro de 2015.Tanto os gestores como a equipe, sempre estão disponpiveis para atender as nossas demandas, com muita educação e responsabilidade.",
                    agradecimento: "Nosso muito obrigado!",
                    ass: "Ana Garcia | Spazio Cadoro"
                },
                {
                    comentario : " Venho agradecer pelo profissionalismo e a qualidade dos serviços prestados, no qual a Administradora F&F sempre conseguiu proporcionar ao nosso condominio.Acreduti estar sendo uma ótima parceria, desde Outubro de 2015.Tanto os gestores como a equipe, sempre estão disponpiveis para atender as nossas demandas, com muita educação e responsabilidade.",
                    agradecimento: "Nosso muito obrigado!",
                    ass: "Ana Garcia | Spazio Cadoro"
                },
                {
                    comentario : " Venho agradecer pelo profissionalismo e a qualidade dos serviços prestados, no qual a Administradora F&F sempre conseguiu proporcionar ao nosso condominio.Acreduti estar sendo uma ótima parceria, desde Outubro de 2015.Tanto os gestores como a equipe, sempre estão disponpiveis para atender as nossas demandas, com muita educação e responsabilidade.",
                    agradecimento: "Nosso muito obrigado!",
                    ass: "Ana Garcia | Spazio Cadoro"
                },
            ]
        }

    }


    render() {
        return (
            <DigiFinalComponentStyled className={this.props.className}>
                <div className="title">
                    <div class="info">
                        <div className="header">
                            <div className="div-descricao">
                                <p className="p-title">
                                    ADMINISTRAÇÃO DE CONDOMÍNIO
                                </p>
                                <p className="font-green p-title">
                                    100% DIGITAL
                                </p>

                                <p className="descricao">
                                    Ideal para Condomínos maiores. O Já tradicional serviço da F&F que engloba todos os serviços essenciais ADMINISTRAÇÃO DIGITAL, mais serviços úteis como:
                                </p>
                            </div>

                            <div className="img">
                                <img src={imgDigital}></img>
                            </div>


                        </div>



                        <br />

                        <div className="container">
                            {/* <Row> */}
                                <div className="card">
                                    <div className="img">
                                        <img src={imgTransparencia}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            TRANSPARÊNCIA
                                        </p>
                                        <p className="descricao">
                                            Toda a movimentação é disponibilizada para Síndico, Conselheiros e condôminos acompanharem em tempo real as finanças do condomínio, pelo site ou aplicativo.
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="img">
                                        <img src={imgAgilidade}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            AGILIDADE
                                        </p>
                                        <p className="descricao">
                                            Boleto disponibilizado com antecedência sempre e a entrega da prestação de contas mais rápidas do mercado.
                                        </p>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>

                            {/* </Row> */}
                            {/* <Row> */}
                                <div className="card">
                                    <div className="img">
                                        <img src={imgEconomia}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            ECONOMIA
                                        </p>
                                        <p className="descricao">
                                            Pacote de serviços incrivelmente econômico, com solução que reduzem a taxa de condomínio.
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="img">
                                        <img src={imgCompleto}></img>
                                    </div>
                                    <div className="conteudo">
                                        <p className="label">
                                            COMPLETO
                                        </p>
                                        <p className="descricao">
                                            Seu condomínio terá os 15 serviços essenciais indispensáveis para o seu perfeito funcionamento.
                                        </p>
                                    </div>
                                </div>
                            {/* </Row> */}


                        </div>

                    </div>

                </div>
                <br></br>

                <div>
                    <div class="info">

                        <p className="font-orange label center">
                            Depoimentos
                        </p>
                        <CarroselComponent isImg={false} listComentario={this.state.coment} />
                        
                       

                        <br />
                        <br />



                    </div>
                </div>
                <br />



            </DigiFinalComponentStyled>
        )
    }

}