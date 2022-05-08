import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post (props){
    return (
        <div class="post">
            <Topo topoimg={props.topoimg} topotext={props.topotext} />
            <Conteudo conteudo={props.conteudo} />
            <Fundo curtidas={props.curtidas} curtidastext={props.curtidastext}/>
        </div>
    );
}