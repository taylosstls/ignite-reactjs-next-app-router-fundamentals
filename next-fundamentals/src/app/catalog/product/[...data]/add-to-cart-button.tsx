// Client Components => O JS é enviado ao navegador e passa a ter interatividade na tela
'use client'

import { useState } from 'react'

export function AddToCart() {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
    console.log('Adicionou ao carrinho!')
  }

  return (
    <button
      onClick={addToCart}
      className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Adicionar ao carrinho {count}
    </button>
  )
}
