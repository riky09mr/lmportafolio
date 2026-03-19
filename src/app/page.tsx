"use client";
import { motion } from "framer-motion";
import { Code, User, Mail, ArrowDownCircle, Phone } from "lucide-react";
import Image from "next/image";

const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const projects = [
  {
    title: "Sistema de Contabilidad",
    description: "Sitio web de presentacion del proyecto contable con interfaz moderna y enfoque visual.",
    area: "conta",
    images: [
      "/projects/conta/{6B3ABAF7-9668-4FB9-9E99-A415D1868E41}.png",
      "/projects/conta/{902E86F8-4D01-41B7-A249-D3FB4D697CAB}.png",
      "/projects/conta/{A64D55A3-D621-4767-B0A9-F684924C622B}.png",
    ],
  },
  {
    title: "Sistema Veterinaria",
    description: "Pagina web de una veterinaria con secciones informativas, servicios y contacto.",
    area: "vete",
    images: [
      "/projects/vete/{5FA8B2FF-0B4A-416C-B638-353FD334D57B}.png",
      "/projects/vete/{B0E08A71-5D5C-4823-BA7B-CFADD08E8ED3}.png",
      "/projects/vete/{FB32F785-327C-448C-8CDD-E36ABBE6D777}.png",
    ],
  },
  {
    title: "Sistema Ferreteria",
    description: "Pagina web de ferreteria para mostrar productos, promociones y datos del negocio.",
    area: "ferre",
    images: [
      "/projects/ferre/Captura%20de%20pantalla%202026-03-19%20090824.png",
      "/projects/ferre/{7A3404E9-0E58-47E8-8CE2-3468E9D5ABEA}.png",
      "/projects/ferre/{8692D4CC-E3D9-4635-977C-9F8A46E03FC0}.png",
    ],
  },
  {
    title: "Lomiteria (Caja y Cocina)",
    description: "Sistema del lado del dueno para gestionar caja, pedidos y flujo de cocina.",
    area: "lomithor",
    images: [
      "/projects/lomithor/{309DD869-2F18-4CCC-AF4D-2983D1FE7823}.png",
      "/projects/lomithor/{793C47C2-D024-4D74-80E2-2677370E3F1C}.png",
    ],
  },
  {
    title: "Ecommerce Ropa",
    description: "Tienda online de ropas con catalogo visual y flujo de compra.",
    area: "ecomerce",
    images: [
      "/projects/ecomerce/{0E8D2C85-F7CD-4C5E-B3CA-13E7E176B1B0}.png",
      "/projects/ecomerce/{28F063CB-A1C9-4FAB-B27B-0A93F00A5D7E}.png",
      "/projects/ecomerce/{EF713DAF-6F8A-44CB-A323-1B195F049EAE}.png",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white flex flex-col relative overflow-hidden">
      {/* Fondo creativo: nebulosa animada con orbes flotantes */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-pink-400/10 rounded-full blur-[140px]"
          animate={{ scale: [1, 1.4, 1], x: [0, -50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Header futurista */}
      <header className="flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-black/40 sticky top-0 z-50 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
            <User className="w-6 h-6 text-black" />
          </div>
          <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
            Lujan Mayeregger
          </span>
        </motion.div>

        <nav className="hidden md:flex gap-10 text-lg font-medium">
          {["Tecnologías", "Proyectos", "Sobre mí", "Contacto"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace("í", "i")}`}
              className="hover:text-cyan-400 transition-all relative group"
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all" />
            </motion.a>
          ))}
        </nav>
      </header>

      {/* HERO - Ultra creativo */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee_0%,transparent_70%)] opacity-30"
        />

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 drop-shadow-2xl"
        >
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
  Hola, soy
</span>
<span className="block mt-4 bg-gradient-to-r from-pink-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-text-gradient bg-[length:300%_300%]">
  Lujan Mayeregger
</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-2xl text-zinc-300 font-light"
        >
          Ingeniera en Informática • Desarrolladora Fullstack Junior
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <ArrowDownCircle className="w-12 h-12 text-cyan-400 animate-bounce mx-auto" />
        </motion.div>
      </section>

      {/* TECNOLOGÍAS - Sección dedicada y súper creativa */}
      <section id="tecnologias" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Mi Stack Tecnológico
        </motion.h2>
        <p className="text-center text-zinc-400 text-xl mb-16">Frontend • Backend • Bases de Datos</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.12, rotate: 6, boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" }}
              className="group bg-zinc-900/70 border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-6 backdrop-blur-xl hover:border-cyan-400 transition-all"
            >
              <div className="w-24 h-24 p-4 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
              <span className="font-semibold text-xl text-white group-hover:text-cyan-400 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROYECTOS (mantengo pero más moderno) */}
      <section id="proyectos" className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-cyan-400 text-center mb-20 flex items-center justify-center gap-4"
          >
            <Code className="w-12 h-12" /> Proyectos Destacados
          </motion.h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-zinc-900/80 border border-white/10 rounded-3xl p-6 group backdrop-blur-xl"
              >
                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={project.images[0]}
                    alt={`Vista principal de ${project.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 uppercase tracking-wide">
                    {project.area}
                  </span>
                </div>

                <p className="text-zinc-400 mt-3">{project.description}</p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {project.images.slice(0, 3).map((imagePath) => (
                    <div key={imagePath} className="relative h-20 rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={imagePath}
                        alt={`Captura de ${project.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO - Estilo CV moderno */}
      <section id="contacto" className="py-28 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900/70 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 shadow-2xl"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full flex items-center justify-center mb-8 shadow-xl">
              <User className="w-16 h-16 text-black" />
            </div>

            <h2 className="text-5xl font-black mb-2">Lujan Mayeregger</h2>
            <p className="text-2xl text-cyan-400 font-medium mb-12">Ingeniería en Informática</p>

            <div className="space-y-8 w-full max-w-xs">
              <motion.a
                href="tel:0971522105"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-6 text-left group"
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Teléfono</p>
                  <p className="text-2xl font-medium group-hover:text-cyan-400 transition-colors">0971 522 105</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:lujanmayeregger064@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-6 text-left group"
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="text-xl font-medium group-hover:text-cyan-400 transition-colors break-words">
                    lujanmayeregger064@gmail.com
                  </p>
                </div>
              </motion.a>
            </div>

            <motion.a
              href="mailto:lujanmayeregger064@gmail.com"
              className="mt-16 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 px-12 py-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Enviar mensaje ahora ✨
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-zinc-500 border-t border-white/10">
        © {new Date().getFullYear()} Lujan Mayeregger 
      </footer>
    </div>
  );
}