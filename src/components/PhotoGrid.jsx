function PhotoGrid({ photos, onSelect, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-[#0e0e0e]/95 overflow-y-auto"
      onClick={onClose}
    >
      {/* Botão fechar */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 text-white/60 hover:text-white transition-colors duration-200 z-50"
        aria-label="Fechar grade"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Grade de fotos */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 pt-16"
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar na grade
      >
        {photos.map((url, index) => (
          <button
            key={url}
            onClick={() => onSelect(index)}
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src={url}
              alt={`Foto ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Número da foto aparece ao passar o mouse */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="text-white text-sm tracking-widest">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default PhotoGrid