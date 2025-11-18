import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { useOngCreate } from "@/hooks/useOng";

import { type OngFormValues, ongSchema } from "@/schemas/ongFormSchema";
import { type DonorFormValues, donorSchema } from "@/schemas/donorFormSchema";

import CardRegisterDonor from "../molecules/CardRegisterDonor";
import CardRegisterOng from "../molecules/CardRegisterOng";
import CardSuccess from "../molecules/CardSuccess";

function Donation() {
  const [activeTab, setActiveTab] = useState<"donor" | "ong" | "home">("home");
  const [showSuccessOng, setShowSuccessOng] = useState(false);
  const [showSuccessDonor, setShowSuccessDonor] = useState(false);

  const { mutateAsync: createOng, isPending, isError } = useOngCreate();

  useEffect(() => {
    if (isError) {
      toast.error("Ong já cadastrada!", {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isError]);

  useEffect(() => {
    if (activeTab !== "ong") {
      setShowSuccessOng(false);
    }
    if (activeTab !== "donor") {
      setShowSuccessDonor(false);
    }
  }, [activeTab]);

  const fieldsOng = useForm<OngFormValues>({
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

  const fieldsDonor = useForm<DonorFormValues>({
    resolver: zodResolver(donorSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleOngSubmit = async (data: OngFormValues) => {
    if (!data) return;
    try {
      await createOng(data);
      fieldsOng.reset();
      setShowSuccessOng(true);
    } catch {
      setShowSuccessOng(false);
    }
  };

  const handleDonorSubmit = async (data: DonorFormValues) => {
    if (!data) return;
    try {
      fieldsDonor.reset();
      setShowSuccessDonor(true);
    } catch {
      setShowSuccessDonor(false);
    }
  };

  const handleSuccessBackOng = () => {
    setShowSuccessOng(false);
    setActiveTab("home");
  };

  const handleSuccessBackDonor = () => {
    setShowSuccessDonor(false);
    setActiveTab("home");
  };

  return (
    <>
      <main
        className="min-h-screen flex items-center justify-center bg-transparent px-2 sm:px-0"
        style={{ width: "100%" }}
      >
        <ToastContainer />
        {activeTab === "donor" && (
          <FormProvider {...fieldsDonor}>
            {!showSuccessDonor && (
              <div className="w-full max-w-md mx-auto">
                <CardRegisterDonor
                  isLoading={false}
                  onClickBack={() => setActiveTab("home")}
                  onSubmit={() => handleDonorSubmit(fieldsDonor.getValues())}
                />
              </div>
            )}
            {showSuccessDonor && (
              <div className="w-full max-w-md mx-auto">
                <CardSuccess
                  textMode="donor"
                  onClickBack={handleSuccessBackDonor}
                />
              </div>
            )}
          </FormProvider>
        )}
        {activeTab === "ong" && (
          <FormProvider {...fieldsOng}>
            {!showSuccessOng && (
              <div className="w-full max-w-md mx-auto">
                <CardRegisterOng
                  isLoading={isPending}
                  onClickBack={() => setActiveTab("home")}
                  onSubmit={() => handleOngSubmit(fieldsOng.getValues())}
                />
              </div>
            )}
            {showSuccessOng && (
              <div className="w-full max-w-md mx-auto">
                <CardSuccess
                  textMode="ong"
                  onClickBack={handleSuccessBackOng}
                />
              </div>
            )}
          </FormProvider>
        )}
        {activeTab === "home" && (
          <Card className="bg-transparent rounded-sm w-full max-w-md mx-auto">
            <CardContent className="flex flex-col gap-2 items-center justify-center w-full">
              <img
                src="https://res.cloudinary.com/dtglxnl4z/image/upload/v1763076077/bro_zo85fp.png"
                className="max-w-sm sm:max-w-sm h-auto rounded-lg object-cover"
                alt=""
                style={{ aspectRatio: "1.5/1" }}
              />
              <CardTitle className="flex justify-center text-center text-[#FF9F0D] font-bold text-xl sm:text-2xl">
                Faça parte da rede que combate a fome no Brasil.
              </CardTitle>
              <CardDescription className="text-white text-sm text-center px-2">
                Conecte-se a ONGs reais que mudam vidas todos os dias. Cadastre
                sua organização ou contribua como doador.
              </CardDescription>
            </CardContent>
            <CardContent className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full px-2">
              <Button
                onClick={() => setActiveTab("donor")}
                className="bg-[#FF9F0D] font-bold rounded-sm w-full sm:w-fit px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              >
                Sou doador
              </Button>
              <Button
                onClick={() => setActiveTab("ong")}
                className="bg-[#FF9F0D] font-bold rounded-sm w-full sm:w-fit px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
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
