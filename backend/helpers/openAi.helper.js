const Openai = require("openai");
require("dotenv").config();


class openAIHelper {
  openai = null;

  constructor() {
    this.openai = new Openai({
      apiKey: "sk-proj-CitB50y4QATeeZt6p6zzT3BlbkFJbxN1jVecsa0ez8jrntYu",
    });
  }

  async getAnswer(question) {
    try {
      const stream = await this.openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: question,
          },
        ],
        model: "gpt-4",
        stream: true,
      });

      let result = "";
      for await (const chunk of stream)
        result += chunk.choices[0]?.delta?.content || "";

      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAnswerJson(question) {
    try {
      const stream = await this.openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are an offensive language detector tailored to identify text that may offend Muslims.",
          },
          { role: "user", content: question },
        ],
        model: "gpt-3.5-turbo",
        stream: true,
        response_format: { type: "json_object" },
      });

      let result = "";
      for await (const chunk of stream)
        result += chunk.choices[0]?.delta?.content || "";

      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
}

// module.exports = openAIHelper;

const c = new openAIHelper();
c.getAnswerJson("allah akbar nigga boom");
