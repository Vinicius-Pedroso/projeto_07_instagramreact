import Sugestao from "./Sugestao";

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao sugestaoimg="assets/img/bad.vibes.memes.svg" sugestaoname="bad.vibes.memes" razao="Segue você"/>
            <Sugestao sugestaoimg="assets/img/chibirdart.svg" sugestaoname="chibirdart" razao="Segue você"/>
            <Sugestao sugestaoimg="razoesparaacreditar.svg" sugestaoname="razoesparaacreditar" razao="Novo no Instagram"/>
            <Sugestao sugestaoimg="assets/img/adorable_animals.svg" sugestaoname="adorable_animals" razao="Segue você"/>
            <Sugestao sugestaoimg="assets/img/smallcutecats.svg" sugestaoname="smallcutecats" razao="Segue você"/>
        </div>
    );
}