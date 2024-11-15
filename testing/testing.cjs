const gemini = require('../src/index.cjs')
gemini.setApiKey("AIzaSyDcV3AZ1elnKULDJvAOHjME0X9UBG8aw-4")

const runGemini = async () => {
    const result = await gemini.run("Buatkan aku langkah - langkah membuat pancake")
    console.log(result)
}
runGemini();
