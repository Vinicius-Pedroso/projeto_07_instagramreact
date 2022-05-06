import Logo from "./Logo";
import Logomobile from "./Logomobile";
import Instagrammobile from "./Instagrammobile";
import Pesquisa from "./Pesquisa";
import Icones from "./Icones";
import Iconesmobile from "./Iconesmobile";

export default function Navbar (){
    return (
        <div class="container">
            <Logo />
            <Logomobile />
            <Instagrammobile />
            <Pesquisa />
            <Icones />
            <Iconesmobile />
        </div>
    );
}