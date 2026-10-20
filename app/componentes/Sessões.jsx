import {Rotas} from "../rotas";
import Image from "next/image";
import Link from "next/link";
import SistemaEndoIcon from "../imagens/SistemaEndoIcon.png";

export default function(){
    return(
        <div className="flex justify-self-center py-5">
            <div className="bg-green-700 border-2 w-140 h-122 rounded-xl text-center m-10">
                <h2 className="text-white text-3xl font-semibold">Explore e Entenda o Sistema Endócrino!</h2>
                <Image src={SistemaEndoIcon} alt="Ícone do Sistema Endócrino" loading="eager" className="w-80 justify-self-center py-1"/>
                <p className="text-white m-2">Aprenda sobre conceitos principais do Sistema Endócrino, órgãos 
                    que o compõem e suas respectivas funções na produção/regulação hormonal. Interaja com a imagem do 
                    sistema para visualizar os conceitos.</p>
                <Link href={Rotas.info} className="bg-white border-1 rounded-sm text-md p-1">Entrar</Link>
            </div>
            <div className="bg-blue-700 border-2 w-140 h-122 rounded-xl text-center m-10">
                <h2 className="text-white text-3xl font-semibold">Minigame interativo do Sistema Endócrino (Se der tempo)</h2>
                <p className="text-white m-2">Use o minigame para aprender mais sobre como funciona a regulação
                    hormonal dentro do nosso corpo. Interaja com as opções e Bom jogo!</p>
                <Link href={Rotas.game} className="bg-white border-1 rounded-sm text-md p-1">Iniciar</Link>
            </div>
        </div>
    )
}