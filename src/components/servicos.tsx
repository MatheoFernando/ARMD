import { itemsServicos } from "@/constants";

export function Servicos() {
  return (
    <div className='container flex flex-col items-center justify-center my-8'>
      <h1 className='text-2xl font-semibold mb-8'>SERVIÇOS</h1>
      <div className="grid gap-4 md:gap-6 container lg:gap-8  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full">
        {itemsServicos.map((item) => (
          <div
            key={item.title}
            className="border border-primary p-4  w-full flex flex-col items-center justify-center  rounded-lg hover:bg-primary hover:border-gray-400 transition duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-4">
              {item.icon} {/* Renderizando o ícone */}
            </div>
            <h3 className="text-base   text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
