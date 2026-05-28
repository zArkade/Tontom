import { useState, useEffect, useCallback } from 'react'
import PhotoGrid from './PhotoGrid'

function BatismoSlider({ photos }) {
  const [atual, setAtual] = useState(0)
  const [carregadas, setCarregadas] = useState({})
  const [gradeAberta, setGradeAberta] = useState(false)

  const proxima = useCallback(() => {
    setAtual((i) => (i + 1) % photos.length)
    clearInterval(timer)
  }, [photos.length])

  const anterior = () => {
    setAtual((i) => (i - 1 + photos.length) % photos.length)
    clearInterval(timer)
  }

  useEffect(() => {
    const timer = setInterval(proxima, 10000)
    return () => clearInterval(timer)
  }, [proxima])

  const aoCarregar = (index) => {
    setCarregadas((prev) => ({ ...prev, [index]: true }))
  }

  const aoSelecionarFoto = (index) => {
    setAtual(index)
    setGradeAberta(false)
  }

  return (
    <div className="relative w-full bg-[#0e0e0e]" style={{ height: 'calc(100dvh - 64px)' }}>

      {photos.map((url, index) => (
        <div
          key={url}
          className={`absolute inset-0 transition-opacity duration-700
            ${index === atual ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={url}
            alt={`Foto ${index + 1} do batismo`}
            onLoad={() => aoCarregar(index)}
            className={`w-full h-full object-contain transition-opacity duration-500
              ${carregadas[index] ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      ))}

      {/* Botão anterior */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors duration-200 p-3 bg-white/10 hover:bg-white/20 rounded-full"
        aria-label="Foto anterior"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Botão próxima */}
      <button
        onClick={proxima}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors duration-200 p-3 bg-white/10 hover:bg-white/20 rounded-full"
        aria-label="Próxima foto"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Bolinhas */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setAtual(index)}
            className={`h-1.5 rounded-full transition-all duration-300
              ${index === atual ? 'bg-white w-4' : 'bg-white/40 w-1.5'}`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Contador */}
      <button
        onClick={() => setGradeAberta(true)}
        className="absolute bottom-6 right-6 z-10 text-white text-xs tracking-widest bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors duration-200"
      >
        {String(atual + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
      </button>

      {/* Grade de fotos */}
      {gradeAberta && (
        <PhotoGrid
          photos={photos}
          onSelect={aoSelecionarFoto}
          onClose={() => setGradeAberta(false)}
        />
      )}

    </div>
  )
}

export default BatismoSlider