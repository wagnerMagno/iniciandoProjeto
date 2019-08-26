import React from "react";
import HomeComponentStyled from "./homeStyled.js";


import imageExemplo from "../../images/exemplo1.png";
import predioImg from "../../images/predio.png";


export default class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            listImg: [imageExemplo, imageExemplo, imageExemplo, imageExemplo, imageExemplo, imageExemplo]
        }

    }


    render() {
        return (
            <HomeComponentStyled className={this.props.className}>
                <p className="label">
                    F&F Administradora.
                </p>
                <p className="descricao">
                    Desde de 2010 a F&F Administradora sempre apresenta soluções <br></br>
                    inovadoras sempre trazendo redução de custos e mais transparência <br></br>
                    para gestão do seu condomínio.
                </p>

                <div className="title">
                    <div class="info">

                        <p className="title">
                            TUDO QUE SEU CONDOMÍNIO PRECISA E AINDA PAGANDO MENOS
                        </p>

                        <br />

                       

                    </div>

                </div>


            </HomeComponentStyled>
        )
    }

}