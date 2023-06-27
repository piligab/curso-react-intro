import './TodoCounter.css';

function TodoCounter({completed, total}){
    if (completed == total){
        return (         
            <h1 className="TodoCounter">
                <span>Felicitaciones!! has completado todos los TODOS</span>
            </h1>
        );
    }
    return (    
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
    );
}

export { TodoCounter };