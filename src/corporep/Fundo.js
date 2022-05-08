import Acoes from "./Acoes";
import Curtidas from "./Curtidas";

export default function Fundo (props){
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas curtidas={props.curtidas} curtidastext={props.curtidastext}/>
        </div>
    );
}