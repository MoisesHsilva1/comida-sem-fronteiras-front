import { Controller } from "react-hook-form";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface CardRegisterOngProps {
  control: any;
  isLoading?: boolean;
  onClickBack?: () => void;
}

const CardRegisterDonor = ({
  control,
  isLoading,
  onClickBack,
}: CardRegisterOngProps) => (
  <Card className="bg-transparent rounded-sm p-6 max-w-xl mx-auto shadow-lg">
    <form
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="name" className="text-white font-medium">
          Nome
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Digite o nome da instituição" />
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white font-medium">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Digite o email para contato"
              type="email"
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-white font-medium">
          Telefone
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Digite o telefone para contato"
              type="tel"
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="text-white font-medium">
          Mensagem
        </label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Digite o motivo de seu desejo de voluntariar"
              rows={4}
            />
          )}
        />
      </div>
      <div className="md:col-span-2 flex flex-col md:flex-row justify-end items-center gap-3 mt-4">
        <Button
          variant="outline"
          type="button"
          onClick={onClickBack}
          className="w-full md:w-auto"
        >
          Voltar
        </Button>
        <Button
          className="bg-[#FF9F0D] hover:bg-[#e68a00] px-6 py-2 font-semibold w-full md:w-auto"
          type="submit"
          disabled={isLoading}
        >
          Enviar Solicitação
        </Button>
      </div>
    </form>
  </Card>
);

export default CardRegisterDonor;
