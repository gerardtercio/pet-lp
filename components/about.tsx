"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

export default function About() {
  const features = [
    { icon: "✓", label: "Equipe Especializada" },
    { icon: "✓", label: "Atendimento 24h" },
    { icon: "✓", label: "Melhores Veterinários" },
    { icon: "✓", label: "Qualidade Garantida" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/veterinary-team-professional.jpg"
                  alt="Nossa equipe"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-[#E8A835] font-bold text-sm tracking-widest mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                SOBRE NÓS
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-sans font-bold text-[#1B4D5C] mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Uma clínica pensada para seu pet
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Com mais de 15 anos de experiência, a Blue Paw Veterinária é
                conhecida por seu atendimento humanizado e técnicas modernas.
                Nossa missão é proporcionar o melhor cuidado veterinário com
                carinho e profissionalismo.
              </motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
