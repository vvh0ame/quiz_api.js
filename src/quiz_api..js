class QuizApi {
	constructor(apiKey) {
		this.api = "https://quizapi.io/api/v1"
		this.apiKey = apiKey
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"x-api-key": this.apiKey
		}
	}

	async getRandomQuiz(limit = 1) {
		const response = await fetch(
			`${this.api}/questions?limit=${limit}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getQuizByCategory(category, limit = 1) {
		const response = await fetch(
			`${this.api}/questions?category=${category}&limit=${limit}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getQuizByDifficulty(difficulty, limit = 1) {
		const response = await fetch(
			`${this.api}/questions?difficulty=${difficulty}&limit=${limit}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getQuizByTags(tags, limit = 1) {
		const response = await fetch(
			`${this.api}/questions?tags=${tags}&limit=${limit}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {QuizApi}
