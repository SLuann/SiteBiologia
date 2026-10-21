import Sessões from "./componentes/Sessões";

export default function HomePage() {
  return (
    <div className="bg-red-800">
      <p className=" text-center py-3 px-2 md:px-10 text-dark font-medium">Esse site foi desenvolvido com o único objetivo de complementar a 
        apresentação da Biomaquete (projeto de Biologia) sobre o sistema endócrino. Durante ou após a apresentação 
        esse site pode ser usado para revisão/aprendizagem dos conhecimentos gerais sobre o tema em questão.
      </p>
      <Sessões/>
    </div>
  );
}