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

  const { control: ongControl, handleSubmit: ongHandleSubmit } =
    useForm<OngFormValues>({
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
    <main className="container mx-auto min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8">
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
          onSubmit={() =>
            ongHandleSubmit((data) => {
              console.log(data);
            })
          }
          onClickBack={() => setActiveTab("home")}
        />
      )}
      {activeTab === "home" && (
        <Card className="bg-transparent rounded-sm w-full max-w-lg mx-auto">
          <CardContent className="flex flex-col gap-4 items-center justify-center w-full px-2 sm:px-4 md:px-8">
            <img
              src="https://res.cloudinary.com/dtglxnl4z/image/upload/v1763076077/bro_zo85fp.png"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg object-cover"
              alt="Ilustração combate à fome"
            />
            <CardTitle className="flex justify-center text-center text-[#FF9F0D] font-bold text-2xl md:text-3xl">
              Faça parte da rede que combate a fome no Brasil.
            </CardTitle>
            <CardDescription className="text-white text-sm md:text-base text-center">
              Conecte-se a ONGs reais que mudam vidas todos os dias. Cadastre
              sua organização ou contribua como doador.
            </CardDescription>
          </CardContent>
          <CardContent className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full px-2 sm:px-4 md:px-8">
            <Button
              onClick={() => setActiveTab("donor")}
              className="bg-[#FF9F0D] font-bold rounded-sm w-full sm:w-auto px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              Sou doador
            </Button>
            <Button
              onClick={() => setActiveTab("ong")}
              className="bg-[#FF9F0D] font-bold rounded-sm w-full sm:w-auto px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              Sou uma ONG
            </Button>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
export default Donation;
