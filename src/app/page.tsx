"use client";

import { Button, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { cv, githubIcon, linkedinIcon, Mail01Icon } from "./icons/icons";

export default function Home() {

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
    <main className="mt-[10%]">
      <section className="mx-20 flex items-center justify-center ">
        <div className="w-[50%] max-md:w-[100%]">
          <h2 className="text-4xl text-gray-200 max-md:text-2xl">Hola, soy</h2>
          <h1 className="text-6xl font-bold text-gray-50 mt-1 max-md:text-5xl">Enzo Alarcon</h1>
          <h3 className="text-2xl text-gray-300 font-sans mt-4 max-md:text-xl">Desarrollador</h3>
          <p className=" text-small text-gray-400 font-mono mt-4 max-md:text-sm">Estudiante de Licenciatura en informatica.
          Estoy buscando mi primera oportunidad profesional en el sector IT, con el objetivo de seguir aprendiendo y creciendo como desarrollador. 
          Me interesa un entorno donde pueda recibir capacitación y enfrentar nuevos desafíos. Confío en que mi experiencia previa 
          y mi disposición para aprender me permitirán adaptarme rápidamente a cualquier equipo o rol, y continuar desarrollándome en el mundo de la programación.
          </p>
        </div>
        {!isMobile ? <Image
        alt="Enzo Alarcon"
        src="/images/enzofoto.jpg"
        className="rounded-full ml-10 shadow-xl shadow-black"
        width={300}
        height={300}
        /> : null}
      </section>
      <section className="flex justify-center my-5 gap-2">
        <Button color="primary" variant="solid" startContent={Mail01Icon} radius="full">
          {!isMobile ? "enzoalarcon01@gmail.com" : ""}
        </Button>
        <Button color="primary" variant="ghost" radius="full">
          {cv}
        </Button>
        <Button color="primary" variant="ghost" radius="full"
        >
          {linkedinIcon}
        </Button>
        <Button color="primary" variant="ghost" radius="full" >
          {githubIcon}
        </Button>
      </section>
    </main>
  );
}
