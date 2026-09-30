import Image from "next/image";
import SistemaEndoIcon from "./imagens/SistemaEndoIcon.png";
export default function(){
    return(
        <div className="bg-green-400 border-2 w-150 h-130">
            <h3 className="text-white text-3xl font-semibold justify-self-center">Explore e Entenda o Sistema Endócrino!</h3>
            <Image src={SistemaEndoIcon} alt="Ícone do Sistema Endócrino" loading="eager" className="w-80 justify-self-center"/>
            <p className="justify-self-center font-medium text-white">Aprenda mais sobre o Sistema Endócrino!</p>
            <p className="justify-self-center text-white">Aprenda sobre conceitos principais do Sistema Endócrino, órgãos 
                que o compõem e suas respectivas funções na produção/regulação hormonal. Interaja com a imagem do 
                sistema para visualizar os conceitos.</p>
            <button className="bg-white border-1 ">Entrar</button>
        </div>
    );
}