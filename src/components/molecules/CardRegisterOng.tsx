import { Controller } from "react-hook-form";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface CardRegisterOngProps {
  control: any;
  isLoading?: boolean;
  onClickBack?: () => void;
  onSubmit?: (formData: any) => void;
}

const CardRegisterOng = ({
  control,
  isLoading,
  onClickBack,
  onSubmit,
}: CardRegisterOngProps) => (
  <Card className="bg-transparent rounded-sm p-6 max-w-xl mx-auto shadow-lg">
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white mb-1 font-medium">
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
      <div className="flex flex-col">
        <label htmlFor="email" className="text-white mb-1 font-medium">
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
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-white mb-1 font-medium">
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
      <div className="flex flex-col">
        <label htmlFor="cnpj" className="text-white mb-1 font-medium">
          CNPJ
        </label>
        <Controller
          name="cnpj"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Digite o CNPJ da instituição" />
          )}
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <label htmlFor="address" className="text-white mb-1 font-medium">
          Endereço
        </label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Digite o endereço da instituição" />
          )}
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <label htmlFor="description" className="text-white mb-1 font-medium">
          Descrição
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Descreva a missão e atividades da instituição"
              rows={4}
            />
          )}
        />
      </div>

      <div className="md:col-span-2 flex justify-end mt-2 gap-2">
        <Button onClick={onClickBack}>Voltar</Button>
        <Button
          className="bg-[#FF9F0D] hover:bg-[#e68a00] px-6 py-2 font-semibold"
          type="submit"
          disabled={isLoading}
        >
          Registrar Instituição
        </Button>
      </div>
    </form>
  </Card>
);

export default CardRegisterOng;
