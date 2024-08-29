import { imageDataLinks } from "@/constants";


export  function Links() {
  return (
     <div
      className=" bg-cover bg-center bg-parallex02 py-16 "
     
    >
      <div className="container ">
                <h1 className="flex items-center justify-center  font-bold text-2xl z-30 relative my-4">
LINKS
    </h1>
      </div>
       <div className="grid  items-center justify-center gap-4 grid-cols-2 lg:grid-cols-4 container xl:grid-cols-8 mt-6">
        {imageDataLinks.map((image) => (
          <a
            key={image.id}
            href="#"  
            className="relative overflow-hidden group items-center justify-center"  // Adiciona 'block' para garantir que o link ocupe o espaço total
            target="_blank"  
            rel="noopener noreferrer" 
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="h-full w-24 object-cover rounded-lg transition-transform duration-300 group-hover:scale-125 "
            />
          </a>
        ))}
      </div>
    </div>
  )
}


