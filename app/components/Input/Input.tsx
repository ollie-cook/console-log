"use client"

import { useState } from "react"

export default function Input() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "c") {
      if (timer) {
        clearInterval(timer);
      }
      setTime(0);
      const newTimer = setInterval(() => setTime(t => parseFloat((t + 0.01).toFixed(2))), 10);
      setTimer(newTimer);
    }

    if (event.key === "g") {
      if (timer) {
        clearInterval(timer);
      }
    }
  }

  return (
    <div className="flex flex-col mt-16">
      <label>Type console.log as fast as you can</label>
      <input type="text" className="border-2 border-black indent-2" onKeyDown={handleKeyDown} />
      <p>time: {time}</p>
    </div>
  )
}