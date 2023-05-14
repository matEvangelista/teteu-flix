import Main from "./Main/Main";
import HeaderComponent from "./NavHeader/HeaderComponent";

export default function Media({ type }) {
    return (
        <>
            <HeaderComponent type={type} />
            <Main type={type}/>
        </>
    );
}
