import React from "react";
import SobreNosComponentStyled from "./sobreNosStyled.js";

import CarroselComponent from "../CarrosselComponent/carroselComponent.jsx";

import imageExemplo from "../../images/exemplo1.png";
import predioImg from "../../images/predio.png";


export default class SobreNosComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            listImg: [
                {
                    img : imageExemplo,
                    title : 'title imagem'
                },
                {
                    img : imageExemplo,
                    title : 'title imagem'
                },
                {
                    img : imageExemplo,
                    title : 'title imagem'
                },
                {
                    img : imageExemplo,
                    title : 'title imagem'
                },
                {
                    img : imageExemplo,
                    title : 'title imagem'
                },
            ],
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
            <SobreNosComponentStyled className={this.props.className}>
                <div className="title">
                    <div class="info">

                        <p className="p-title">
                            INOVAÇÃO EM
                        </p>
                        <p className="font-orange p-title">
                            ADMINISTRAÇÃO DE CONDOMÍNIOS
                        </p>

                        <p className="descricao">
                            Desde de 2010 a F&F Administradora sempre apresenta soluções inovaodras sempre trazendo redução de custos e mais transparência para gestão do seu condomínio.
                        </p>

                        <br />

                        <p className="label">
                            POR QUE NÓS?
                        </p>
                        <p className="descricao">
                            Somos uma equipe de especialista, miltitarefa focada em trazer a melhor experiência na gestão de condomínios.
                        </p>
                        <p className="descricao font-orange">
                            Conheça mais sobre a gente.
                        </p>

                    </div>

                </div>
                <br></br>
                <CarroselComponent isImg={true} listImg={this.state.listImg} />
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

            </SobreNosComponentStyled>
        )
    }

}