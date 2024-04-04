const Openai = require('openai');

class openAIHelper {
    openai = null;

    constructor() {
        this.openai = new Openai({
            apiKey: process.env.OPENAI_KEY,
        });
    }

    async getAnswer(question) {
        try {
            const stream = await this.openai.chat.completions.create({
                messages: [{
                    role: 'system',
                    content: question
                }],
                model: 'gpt-4',
                stream: true,
            });

            let result = '';
            for await (const chunk of stream)
                result += chunk.choices[0]?.delta?.content || '';

            return result;
        } catch (err) {
            throw new Error(err);
        }
    };

    async getAnswerJson(question) {
        try {
            const stream = await this.openai.chat.completions.create({
                messages: [
                    { role: 'system', content: 'You are a places search engine' },
                    { role: 'user', content: question }
                ],
                model: 'gpt-4-turbo-preview',
                stream: true,
                response_format: { type: 'json_object' }
            });

            let result = '';
            for await (const chunk of stream)
                result += chunk.choices[0]?.delta?.content || '';

            return result;
        } catch (err) {
            throw new Error(err);
        }
    }
};

module.exports = openAIHelper;