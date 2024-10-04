import { Button } from "@nextui-org/react";
import { cv, githubIcon, linkedinIcon, Mail01Icon } from "../icons/icons";

export default function RedesSociales() {

    const handleClickMail = () => {
    window.open("mailto:enzoalarcon01@gmail.com?subject=Contacto desde tu portafolio&body=Hola Enzo, te contacto porque...");
}
const handleClickCV = () => {
    window.open("/archives/ENZO ALARCON.pdf", "_blank");
}

const handleClickLinkedIn = () => {
    window.open("https://linkedin.com/in/enzo-alarcon", "_blank");
}

const handleClickGitHub = () => {
    window.open("https://github.com/EnzoAlarcon", "_blank");
}


    return (
        <section className="flex justify-center my-10 gap-2">
        <Button color="primary" variant="solid" radius="full" onClick={handleClickMail}>
          {Mail01Icon}
        </Button>
        <Button color="primary" variant="ghost" radius="full" onClick={handleClickCV}>
          {cv}
        </Button>
        <Button color="primary" variant="ghost" radius="full" onClick={handleClickLinkedIn}
        >
          {linkedinIcon}
        </Button>
        <Button color="primary" variant="ghost" radius="full" onClick={handleClickGitHub}>
          {githubIcon}
        </Button>
      </section>
    );
}