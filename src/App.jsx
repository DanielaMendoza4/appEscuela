import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Contador from './components/Contador/Contador';

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
                        estadoInicial="Matriculado"
                    />
                    <AlumnoCard
                        nombre="Maria Perez"
                        carrera="Diseño Gráfico"
                        estadoInicial="Inactivo"
                    />
                    <AlumnoCard
                        nombre="Carlos Mendoza"
                        carrera="Administración Industrial"
                        estadoInicial="Matriculado"
                    />

                    {/* Fila 2 */}
                    <AlumnoCard
                        nombre="Ana Gómez"
                        carrera="Redes y Seguridad"
                        estadoInicial="Matriculado"
                    />
                    <AlumnoCard
                        nombre="Luis Flores"
                        carrera="Desarrollo de Software"
                        estadoInicial="Inactivo"
                    />
                    <AlumnoCard
                        nombre="Elena Torres"
                        carrera="Diseño Gráfico"
                        estadoInicial="Matriculado"
                    />

                    {/* Fila 3 */}
                    <AlumnoCard
                        nombre="Jorge Ramirez"
                        carrera="Mantenimiento de Sistemas"
                        estadoInicial="Matriculado"
                    />
                    <AlumnoCard
                        nombre="Sofía Castro"
                        carrera="Administración Industrial"
                        estadoInicial="Inactivo"
                    />
                    <AlumnoCard
                        nombre="Pedro Ortiz"
                        carrera="Redes y Seguridad"
                        estadoInicial="Matriculado"
                    />
                </div>

                <Contador
                
                />
            </div>
        </>
    );
}

export default App;