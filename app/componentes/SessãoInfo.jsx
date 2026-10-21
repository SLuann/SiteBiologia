"use client";

import { useState } from "react";
import Image from "next/image";
import SistemaEndo from "../imagens/SistemaEndo.png";

const dadosOrgaos = {
  hipofise: {
    nome: "Hipófise",
    descricao: "Conhecida como a glândula mestre. Fica na base do cérebro e produz hormônios que controlam outras glândulas, além do hormônio do crescimento (GH).",
    posicaoJanela: {top: "14%", left: "54%"}
  },
  hipotalamo: {
    nome: "Hipotálamo",
    descricao: "É o regulador central. Ele monitora o sangue e libera neuro-hormônios (como o GnRH) que ativam ou desligam a produção hormonal da hipófise.",
    posicaoJanela: {top: "12%", left: "53%"}
  },
  gpineal: {
    nome: "Glândula Pineal",
    descricao: "É o regulador do ritmo. Ela traduz a luz ambiental em sinal hormonal, liberando melatonina para avisar as outras glândulas que o corpo entrou no ciclo noturno.",
    posicaoJanela: {top: "13%", left: "18%"}
  },
  tireoide: {
    nome: "Tireoide",
    descricao: "Localizada no pescoço, produz os hormônios T3 e T4, que regulam o metabolismo do corpo, e a calcitonina, que controla o cálcio.",
    posicaoJanela: {top: "18%", left: "51%"}
  },
  timo: {
    nome: "Timo",
    descricao: "Atua no sistema endócrino secretando hormônios como a timosina, que regulam de forma direta a maturação das células de defesa (linfócitos T). Sua atividade hormonal é máxima na infância e decresce na puberdade com o aumento dos hormônios sexuais.",
    posicaoJanela: {top: "35%", left: "22%"}
  },
  suprarrenais1: {
    nome: "Glândulas Suprarrenais",
    descricao: "Situadas acima dos rins, produzem o cortisol (hormônio do estresse) e a adrenalina, preparando o corpo para reações de emergência.",
    posicaoJanela: {top: "41%", left: "13%"}
  },
  suprarrenais2: {
    nome: "Glândulas Suprarrenais",
    descricao: "Situadas acima dos rins, produzem o cortisol (hormônio do estresse) e a adrenalina, preparando o corpo para reações de emergência.",
    posicaoJanela: {top: "40%", left: "56%"}
  },
  pancreas: {
    nome: "Pâncreas",
    descricao: "Uma glândula mista que atua no sistema digestivo e endócrino, produzindo a insulina e o glucagon para regular o açúcar no sangue.",
    posicaoJanela: {top: "51%", left: "36%"}
  },
  ovarios: {
    nome: "Ovários",
    descricao: "São os reguladores do ciclo feminino. Eles respondem aos comandos da hipófise e liberam estrogênio e progesterona, que fazem o feedback para controlar o ritmo menstrual.",
    posicaoJanela: {top: "59%", left: "57%"}
  },
  testiculos1: {
    nome: "Testículos",
    descricao: "São os reguladores da resposta masculina. Eles respondem aos estímulos cerebrais liberando testosterona e controlam seus próprios níveis hormonais via feedback negativo.",
    posicaoJanela: {top: "70%", left: "15%"}
  },
  testiculos2: {
    nome: "Testículos",
    descricao: "São os reguladores da resposta masculina. Eles respondem aos estímulos cerebrais liberando testosterona e controlam seus próprios níveis hormonais via feedback negativo.",
    posicaoJanela: {top: "70%", left: "55%"}
  },
};

export default function(){
    const [orgaoSelecionado, setOrgaoSelecionado] = useState(null);
    return(
        <div className="flex flex-col items-center text-center md:text-lg font-semibold">
            <h1>Interaja com os órgãos do Sistema Endócrino para uma breve descrição.</h1>
            <div className="relative inline-block border border-gray-200 rounded-xl overflow-hidden shadow-md justify-self-center py-1">
                <Image src={SistemaEndo} alt="Sistema Endócrino" loading="eager" className="w-[700px] md:w-[1000px] block select-none"/>
            
                {/* Hipófise */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.hipofise)}
                style={{top: "8%", left: "52%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre a Hipófise" />

                {/* Hipotálamo */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.hipotalamo)}
                style={{top: "7%", left: "51%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre o Hipotálamo" />

                {/* Glândula Pineal */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.gpineal)}
                style={{top: "6%", left: "48%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[18px] h-[15px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre a Glândula Pineal" />

                {/* Tireóide */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.tireoide)}
                style={{top: "16%", left: "48%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[50px] h-[40px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre a Tireóide" />

                {/* Timo */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.timo)}
                style={{top: "22%", left: "48%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[55px] h-[45px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre o Timo" />
                
                {/* Suprarrenais1*/}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.suprarrenais1)}
                style={{ top: "38%", left: "43%" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre as Suprarrenais" />

                {/* Suprarrenais2 */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.suprarrenais2)}
                style={{ top: "37%", left: "54%" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre as Suprarrenais" />

                {/* Pâncreas */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.pancreas)}
                style={{ top: "40%", left: "50%" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[110px] h-[40px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre o Pâncreas" />

                {/* Ovários */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.ovarios)}
                style={{top: "54%", left: "49%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[160px] h-[70px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre os Ovários" />

                {/* Testículos1 */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.testiculos1)}
                style={{top: "60%", left: "46%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[34px] h-[45px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre os Testículos" />

                {/* Testículos2 */}
                <button
                onClick={() => setOrgaoSelecionado(dadosOrgaos.testiculos2)}
                style={{top: "60%", left: "52%"}}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[34px] h-[45px] rounded-full bg-yellow-200/10 border border-yellow-500 animate-pulse hover:scale-120 transition-transform"
                title="Informações sobre os Testículos" />

                {orgaoSelecionado && (
                    <div 
                    style={{top: orgaoSelecionado.posicaoJanela.top, left: orgaoSelecionado.posicaoJanela.left}}
                    className="absolute -translate-y-full w-[280px] bg-gray-800 backdrop-blur-md p-4 rounded-lg shadow-xl text-left border-2 border-red-400 z-30 transition-all pointer-events-auto">
                        <div className="flex justify-between items-start">
                            <h2 className="text-base font-bold">
                            {orgaoSelecionado.nome}
                            </h2>
                            <button
                            onClick={() => setOrgaoSelecionado(null)}
                                className="text-gray-400 hover:text-gray-400 text-sm font-bold p-1"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-xs font-normal text-gray-200 mt-1 leading-relaxed">
                            {orgaoSelecionado.descricao}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}