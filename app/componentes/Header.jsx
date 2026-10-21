import Image from "next/image";
import Link from "next/link";
import LogoSBiologia from "../imagens/LogoSBiologia.png";
import { Rotas } from "../rotas";

export default function Header() {
    return(
        <nav className="flex justify-between items-center bg-red-900 text-black">
            <Link href={Rotas.inicio} className="flex-shrink-0">
                <Image src={LogoSBiologia} alt="Logo do Site" loading="eager" className="w-[50px] md:w-[100px]" />
            </Link>
            <div className="text-center flex flex-col gap-2 mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold">Projeto Biomaquete 2026</h1>
                <h2 className="text-lg md:text-2xl font-medium">Sistema endócrino e regulação hormonal</h2>
            </div>
        </nav>
    );
}