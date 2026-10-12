import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AlumnoCard from './components/AlumnoCard/AlumnoCard';

function App() {
    return (
        <>
            <Navbar />
            
            <div className="container mt-4">
                <h2 className="mb-4">Directorio de Alumnos</h2>
                
                <p className="fw-bold mb-1">
                    INSTRUCTOR: GIANCARLOS BARBOZA N. ESCUELA DE TECNOLOGÍAS DE LA INFORMACIÓN
                </p>
                <p className="text-muted mb-4">
                    DISEÑO Y DESARROLLO DE SOLUCIONES IOT - SEMINARIO
                </p>

                {/* Contenedor de la cuadrícula */}
                <div className="row">
                    {/* Fila 1 */}
                    <AlumnoCard
                        nombre="Daniel Puccio"
                        carrera="Desarrollo de Software"
                        estado="Matriculado"
                    />
                    <AlumnoCard
                        nombre="Maria Perez"
                        carrera="Diseño Gráfico"
                        estado="Inactivo"
                    />
                    <AlumnoCard
                        nombre="Carlos Mendoza"
                        carrera="Administración Industrial"
                        estado="Matriculado"
                    />

                    {/* Fila 2 */}
                    <AlumnoCard
                        nombre="Ana Gómez"
                        carrera="Redes y Seguridad"
                        estado="Matriculado"
                    />
                    <AlumnoCard
                        nombre="Luis Flores"
                        carrera="Desarrollo de Software"
                        estado="Inactivo"
                    />
                    <AlumnoCard
                        nombre="Elena Torres"
                        carrera="Diseño Gráfico"
                        estado="Matriculado"
                    />

                    {/* Fila 3 */}
                    <AlumnoCard
                        nombre="Jorge Ramirez"
                        carrera="Mantenimiento de Sistemas"
                        estado="Matriculado"
                    />
                    <AlumnoCard
                        nombre="Sofía Castro"
                        carrera="Administración Industrial"
                        estado="Inactivo"
                    />
                    <AlumnoCard
                        nombre="Pedro Ortiz"
                        carrera="Redes y Seguridad"
                        estado="Matriculado"
                    />
                </div>
            </div>
        </>
    );
}

export default App;