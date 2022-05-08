export default function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.curtidas} />
            <div class="texto">
                {props.curtidastext}
            </div>
        </div>
    );
}