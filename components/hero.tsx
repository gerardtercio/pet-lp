"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-36 pb-8 relative overflow-visible min-h-[90vh] md:min-h-[60vh] flex items-start md:items-center bg-gradient-to-r from-[#153844] via-[#1B6B7C] to-[#2D8A99]"
    >
      {/* Overlay sutil para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>

      {/* Camada decorativa - PawPrints */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Topo esquerdo */}
        <div className="absolute top-20 left-10 -rotate-12">
          <PawPrint
            size={70}
            strokeWidth={1.5}
            className="text-white opacity-[0.28] md:w-[90px] md:h-[90px]"
          />
        </div>
        {/* Topo direito */}
        <div className="absolute top-28 right-16 rotate-25">
          <PawPrint
            size={55}
            strokeWidth={1.4}
            className="text-white opacity-[0.26] md:w-[75px] md:h-[75px]"
          />
        </div>
        {/* Topo centro-direita */}
        <div className="absolute top-40 right-1/3 -rotate-15">
          <PawPrint
            size={45}
            strokeWidth={1.3}
            className="text-white opacity-[0.25] md:w-[60px] md:h-[60px]"
          />
        </div>
        {/* Meio esquerdo */}
        <div className="absolute top-1/2 left-6 rotate-45">
          <PawPrint
            size={50}
            strokeWidth={1.4}
            className="text-white opacity-[0.27] md:w-[70px] md:h-[70px]"
          />
        </div>
        {/* Meio direito amarelo */}
        <div className="absolute top-1/3 right-12 rotate-35">
          <PawPrint
            size={65}
            strokeWidth={1.5}
            className="text-[#E8A835] opacity-[0.29] md:w-[85px] md:h-[85px]"
          />
        </div>
        {/* Centro-esquerdo */}
        <div className="absolute top-2/3 left-1/4 -rotate-20">
          <PawPrint
            size={40}
            strokeWidth={1.2}
            className="text-white opacity-[0.25] md:w-[55px] md:h-[55px]"
          />
        </div>
        {/* Base esquerda */}
        <div className="absolute bottom-32 left-14 rotate-18">
          <PawPrint
            size={60}
            strokeWidth={1.4}
            className="text-white opacity-[0.28] md:w-[80px] md:h-[80px]"
          />
        </div>
        {/* Base direita amarelo */}
        <div className="absolute bottom-24 right-24 -rotate-12">
          <PawPrint
            size={70}
            strokeWidth={1.5}
            className="text-[#E8A835] opacity-[0.2] md:w-[95px] md:h-[95px]"
          />
        </div>
        {/* Base centro */}
        <div className="absolute bottom-40 left-1/3 rotate-28">
          <PawPrint
            size={35}
            strokeWidth={1.2}
            className="text-white opacity-[0.25] md:w-[50px] md:h-[50px]"
          />
        </div>
        {/* Topo centro-esquerda */}
        <div className="absolute top-1/4 left-1/3 -rotate-25">
          <PawPrint
            size={50}
            strokeWidth={1.3}
            className="text-[#E8A835] opacity-[0.27] md:w-[70px] md:h-[70px]"
          />
        </div>
        {/* Extra - faixa superior central */}
        <div className="absolute top-12 left-1/2 rotate-12">
          <PawPrint
            size={40}
            strokeWidth={1.2}
            className="text-white opacity-[0.22] md:w-[55px] md:h-[55px]"
          />
        </div>
        {/* Extra - faixa central direita */}
        <div className="absolute top-1/2 right-1/6 -rotate-18">
          <PawPrint
            size={48}
            strokeWidth={1.3}
            className="text-white opacity-[0.24] md:w-[65px] md:h-[65px]"
          />
        </div>
        {/* Extra - faixa inferior esquerda */}
        <div className="absolute bottom-16 left-6 rotate-8">
          <PawPrint
            size={45}
            strokeWidth={1.2}
            className="text-white opacity-[0.23] md:w-[60px] md:h-[60px]"
          />
        </div>
        {/* Extra - inferior direito amarelo */}
        <div className="absolute bottom-10 right-10 rotate-22">
          <PawPrint
            size={55}
            strokeWidth={1.4}
            className="text-[#E8A835] opacity-[0.21] md:w-[70px] md:h-[70px]"
          />
        </div>
        {/* Círculos desfocados para profundidade */}
        <div className="absolute top-1/4 left-1/5 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white opacity-[0.13] blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#E8A835] opacity-[0.06] blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 md:w-60 md:h-60 rounded-full bg-white opacity-[0.04] blur-3xl"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 md:pt-0">
        {/* Texto */}
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-3 md:mb-6 leading-tight text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cuidando do seu melhor amigo com amor
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-4 md:mb-8 max-w-xl leading-relaxed text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Na Blue Paw Veterinária, seu pet recebe atendimento profissional,
            carinhoso e especializado. Estamos aqui 24h para cuidar da saúde e
            bem-estar do seu companheiro.
          </motion.p>

          <motion.button
            className="bg-[#E8A835] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#d99525] transition-colors shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Fale Conosco
          </motion.button>
        </div>

      </div>

      {/* Imagem na divisão da seção - mobile e desktop */}
      <div className="absolute bottom-0 right-0 md:right-10 lg:right-20 z-[1] md:z-0 flex justify-center md:justify-end w-full md:w-auto">
        <motion.img
          src="https://gammavet.com.br/wp-content/uploads/2023/02/gato-cachorro-veterinario-gamma-vet.png"
          alt="Veterinário com animais"
          className="w-64 h-auto md:w-[500px] lg:w-[600px] object-contain drop-shadow-2xl"
          loading="lazy"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  );
}
