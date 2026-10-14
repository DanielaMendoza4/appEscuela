// src/components/AlumnoCard/AlumnoCard.jsx
import { useState } from 'react';

// 1. Usamos 'estadoInicial' como Prop para setear el estado de React
const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {
    
    // 2. Creamos el estado dinámico
    const [estado, setEstado] = useState(estadoInicial);

    // 3. Lógica dinámica para el color del badge (depende de la variable local 'estado')
    const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';

    // 4. Función para alternar el estado
    const cambiarEstado = () => {
        if (estado === 'Matriculado') {
            setEstado('Inactivo');
        } else {
            setEstado('Matriculado');
        }
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
                <div className="card-body">
                    <h5 className="card-title text-primary">{nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{carrera}</h6>
                    <hr />
                    
                    <div className="d-flex justify-content-between align-items-center">
                        {/* El badge ahora lee el 'estado' dinámico y el color correcto */}
                        <span className={`badge ${badgeColor}`}>{estado}</span>
                        
                        <div>
                            {/* Le agregamos el evento onClick a este botón para que cambie el estado al hacer clic */}
                            <button 
                                className="btn btn-sm btn-outline-warning me-2"
                                onClick={cambiarEstado}
                            >
                                Cambiar Estado
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumnoCard;