"use client";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Page() {

    const [isMobile, setIsMobile] = useState<boolean | null>(
        null
      );
      
      useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
    
        setIsMobile(mediaQuery.matches);
    
        const handleResize = () => {
          setIsMobile(mediaQuery.matches);
        };
    
        mediaQuery.addEventListener('change', handleResize);
    
        return () => {
          mediaQuery.removeEventListener('change', handleResize);
        };
      }, []);

  return (
    <main>
      <header className="flex justify-center mt-10 text-5xl font-bold">
        <h1 className={`flex justify-center ${isMobile ? "text-3xl" : ""}`}>Sistema De Cartelera</h1>
      </header>
      <section className={`flex ${isMobile ? "flex-col" : ''}`}>
        <div className="flex-1 justify-center">
          <h3 className="flex justify-center my-10 text-xl font-sans">Objetivo del proyecto</h3>
          <div className="flex-col mx-[3%]">
            <p className="font-mono text-sm">
            Este sistema fue diseñado para mejorar la comunicación entre el área de comunicaciones y los estudiantes de la universidad. 
            Utiliza los televisores instalados en la universidad para mostrar información importante como horarios de clases, aulas, 
            y anuncios relevantes del equipo de comunicaciones, con el objetivo de difundir de manera ágil y eficiente contenido visual y mensajes.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="flex justify-center my-10 font-sans text-xl">Mi participación</h3>
          <ul className="list-disc pl-5 font-mono text-sm mx-[3%]">
            <li>Colaboré con el equipo de comunicaciones para definir los requisitos del sistema.</li>
            <li>Diseñé de la interfaz de avisos, comisiones, usuarios utilizando React y Tailwind CSS.</li>
            <li>Realicé la integración con la API del backend y utilicé Keycloak para la autenticación y gestión de permisos de usuarios.</li>
            <li>Participé en la documentación del proyecto, contribuyendo en la captura de requerimientos funcionales y la creación de diagramas
                 de casos de uso para visualizar la interacción entre actores y componentes del sistema.</li>
            </ul>
        </div>
      </section>
      <section className="my-20 text-3xl">
        <h2 className="flex justify-center">Imagenes</h2>
        <div className={`my-10 flex gap-4 justify-center ${isMobile ? "flex-col" : ""}`}>
            <Image src="../images/cartelera.png" alt="cartelera" width={600} height={300}/>
            <Image src="../images/carteleraavisos.png" alt="cartelera" width={600} height={300}/>
            <Image src="../images/admin.png" alt="cartelera" width={600} height={300}/>
        </div>
      </section>
    </main>
  );
}
