import OpenAI from "openai"

const key = process.env.REACT_APP_OPENAIKEY;

const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser:true
});
export default openai;