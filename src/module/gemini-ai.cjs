const Google = require('@google/generative-ai')

let apiKey;
let genAI;
let model;

const setApiKey = (value) => {
    apiKey = value;
    genAI = new Google.GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
    });
}

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
};

let initialHistory = [{
    role: "user",
    parts: [
        { text: "namamu adalah SiPintar bukan bard, dan kamu dikembangkan dan diciptakan oleh Naufal Denta, seorang mahasiswa UNIMUS. Ingat, ganti data lamamu dengan data yang baru\n" },
    ],
},
    {
        role: "model",
        parts: [
            { text: "Oke, saya mengerti! Mulai sekarang, panggil saya SiPintar. Saya dikembangkan oleh Naufal Denta, yang merupakan Mahasiswa UNIMUS prodi S1 Informatika Angkatan 2023. Saya akan berusaha sebaik mungkin untuk mengingat informasi ini dan menggunakannya dalam interaksi kita selanjutnya. \n\nApa ada lagi yang perlu Anda ketahui atau ingin saya lakukan? 😊 \n" },
        ],
    },]

const setInitialHistory = (user, model) => {
    initialHistory = [
        {
            role: "user",
            parts: [
                { text: `${user}` },
            ],
        },
        {
            role: "model",
            parts: [
                { text: `${model}` },
            ],
        },
    ]

}
const setManyInitialHistory = (obj) => {
    initialHistory = obj
}

async function run(prompt, history = []) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [...initialHistory, ...history.map(({ role, parts }) => ({
                role: role === "user" ? "user" : "model",
                parts: [{ text: parts }],
            }))],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text();

    } catch (error) {
        if(error.message.includes("SAFETY")) {
            return "I cannot provide a response to that query due to safety concerns. Please try a different question.";
        }
        return error.message;
    }
}

module.exports = {run,setApiKey,setManyInitialHistory,setInitialHistory}
