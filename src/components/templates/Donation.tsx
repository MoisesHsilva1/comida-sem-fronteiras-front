import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

import { type OngFormValues, ongSchema } from "@/schemas/ongFormSchema";
import { type DonorFormValues, donorSchema } from "@/schemas/donorFormSchema";

import CardRegisterDonor from "../molecules/CardRegisterDonor";
import CardRegisterOng from "../molecules/CardRegisterOng";

function Donation() {
  const [activeTab, setActiveTab] = useState<"donor" | "ong" | "home">("home");

  const { control: ongControl } = useForm<OngFormValues>({
    resolver: zodResolver(ongSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cnpj: "",
      description: "",
      address: "",
    },
  });

  const { control: donorControl } = useForm<DonorFormValues>({
    resolver: zodResolver(donorSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <>
      <main>
        {activeTab === "donor" && (
          <CardRegisterDonor
            control={donorControl}
            isLoading={false}
            onClickBack={() => setActiveTab("home")}
          />
        )}
        {activeTab === "ong" && (
          <CardRegisterOng
            control={ongControl}
            isLoading={false}
            onClickBack={() => setActiveTab("home")}
          />
        )}
        {activeTab === "home" && (
          <Card className="bg-transparent rounded-sm">
            <CardContent className="flex flex-col gap-2 items-center justify-center w-100">
              <img
                src="https://ultimate-apricot-1s6dwt9n09.edgeone.app/bro.png"
                className="max-w-sm  h-auto rounded-lg object-cover"
                alt=""
              />
              <CardTitle className="flex justify-center text-center text-[#FF9F0D] font-bold text-2xl">
                Faça parte da rede que combate a fome no Brasil.
              </CardTitle>
              <CardDescription className="text-white text-sm text-center">
                Conecte-se a ONGs reais que mudam vidas todos os dias. Cadastre
                sua organização ou contribua como doador.
              </CardDescription>
            </CardContent>
            <CardContent className="flex justify-center gap-4">
              <Button
                onClick={() => setActiveTab("donor")}
                className="bg-[#FF9F0D] font-bold  rounded-sm w-full md:w-fit px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              >
                Sou doador
              </Button>
              <Button
                onClick={() => setActiveTab("ong")}
                className="bg-[#FF9F0D] font-bold  rounded-sm w-full md:w-fit px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              >
                Sou uma ONG
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </>
  );
}
export default Donation;
