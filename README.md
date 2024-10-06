# quiz_api.js
Web-API for [quizapi.io](https://quizapi.io) website which is a SaaS which lets you test your knowledge on a wide variety of technical topics

## Example
```JavaScript
async function main() {
	const { QuizApi } = require("./quiz_api.js.js")
	const quizApi = new QuizApi("apiKey")
	const randomQuiz = await quizApi.getRandomQuiz()
	console.log(randomQuiz)
}

main()
```
