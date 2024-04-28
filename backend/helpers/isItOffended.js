const openAIHelper = require("./openAi.helper");

const DetectOffense = async (str) => {
  const c = new openAIHelper();

  const t = await c.getAnswerJson(`
    in this text your job is to detect if the language used is offensive to muslims or not .
    if it is return true or false as a json, example {"offensive":true}
    text is : ${str}
  `);

  return JSON.parse(t);
};

module.exports = DetectOffense;
