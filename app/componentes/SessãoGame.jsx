"use client";

import React, { useState, useEffect } from 'react';

// Banco de dados com as 10 fases completas do sistema endócrino
const CENARIOS = [
    {
        id: 1,
        situacao: "🚨 O paciente acabou de comer uma fatia enorme de bolo de chocolate!",
        problema: "A glicose no sangue está subindo perigosamente!",
        statusInicial: 160,
        statusNome: "Glicose",
        statusUnidade: "mg/dL",
        alvoMin: 70,
        alvoMax: 110,
        mensagemSucesso: "Perfeito! A Insulina captou a glicose circulante e a guardou nas células.",
        hormonioCorreto: "insulina"
    },
    {
        id: 2,
        situacao: "🏃 Um cachorro bravo começou a correr atrás do paciente!",
        problema: "O corpo precisa de energia e fluxo sanguíneo imediato para fugir!",
        statusInicial: 60,
        statusNome: "Batimentos Cardíacos",
        statusUnidade: "BPM",
        alvoMin: 120,
        alvoMax: 160,
        mensagemSucesso: "Isso aí! A Adrenalina aumentou o ritmo cardíaco e dilatou os brônquios para a fuga.",
        hormonioCorreto: "adrenalina"
    },
    {
        id: 3,
        situacao: "⏰ O paciente está há 12 horas em jejum total prolongado.",
        problema: "Os níveis de açúcar no sangue despencaram!",
        statusInicial: 50,
        statusNome: "Glicose",
        statusUnidade: "mg/dL",
        alvoMin: 70,
        alvoMax: 110,
        mensagemSucesso: "Boa! O Glucagon quebrou o glicogênio armazenado no fígado para liberar glicose.",
        hormonioCorreto: "glucagon"
    },
    {
        id: 4,
        situacao: "🥵 Dia extremamente quente e o paciente esqueceu de beber água (Desidratação).",
        problema: "A pressão arterial está caindo e a osmolaridade do sangue subindo!",
        statusInicial: 35,
        statusNome: "Retenção de Água nos Rins",
        statusUnidade: "%",
        alvoMin: 75,
        alvoMax: 95,
        mensagemSucesso: "Excelente! O ADH (Antidiurético) reabsorveu água nos rins, concentrando a urina e poupando água.",
        hormonioCorreto: "adh"
    },
    {
        id: 5,
        situacao: "🥛 O paciente tomou um suplemento concentrado de cálcio em jejum.",
        problema: "Hipercalcemia! Os níveis de cálcio livre no sangue estão altos demais.",
        statusInicial: 15,
        statusNome: "Cálcio no Sangue",
        statusUnidade: "mg/dL",
        alvoMin: 8.5,
        alvoMax: 10.5,
        mensagemSucesso: "Muito bem! A Calcitonina (da tireoide) fixou o excesso de cálcio diretamente nos ossos.",
        hormonioCorreto: "calcitonina"
    },
    {
        id: 6,
        situacao: "🦴 O paciente passou meses sem ingerir cálcio. O estoque no sangue está crítico!",
        problema: "Hipocalcemia! Os músculos correm risco de sofrer espasmos e tetania.",
        statusInicial: 5.5,
        statusNome: "Cálcio no Sangue",
        statusUnidade: "mg/dL",
        alvoMin: 8.5,
        alvoMax: 10.5,
        mensagemSucesso: "Sucesso! O PTH (Paratormônio) retirou cálcio dos ossos para manter o nível sanguíneo vital.",
        hormonioCorreto: "pth"
    },
    {
        id: 7,
        situacao: "❄️ O paciente viajou para o Alasca e está enfrentando um frio extremo de -15°C.",
        problema: "A taxa metabólica basal precisa subir para gerar calor interno corporal!",
        statusInicial: 12,
        statusNome: "Metabolismo Celular",
        statusUnidade: "U/min",
        alvoMin: 35,
        alvoMax: 50,
        mensagemSucesso: "Exato! A Tireoide liberou T3/T4, acelerando o metabolismo e gerando calor por termogênese.",
        hormonioCorreto: "t3_t4"
    },
    {
        id: 8,
        situacao: "📊 Semana de exames finais na faculdade! O estresse psicológico está crônico.",
        problema: "O corpo precisa gerenciar a energia a longo prazo e controlar inflamações.",
        statusInicial: 4,
        statusNome: "Resistência ao Estresse Crônico",
        statusUnidade: "Nível",
        alvoMin: 15,
        alvoMax: 25,
        mensagemSucesso: "Correto! O Cortisol foi liberado pelas suprarrenais para estabilizar o estresse a longo prazo.",
        hormonioCorreto: "cortisol"
    },
    {
        id: 9,
        situacao: "🤰 Uma paciente grávida entrou em trabalho de parto na maternidade.",
        problema: "As contrações uterinas estão fracas e o bebê não consegue descer.",
        statusInicial: 20,
        statusNome: "Contrações Uterinas",
        statusUnidade: "Frequência",
        alvoMin: 70,
        alvoMax: 100,
        mensagemSucesso: "Sensacional! A Ocitocina disparou contrações fortes em um ciclo de feedback positivo para o parto.",
        hormonioCorreto: "ocitocina"
    },
    {
        id: 10,
        situacao: "🤱 O bebê acabou de nascer e começou a sugar o seio materno.",
        problema: "Os alvéolos mamários precisam produzir leite imediatamente para alimentá-lo.",
        statusInicial: 5,
        statusNome: "Síntese de Leite Materno",
        statusUnidade: "mL/h",
        alvoMin: 40,
        alvoMax: 60,
        mensagemSucesso: "Perfeito! A Prolactina estimulou a produção de leite pelas glândulas mamárias.",
        hormonioCorreto: "prolactina"
    }
];

