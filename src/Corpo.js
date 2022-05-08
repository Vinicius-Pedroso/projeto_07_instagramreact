import Esquerda from "./corporep/Esquerda";
import Sidebar from "./corporep/Sidebar";
import Sugestoes from "./corporep/Sugestoes";
import Links from "./corporep/Links";
import Copyrights from "./corporep/Copyrights";

export default function Corpo (){
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar sideimg="assets/img/catanacomics.svg" sidetext="catanacomics" sidename="Catana"/>
            <Sugestoes />
            <Links />
            <Copyrights />
        </div>
    );
}

