function normalizarPartes(contenido) {
  if (typeof contenido === 'string') {
    return [{ tipo: 'texto', valor: contenido }]
  }

  if (Array.isArray(contenido)) {
    return contenido.map((parte) => {
      if (typeof parte === 'string') return { tipo: 'texto', valor: parte }
      if (parte.resaltado) return { tipo: 'resaltado', valor: parte.resaltado }
      return { tipo: 'texto', valor: '' }
    })
  }

  if (contenido?.antes !== undefined) {
    return [
      { tipo: 'texto', valor: contenido.antes },
      { tipo: 'resaltado', valor: contenido.destacado },
      { tipo: 'texto', valor: contenido.despues },
    ]
  }

  return [{ tipo: 'texto', valor: String(contenido) }]
}

function TextoConResaltado({ contenido, className = 'texto-resaltado' }) {
  const partes = normalizarPartes(contenido)

  return (
    <>
      {partes.map((parte, i) =>
        parte.tipo === 'resaltado' ? (
          <span key={i} className={className}>
            {parte.valor}
          </span>
        ) : (
          <span key={i}>{parte.valor}</span>
        ),
      )}
    </>
  )
}

export default TextoConResaltado
