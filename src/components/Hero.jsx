import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] pt-16">

      <h1 className="text-white text-4xl md:text-6xl font-light tracking-[0.3em] uppercase mb-4">
        Antonella
      </h1>

      <div className="w-16 h-px bg-white/40 mb-4" />

      <p className="text-white/60 text-sm md:text-base tracking-[0.2em] uppercase mb-16">
        24 de Dezembro de 2024
      </p>

      <Link
        to="/batismo"
        className="border border-white/40 text-white/80 text-xs tracking-[0.25em] uppercase px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
      >
        Meu Batismo
      </Link>

    </section>
  )
}

export default Hero