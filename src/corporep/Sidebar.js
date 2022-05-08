export default function Sidebar (props){
    return (
        <div class="sidebar">
          <div class="usuario">
            <img src={props.sideimg} />
                <div class="texto">
                    <strong>{props.sidetext}</strong>
                    {props.sidename}
                </div>
            </div>
        </div>
    );
}