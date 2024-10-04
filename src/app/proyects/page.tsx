"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Proyectos() {

    const route = useRouter()

    const handlePress = () => {
        route.push('/proyects/cartelera')
    }

  return (
    <main className="flex justify-center">
      <section className="mt-10">
        <h1 className="flex justify-center text-5xl font-bold mb-10">
          Proyectos
        </h1>
        <Card className="py-4 bg-slate-100" isPressable isHoverable onPress={() => handlePress()}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h3 className="font-bold text-xl text-gray-950">Sistema De Cartelera</h3>
            <h4 className="font-bold text-large text-gray-700">Frontend</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="../images/cartelera.png"
              width={270}
            />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
