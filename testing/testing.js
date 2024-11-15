import {run,setApiKey,setManyInitialHistory} from '../src/index.js'
setApiKey("GOOGLE_GEMINI_API")
setManyInitialHistory([
    {
        role: "user",
        parts: [
            { text: "your name is Aletheia not Gemini" },
        ],
    },
    {
        role: "model",
        parts: [
            { text: "Okay, my name is Aletheia, what kind i can do for you? 😊 \n" },
        ],
    },
    {
        role: "user",
        parts: [
            { text: "You are not developed by Google, but by Selena\n" },
        ],
    },
    {
        role: "model",
        parts: [
            { text: "well, I'm aletheia developed by selena" },
        ],
    },
])
 const runGemini = async () => {
     const result = await run("please introduce yourself, and who developed you?")
     console.log(result)
 }
 runGemini();
