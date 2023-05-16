import { FooterStyle } from "../Styles";

export default function Footer() {
    return (
        <FooterStyle>
            <section className="container">
                <h3>TeteuFlix - todos os direitos reservados</h3>
                <section className="ul-container">
                    <ul>
                        <li>
                            <a href="https://matevangelista.github.io">
                                Acesse meu portfólio
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mateus-e-alcantara/">
                                <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/matevangelista">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/matevangelista/teteu-flix">
                                Contribua
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
        </FooterStyle>
    );
}
