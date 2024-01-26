"use client"

import { useState } from "react"

export default function CookieButton() {
  const [showModal, setShowModal] = useState(false)
  const [clickedOpen, setClickedOpen] = useState(false)

  const handleClick = () => {
    if (clickedOpen) {
      setShowModal(false)
      setClickedOpen(false)
    } else {
      setShowModal(true)
      setClickedOpen(true)
    }
  }

  return (
    <div 
      className="absolute bottom-4 right-2 flex flex-col items-end"
      onMouseEnter={() => setShowModal(true)}
        onMouseLeave={() => setShowModal(false)}
      >
      {
        showModal == true &&
        <div className="mb-2 bg-[#E9AD68] border-4 border-[#684636] rounded-lg p-2">
          <p>Built by <a href="https://www.olliecookie.com" target="_blank" className="underline">Ollie Cook </a>&#8599;</p>
        </div>
      }
      <button 
        className="text-5xl" 
        onClick={() => handleClick()}
        
      >
        &#x1f36a;
      </button>
    </div>
  )
}