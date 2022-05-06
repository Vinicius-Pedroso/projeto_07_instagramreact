import ReactDOM from 'react-dom';
import Navbar from './navbar';

function Lista() {
    return (
        <div>
            <Navbar />
        </div>
    );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));
