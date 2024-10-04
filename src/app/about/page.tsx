"use client";
import { Avatar, Button, Chip } from "@nextui-org/react";
import { cv, githubIcon, linkedinIcon, Mail01Icon } from "../icons/icons";
import { useEffect, useState } from "react";

const About = () => {

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
    <div className="mt-[5%]">
    <main className="flex flex-row justify-center max-md:flex-col relative gap-4 w-[100%]">
      <section className="flex flex-col items-center justify-center p-6 w-[50%] max-md:w-[100%]">
          <h1 className="text-3xl font-bold mb-4 ">Sobre mí</h1>
          <p className="text-medium mb-4 font-sans text-gray-200">
              Me llamo Enzo Alarcón, tengo 23 años y soy desarrollador con experiencia en tecnologías como React, 
              Next.js, Tailwind, Java, Spring Boot, y bases de datos relacionales como PostgreSQL y MySQL. Me destaco
               por aprender rápidamente y adaptarme a nuevas circunstancias con facilidad. A lo largo de mi formación, 
               he sido capaz de integrar nuevas tecnologías y metodologías de trabajo de forma ágil, lo que me ha permitido 
               avanzar en proyectos complejos.
          </p>
          <p className="text-medium mb-4 font-sans text-gray-200">
              Actualmente, estoy trabajando en un proyecto relevante para mi universidad: el desarrollo de un sistema de cartelera 
              para los televisores ubicados en los pasillos, que permite a los estudiantes consultar horarios, materias y aulas, así 
              como recibir información del equipo de comunicaciones. Este proyecto ha sido una gran oportunidad para aplicar metodologías 
              ágiles como Scrum, colaborando en equipo y gestionando el proyecto de manera iterativa y organizada, y Kanban con 
              herramientas como Trello y Linear para organizar el flujo de trabajo, visualizando tareas, estableciendo prioridades y facilitando 
              la colaboración en equipo de manera eficiente.
          </p>
          <p className="text-medium mb-4 font-sans text-gray-200">
              Además de mis habilidades técnicas, tengo una sólida base en ingeniería de software. He participado en la documentación de requerimientos funcionales, lo que incluye la captura y análisis de las necesidades del cliente. También he documentado la creación de diagramas de casos de uso y diagramas de clases, que permiten visualizar las interacciones entre los actores del sistema y los componentes de software, asegurando un diseño orientado a objetos eficiente y escalable. Además, tengo experiencia trabajando con control de versiones usando Git y GitHub para el manejo de proyectos colaborativos.
          </p>
      </section>
      <section className="w-[50%] max-md:w-[100%]">
        <div className="border-b-1 pb-10 mx-[10%]">
          <h2 className="text-3xl font-bold mb-4 p-6 flex justify-center">Tecnologías</h2>
          <div className=" mx-[10%] flex-col justify-center max-md:flex-col">
            <div className="flex gap-2 justify-center mb-3">
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow" startContent={react}>React</Chip>
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow"startContent={typescript}> TypeScript</Chip>
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow"startContent={tailwind}> Tailwind</Chip>
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow" startContent={nextjs}>Next js</Chip>
            </div>
            <div className="flex gap-2 justify-center">
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow" startContent={java}>Java</Chip>
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow" startContent={springBoot}>Spring Boot</Chip>
              <Chip size={`${isMobile ? "sm" : "lg"}`} color="success" variant="shadow" startContent={bd}>Base De Datos</Chip>
            </div>
          </div>
        </div>
        <div className="mx-[10%] border-b-1 pb-10 flex-col justify-center max-md:flex-col">
          <h2 className="text-3xl font-bold mb-4 p-6 flex justify-center">Formacion</h2>
          <div className="flex-col ">
            <div className="flex mb-5 justify-between">
              <div className="flex gap-3">
                <Avatar
                icon={universidad}
                className=" w-[60px] h-[60px]"
                color="success"
                />
                <div>
                  <h3 className="text-large font-bold">{!isMobile ? "Universidad Nacional de Hurlingham" : "UNAHUR"}</h3>
                  <h4 className="text-medium">Lic. en Informática</h4>
                </div>
              </div>
              <Chip color="warning" variant="shadow">Cursando</Chip>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <Avatar
                icon={certificate}
                className=" w-[60px] h-[60px]"
                color="success"
                />
                <div>
                  <h3 className="text-large font-bold">CEIT</h3>
                  <h4 className="text-medium">Java Programming</h4>
                </div>
            </div>
              <Chip color="primary" variant="shadow">Terminado</Chip>
          </div>
          </div>
        </div>
      </section>
    </main>
      <section className="flex justify-center my-10 gap-2">
        <Button color="primary" variant="solid" startContent={Mail01Icon} radius="full">
          {isMobile ? "" :"enzoalarcon01@gmail.com"}
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
          </div>
  );
};