const TODOS_HORMONIOS = [
    { id: 'insulina', nome: 'Insulina' },
    { id: 'glucagon', nome: 'Glucagon' },
    { id: 'adrenalina', nome: 'Adrenalina' },
    { id: 'adh', nome: 'ADH (Antidiurético)' },
    { id: 'calcitonina', nome: 'Calcitonina' },
    { id: 'pth', nome: 'PTH (Paratormônio)' },
    { id: 't3_t4', nome: 'T3 e T4 (Tireoidianos)' },
    { id: 'cortisol', nome: 'Cortisol' },
    { id: 'ocitocina', nome: 'Ocitocina' },
    { id: 'prolactina', nome: 'Prolactina' }
];

export default function Minigame() {
    const [faseAtual, setFaseAtual] = useState(0);
    const [statusValor, setStatusValor] = useState(CENARIOS[0].statusInicial);
    const [tempo, setTempo] = useState(20);
    const [jogoStatus, setJogoStatus] = useState('inicio'); // 'inicio', 'jogando', 'ganhou_fase', 'perdeu', 'fim_de_jogo'
    const [pontos, setPontos] = useState(0);
    const [opcoesFase, setOpcoesFase] = useState([]);
    const [animando, setAnimando] = useState(false);
    const [tentativasErradas, setTentativasErradas] = useState(0);

    const cenario = CENARIOS[faseAtual];

    // Gera alternativas embaralhadas dinâmicas sem repetição fixa
    useEffect(() => {
        if (!cenario) return;

        const correto = TODOS_HORMONIOS.find(h => h.id === cenario.hormonioCorreto);
        const incorretos = TODOS_HORMONIOS.filter(h => h.id !== cenario.hormonioCorreto);

        const incorretosSorteados = [...incorretos]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        const misturados = [correto, ...incorretosSorteados].sort(() => 0.5 - Math.random());

        setOpcoesFase(misturados);

        // Efeito suave de transição entre as fases
        setAnimando(true);
        const timeoutAnimacao = setTimeout(() => setAnimando(false), 300);
        return () => clearTimeout(timeoutAnimacao);
    }, [faseAtual]);

    // Cronômetro e ciclo dinâmico de desregulação homeostática
    useEffect(() => {
        if (jogoStatus !== 'jogando') return;

        const timer = setInterval(() => {
            setTempo((prev) => {
                if (prev <= 1) {
                    setJogoStatus('perdeu');
                    return 0;
                }
                return prev - 1;
            });

            setStatusValor((prev) => {
                const fatorVariacao = cenario.alvoMax > 50 ? 2.5 : 0.3;
                if (cenario.statusInicial > cenario.alvoMax) {
                    return Number((prev + fatorVariacao).toFixed(1));
                } else {
                    return Number((prev - fatorVariacao).toFixed(1));
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [jogoStatus, cenario]);

    const iniciarJogo = () => {
        setFaseAtual(0);
        setStatusValor(CENARIOS[0].statusInicial);
        setTempo(20);
        setJogoStatus('jogando');
        setPontos(0);
        setTentativasErradas(0);
    };

    const injetarHormonio = (hormonioId) => {
        if (jogoStatus !== 'jogando') return;

        if (hormonioId === cenario.hormonioCorreto) {
            // Traz o valor de volta para o ponto médio exato da zona estável
            const pontoMedio = cenario.alvoMin + (cenario.alvoMax - cenario.alvoMin) / 2;
            setStatusValor(Number(pontoMedio.toFixed(1)));
            const pontosQuestao = tentativasErradas === 0 ? 10 : tentativasErradas === 1 ? 6 : 3;
            setPontos((p) => p + pontosQuestao);
            setJogoStatus('ganhou_fase');
        } else {
            // Punição por erro técnico: reduz o tempo de resposta e a pontuação
            setTempo((t) => Math.max(t - 3, 0));
            const novasTentativasErradas = tentativasErradas + 1;
            setTentativasErradas(novasTentativasErradas);

            const penalidade = cenario.alvoMax > 50 ? 15 : 1.5;
            setStatusValor((prev) => Number((cenario.statusInicial > cenario.alvoMax ? prev + penalidade : prev - penalidade).toFixed(1)));

            // Na terceira resposta errada, encerra a questão sem conceder os 10 pontos.
            if (novasTentativasErradas >= 3) {
                setJogoStatus('errou_fase');
            }
        }
    };

    const proximaFase = () => {
        if (faseAtual < CENARIOS.length - 1) {
            const proxima = faseAtual + 1;
            setFaseAtual(proxima);
            setStatusValor(CENARIOS[proxima].statusInicial);
            setTempo(20);
            setTentativasErradas(0);
            setJogoStatus('jogando');
        } else {
            setJogoStatus('fim_de_jogo');
        }
    };

    const estaSeguro = statusValor >= cenario.alvoMin && statusValor <= cenario.alvoMax;

    return (
        <div className="w-full max-w-2xl mx-auto bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl text-slate-100 min-h-[460px] flex flex-col justify-center overflow-hidden">
            {/* 1. TELA DE INÍCIO */}
            {jogoStatus === 'inicio' && (
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-6 w-full opacity-100 transition-opacity duration-300">
                    <div className="text-6xl animate-bounce">🧪</div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-emerald-400 mb-3 tracking-tight">
                            Desafio da Homeostase
                        </h2>
                        <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                            Assuma o comando do sistema endócrino! Estabilize os níveis vitais do organismo disparando as respostas hormonais corretas para cada caso clínico antes que o tempo esgote.
                        </p>
                    </div>
                    <button
                        onClick={iniciarJogo}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-lg font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                        Iniciar Jogo 🚀
                    </button>
                </div>
            )}

            {/* 2. INTERFACE DO JOGO EM ANDAMENTO */}
            {jogoStatus === 'jogando' && (
                <div className={`w-full flex flex-col justify-between h-full space-y-5 transition-all duration-300 ${animando ? 'opacity-20 scale-95' : 'opacity-100 scale-100'}`}>
                    {/* Painel Médico de Cima */}
                    <div className="flex items-center justify-between gap-3 border-b border-slate-700 pb-4">
                        <div>
                            <h2 className="text-lg font-bold text-emerald-400">
                                🔬 Centro Clínico Endócrino
                            </h2>
                            <p className="text-sm text-slate-300">
                                Caso {faseAtual + 1} de {CENARIOS.length}
                            </p>
                        </div>
                        <div className="text-right text-sm">
                            <p>Pontuação da questão <strong>{Math.max(10 - (tentativasErradas === 0 ? 0 : tentativasErradas === 1 ? 4 : 7), 0)}/10</strong></p>
                            <p>
                                Tempo:{' '}
                                <strong className={`font-bold ${tempo < 5 ? "text-red-500 animate-pulse text-base" : "text-white"}`}>
                                    {tempo}s
                                </strong>
                            </p>
                        </div>
                    </div>

                    {/* Sintoma Clínico */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold">{cenario.situacao}</h3>
                        <p className="text-slate-300">{cenario.problema}</p>
                    </div>

                    {/* Monitor de Gráficos e Taxas */}
                    <div className="rounded-xl bg-slate-900/70 border border-slate-700 p-5 text-center">
                        <p className="text-sm text-slate-300">{cenario.statusNome}</p>
                        <div className={`text-4xl font-black my-1 ${estaSeguro ? "text-emerald-400" : "text-red-400 animate-pulse"}`}>
                            {statusValor} {cenario.statusUnidade}
                        </div>
                        <p className="text-xs text-slate-400">
                            Faixa Segura Alvo: {cenario.alvoMin} a {cenario.alvoMax} {cenario.statusUnidade}
                        </p>
                    </div>

                    {/* Painel de Injeções (4 Opções Dinâmicas) */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-center">Injetar Via Corrente Sanguínea</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {opcoesFase.map((hormonio) => (
                                <button
                                    key={hormonio?.id}
                                    onClick={() => injetarHormonio(hormonio?.id)}
                                    className="bg-slate-700 hover:bg-emerald-600 hover:text-slate-950 text-slate-100 font-semibold py-3 px-4 text-sm rounded-xl transition-all cursor-pointer shadow-sm text-left flex items-center gap-2 border border-slate-600/40 group transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    💉 {hormonio?.nome}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* 3. TELA DE SUCESSO DA FASE */}
            {jogoStatus === 'ganhou_fase' && (
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-5">
                    <div className="text-6xl">🎉</div>
                    <h2 className="text-2xl font-extrabold text-emerald-400">
                        Homeostase Restabelecida!
                    </h2>
                    <p className="text-slate-300">{cenario.mensagemSucesso}</p>
                    <p className="font-bold text-emerald-300">
                        Você errou {tentativasErradas} {tentativasErradas === 1 ? "vez" : "vezes"} e recebeu {tentativasErradas === 0 ? 10 : tentativasErradas === 1 ? 6 : 3} pontos.
                    </p>
                    <button
                        onClick={proximaFase}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                        {faseAtual === CENARIOS.length - 1 ? "Ver Avaliação Final 📊" : "Próximo Caso Clínico ➡️"}
                    </button>
                </div>
            )}

            {/* 4. TELA DE QUESTÃO PERDIDA APÓS TRÊS ERROS */}
            {jogoStatus === 'errou_fase' && (
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-5">
                    <div className="text-6xl">❌</div>
                    <h2 className="text-2xl font-extrabold text-red-400">
                        Você errou 3 vezes!
                    </h2>
                    <p className="text-slate-300">
                        Você errou 3 vezes e recebeu 0 pontos nesta questão.
                    </p>
                    <button
                        onClick={proximaFase}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                        {faseAtual === CENARIOS.length - 1 ? "Ver Avaliação Final 📊" : "Próximo Caso Clínico ➡️"}
                    </button>
                </div>
            )}

            {/* 5. TELA DE DERROTA */}
            {jogoStatus === 'perdeu' && (
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-5">
                    <div className="text-6xl">⚠️</div>
                    <h2 className="text-2xl font-extrabold text-red-400">
                        Falência Sistêmica!
                    </h2>
                    <p className="text-slate-300">
                        O organismo entrou em choque crítico por falta de regulação hormonal a tempo.
                    </p>
                    <button
                        onClick={iniciarJogo}
                        className="bg-red-500 hover:bg-red-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                        Reiniciar Monitoramento 🔄
                    </button>
                </div>
            )}

            {/* 6. TELA DE FIM DE JOGO */}
            {jogoStatus === 'fim_de_jogo' && (
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-5">
                    <div className="text-6xl">🏆</div>
                    <h2 className="text-2xl font-extrabold text-emerald-400">
                        Diretor de Endocrinologia!
                    </h2>
                    <p className="text-slate-300">
                        Excelente trabalho técnico! Você equilibrou com sucesso todos os 10 eixos metabólicos e manteve a estabilidade total do organismo.
                        <br />
                        Obrigado por jogar !
                    </p>
                    <div className="rounded-xl bg-slate-900/70 border border-slate-700 p-5">
                        <p className="text-sm text-slate-300">Pontuação Concluída</p>
                        <p className="text-3xl font-black text-emerald-400">{pontos} / 100 Pontos</p>
                    </div>
                    <button
                        onClick={iniciarJogo}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                        Jogar Novamente 🔄
                    </button>
                </div>
            )}
        </div>
    );
}