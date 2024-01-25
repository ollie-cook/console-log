"use client"

import { useState } from "react"
import Lottie from "lottie-react"
import animationData from "@/public/Animation - 1706218481745.json"

export default function Input() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loop, setLoop] = useState(true);

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
        if (inputValue === "console.lo") {
          setSuccess(true);
        } else {
          setError("Wrong input");
        }
      }
    }
  }

  const handleStartOver = () => {
    setTime(0)
    setInputValue("")
    setError(null)
    setSuccess(false)
  }

  return (
    <div className="flex flex-col items-center mt-16">
      <label htmlFor="console-log-type" className="mb-2 font-semibold">Type &apos;console.log&apos; as fast as you can</label>
      <div className={`flex relative left-9`}>
        <input 
          id="console-log-type"
          type="text" 
          className="border-4 border-black indent-1 h-16 w-96 text-4xl font-semibold" 
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button 
          className="w-16 ml-2 aspect-square bg-orange-400 border-4 border-black text-white font-bold hover:bg-orange-500"
          onClick={handleStartOver}
        >
          Clear
        </button>
      </div>
      <p className="h-6 text-red-800 font-bold">{error}</p>
      <p className="mt-2">TIMER</p>
      <p className={`text-6xl font-bold font-mono ${success == true ? 'text-lime-500' : 'text-teal-200'}`}>{time.toFixed(2)}</p>
      {
        success == true && (
          <>
          <div className="relative mt-20 h-32 w-[40rem] bg-orange-100 rounded-lg flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold">Congratulations!</p>
            <p>You typed &apos;console.log&apos; in {time} seconds!</p>
            <p>What an achievement!</p>
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center h-32 absolute left-0"
              loop={loop}
              style={{ transform: 'scaleX(-1)' }}
            />
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center h-32 absolute right-0"
              loop={loop}
            />
          </div>
          {
            loop === true ? (
              <button 
                className="absolute bottom-2 border-2 border-black p-2 bg-red-400 hover:bg-red-500"
                onClick={() => setLoop(false)}
              >
                Stop party poppers
              </button>
            )
            :
            (
              <button 
                className="absolute bottom-2 border-2 border-black p-2 bg-green-400 hover:bg-green-500"
                onClick={() => setLoop(true)}
              >
                Start party poppers
              </button>
            )
          }
          </>
        )
      }
    </div>
  )
}