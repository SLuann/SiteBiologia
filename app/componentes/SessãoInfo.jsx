import Image from "next/image";
import SistemaEndoIcon from "./imagens/SistemaEndoIcon.png";
export default function(){
    return(
        <div className="text- border-2 w-150 h-180">
            <h3 className="text-white text-3xl font-semibold justify-self-center">Explore e Entenda o Sistema Endócrino</h3>
            <Image src={SistemaEndoIcon} alt="Ícone do Sistema Endócrino" className="w-80 justify-self-center"/>
            <p className="justify-self-center">.......Alguma coisa........</p>
            <button className="bg-white border-1 ">Entrar</button>
        </div>
    );
}