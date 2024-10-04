"use client";

import { Button, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Home() {

  const [isMobile, setIsMobile] = useState(
    false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

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

export const cv = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text css-svt5ra"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>file-text</svg>
)


export const Mail01Icon = (
  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
    </svg>
);

export const linkedinIcon = (
  <svg
  viewBox="0 0 900 1000"
  fill="currentColor"
  height="1.8em"
  width="1.8em"
>
  <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
</svg>
)

export const githubIcon = (
  <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1.8em"
      width="1.8em"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
)