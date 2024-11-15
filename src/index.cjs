const gemini = require('./module/gemini-ai.cjs')

module.exports.run = gemini.run;
module.exports.setApiKey = gemini.setApiKey;
module.exports.setInitialHistory = gemini.setInitialHistory;
module.exports.setManyInitialHistory = gemini.setManyInitialHistory;
