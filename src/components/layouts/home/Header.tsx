import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-center w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary text-center">
            Desafios de Lógica com Javascript
          </h1>
        </div>
      </div>
    </header>
  )
}