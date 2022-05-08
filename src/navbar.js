import Logo from "./navbarrep/Logo";
import Logomobile from "./navbarrep/Logomobile";
import Instagrammobile from "./navbarrep/Instagrammobile";
import Pesquisa from "./navbarrep/Pesquisa";
import Icones from "./navbarrep/Icones";
import Iconesmobile from "./navbarrep/Iconesmobile";

export default function Navbar (){
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <Logomobile />
                <Instagrammobile />
                <Pesquisa />
                <Icones />
                <Iconesmobile />
            </div>
        </div>
    );
}