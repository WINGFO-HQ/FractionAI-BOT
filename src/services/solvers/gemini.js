import { GoogleGenerativeAI } from "@google/generative-ai";
import Tools from "../../utils/tools.js";

class GeminiSolver {
  constructor(apiKey) {
    this.initialize(apiKey);
  }

  initialize(apiKey) {
    if (!apiKey) {
      throw new Error("Gemini API key is required");
    }
    this.gemini = new GoogleGenerativeAI(apiKey);
    this.model = this.gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
    Tools.log("Gemini initialized successfully");
  }

  async solve(base64Image) {
    try {
      Tools.log("Solving captcha with Gemini...");

      const prompt =
        "Please identify and provide only the text/numbers shown in this captcha image. Format the answer as plain text without any additional explanation or punctuation.";

      const image = {
        inlineData: {
          data: base64Image,
          mimeType: "image/png",
        },
      };

      const result = await this.model.generateContent([prompt, image]);
      const captchaText = result.response.text().trim();
      const cleanedCaptchaText = captchaText.replace(/\s/g, "");

      Tools.log(`Gemini solved captcha: ${cleanedCaptchaText}`);
      return cleanedCaptchaText;
    } catch (error) {
      Tools.log(`Gemini solving error: ${error.message}`);
      throw error;
    }
  }

  reportGood() {}
  reportBad() {}
}

export default GeminiSolver;
