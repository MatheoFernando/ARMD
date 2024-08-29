import { itemsServicos } from "@/constants";

export function Servicos() {
  return (
    <div className="relative bg-fixed bg-parallex bg-cover">
      <div className="absolute inset-0 backdrop-blur-sm"></div> {/* Fundo com blur e sobreposição */}
      <div className="relative container flex flex-col pt-8 shadow-[rgba(0, 0, 0, 0.45) 0px 25px 20px -20px] items-center justify-center">
        <h1 className="font-bold text-2xl z-30 relative my-4">SERVIÇOS</h1>
        <div className="grid gap-4 md:gap-6 container lg:gap-8 lg:grid-cols-4 grid-cols-2 w-full">
          {itemsServicos.map((item) => (
            <a
              href="#"
              key={item.title}
              className="border border-primary p-4  ease-in duration-300 w-full flex flex-col items-center justify-center rounded-lg hover:bg-fuchsia-900/50 hover:border-primary transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon} {/* Renderizando o ícone */}
              </div>
              <h3 className="text-base text-center">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
