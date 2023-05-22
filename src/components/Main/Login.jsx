import { LoginStyle } from "../Styles";

export default function Login() {
    return (
        <LoginStyle url={"https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg"}>
            <h1>Bem-vindo de volta</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="nome">
                    Nome:
                    <input name="nome" id="nome" type="text" />
                </label>
                <label htmlFor="senha">
                    Senha:
                    <input name="senha" id="senha " type="password" />
                </label>
                <input type="submit" value="Login" />
            </form>
        </LoginStyle>
    );
}
