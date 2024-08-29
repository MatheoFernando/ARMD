import { Calendar } from "@/components/ui/calendar";
import React from "react";

export function Marcacao() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
                <div className="flex justify-center  items-center container mb-16 flex-col">
                                 <h1 className=" font-bold text-2xl z-30 relative my-4">
 MARCAÇÃO DE AGENDA
    </h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border-0 shadow-md p-0 overflow-hidden mx-3"
        classNames={{
          caption: "flex justify-center bg-primary p-4 relative items-center",
          caption_label: "text-lg md:text-xl font-bold text-white",
                      nav: "space-x-1 flex items-center",
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 ", // Padding adicionado para os meses
          day: "size-14  bg-zinc-100  text-center rounded-sm text-lg m-1", // Padding e margens adicionados para os dias
          day_today: "bg-slate-800 text-white",
          day_selected: "bg-orange-400 ",
          nav_button: "text-[#F3D194] font-medium h-12 w-12 bg-primary opacity-100 hover:opacity-100",
          table: "w-full border-collapse space-y-2", // Espaçamento vertical entre as linhas da tabela
          row: "flex space-x-2", // Espaçamento horizontal entre os dias
        }}
      />
    </div>
  );
}
