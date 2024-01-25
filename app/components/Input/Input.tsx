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
    if (event.key.toLowerCase() === "c") {
      if (timer) {
        clearInterval(timer);
      }
      setTime(0);
      const newTimer = setInterval(() => setTime(t => parseFloat((t + 0.01).toFixed(2))), 10);
      setTimer(newTimer);
    }

    if (event.key.toLowerCase() === "g") {
      if (timer) {
        clearInterval(timer);
        if (inputValue.toLowerCase() === "console.lo") {
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
      <div className={`flex relative sm:left-9`}>
        <input 
          id="console-log-type"
          type="text" 
          className="border-4 border-black indent-1 h-12 w-72 text-4xl font-semibold sm:w-96 sm:h-16" 
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button 
          className="w-12 ml-1 aspect-square bg-orange-400 border-4 border-black text-xs text-white font-bold hover:bg-orange-500 sm:w-16 sm:text-base sm:ml-2"
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
          <div className="relative mt-20 h-40 w-full bg-orange-100 rounded-lg flex flex-col items-center justify-start sm:w-[40rem] sm:h-32 sm:justify-center">
            <p className="font-semibold mt-4 sm:text-2xl sm:mt-0">Congratulations!</p>
            <p className="text-sm sm:text-base">You typed &apos;console.log&apos; in {time} seconds!</p>
            <p className="text-sm sm:text-base">What an achievement!</p>
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center h-32 absolute left-0 bottom-0"
              loop={loop}
              style={{ transform: 'scaleX(-1)' }}
            />
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center h-32 absolute right-0 bottom-0"
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