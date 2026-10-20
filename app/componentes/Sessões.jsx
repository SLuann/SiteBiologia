import {Rotas} from "../rotas";
import Image from "next/image";
import Link from "next/link";
import SistemaEndoIcon from "../imagens/SistemaEndoIcon.png";

export default function(){
    return(
        <div className="justify-self-center py-5">
            <div className="bg-green-400 border-2 w-140 h-120 rounded-xl text-center">
                <h3 className="text-white text-3xl font-semibold">Explore e Entenda o Sistema Endócrino!</h3>
                <Image src={SistemaEndoIcon} alt="Ícone do Sistema Endócrino" loading="eager" className="w-80 justify-self-center"/>
                <p className="text-white m-1">Aprenda sobre conceitos principais do Sistema Endócrino, órgãos 
                    que o compõem e suas respectivas funções na produção/regulação hormonal. Interaja com a imagem do 
                    sistema para visualizar os conceitos.</p>
                <Link href={Rotas.info} className="bg-white border-1 rounded-sm ">Entrar</Link>
            </div>
            <div>

            </div>
        </div>
    )
}