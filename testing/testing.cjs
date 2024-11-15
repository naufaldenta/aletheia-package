const gemini = require('../src/index.cjs')
gemini.setApiKey("GOOGLE_GEMINI_API")

const runGemini = async () => {
    const result = await gemini.run("Buatkan aku langkah - langkah membuat pancake")
    console.log(result)
}
runGemini();