export default About;

const certificate = (
  <svg
  viewBox="0 0 1024 1024"
  fill="currentColor"
  height="3.5em"
  width="3.5em"
>
  <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 01-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z" />
</svg>
)

const universidad = (
  <svg
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3.5em"
      width="3.5em"
    >
      <path d="M21 10a1 1 0 001-1V6a.999.999 0 00-.684-.948l-9-3a1.002 1.002 0 00-.632 0l-9 3A.999.999 0 002 6v3a1 1 0 001 1h1v7.184A2.995 2.995 0 002 20v2a1 1 0 001 1h18a1 1 0 001-1v-2a2.995 2.995 0 00-2-2.816V10zm-1 11H4v-1a1.001 1.001 0 011-1h14a1.001 1.001 0 011 1zM6 17v-7h2v7zm4 0v-7h4v7zm6 0v-7h2v7zM4 8V6.72l8-2.666 8 2.667V8z" />
    </svg>
)

const bd = (
  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
    </svg>
)

const react = (
  <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>
)

const typescript = (
  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
)

const tailwind = (
  <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
  <path
    fill="currentColor"
    d="M7.5 2.5c-1.026 0-1.908.277-2.6.87-.688.59-1.137 1.447-1.387 2.516a.5.5 0 00.897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 00-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156-.582-.359-1.305-.6-2.264-.6zM4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 00.897.4c.316-.452.632-.723.936-.863.294-.135.611-.162.975-.065.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156.582.359 1.305.6 2.264.6 1.026 0 1.908-.277 2.6-.87.688-.59 1.138-1.447 1.387-2.516a.5.5 0 00-.897-.4c-.316.452-.632.723-.936.863-.294.135-.611.162-.975.065-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7z"
  />
</svg>
)

const java = (
<svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path
        fill="currentColor"
        d="M12.557 23.22s-.982.571.699.765c2.037.232 3.079.199 5.324-.226 0 0 .59.37 1.415.691-5.033 2.157-11.39-.125-7.437-1.23zm-.615-2.815s-1.102.816.581.99c2.176.224 3.895.243 6.869-.33 0 0 .411.417 1.058.645-6.085 1.779-12.863.14-8.508-1.305zm5.185-4.775c1.24 1.428-.326 2.713-.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zm6.656 9.672s.727.599-.801 1.062c-2.905.88-12.091 1.146-14.643.035-.917-.399.803-.953 1.344-1.069.564-.122.887-.1.887-.1-1.02-.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-.749 16.044-1.95zm-10.754-7.813s-4.673 1.11-1.655 1.513c1.274.171 3.814.132 6.181-.066 1.934-.163 3.876-.51 3.876-.51s-.682.292-1.175.629c-4.745 1.248-13.911.667-11.272-.609 2.232-1.079 4.046-.956 4.046-.956zm8.383 4.685c4.824-2.506 2.593-4.915 1.037-4.591-.382.079-.552.148-.552.148s.142-.222.412-.318c3.079-1.083 5.448 3.193-.994 4.887 0 0 .075-.067.097-.126zM18.503 3.337s2.671 2.672-2.534 6.781c-4.174 3.296-.952 5.176-.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zm-5 25.629c4.63.296 11.74-.164 11.908-2.355 0 0-.324.831-3.826 1.49-3.952.744-8.826.657-11.716.18 0 0 .592.49 3.635.685z"
      />
    </svg>
)

const springBoot = (
<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M23.693 10.706l-4.73-8.185c-.41-.71-1.417-1.294-2.24-1.294h-9.45c-.82 0-1.831.584-2.24 1.294L.306 10.706c-.41.71-.41 1.873 0 2.584l4.725 8.189c.41.71 1.417 1.294 2.24 1.294h9.455c.82 0 1.826-.584 2.24-1.294l4.726-8.19c.41-.71.41-1.873 0-2.583zM10.976 5.755c0-.537.438-.975.974-.975s.975.438.975.975v5.821a.976.976 0 01-1.948 0zm.974 12.43a6.616 6.616 0 01-6.607-6.609A6.638 6.638 0 018.01 6.272a.866.866 0 011.214.18.866.866 0 01-.178 1.213 4.876 4.876 0 005.812 7.827 4.875 4.875 0 001.967-3.916 4.897 4.897 0 00-1.986-3.925.87.87 0 01-.183-1.214.87.87 0 011.214-.183 6.631 6.631 0 012.687 5.322 6.613 6.613 0 01-6.608 6.608z" />
    </svg>
)

const nextjs = (
<svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em" >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
        clipRule="evenodd"
      />
    </svg>
)
