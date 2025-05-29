"use client";
import CommandBarComponent from "@/components/CommandBar";
import { useState } from "react";
export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  //function to fetch output from the api

  const runPrompt = async () => {
    console.log("Button cliekc");
    fetch("http://localhost:8000/runPrompt/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
      })
    }
    )
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setOutput(data);
  });
  }

  return (
    <div className="flex flex-row">
      {/* //left section  */}
      <div className="w-2/3 bg-gray-300 h-screen">
        {/* slides box */}
        <div className="h-2/3  ">
          <div className="h-1/2  bg-[#5499c7] flex justify-center items-center ">
            Slide 1
          </div>
          <div className="h-1/2  bg-[#45b39d] flex justify-center items-center ">
            Slide 2
          </div>
        </div>
        {/* prompt box */}
        <div className="h-1/3 bg-[#F08080]">
          <input
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            type="text"
            className="w-full h-2/4 px-4"
            placeholder="Type your prompt here..."
          />
          <div className="h-1/4 text-white bg-black ">
          {output && (
            <h1>Message: {output.message} <br/> Prompt was: {output.prompt} </h1>
          )}
          </div>
          <button
            className="bg-[#FFA07A] text-white px-4 py-2 mt-2"
            onClick={runPrompt}
          >
            Run Prompt
          </button>
        </div>
      </div>
      {/* //right section */}
      <div className="w-1/3 bg-gray-100 h-screen"></div>
    </div>
  );
}


