from requests import get

class QuizAPI:
	def __init__(self, api_key: str) -> None:
		self.api = "https://quizapi.io/api"
		self.api_key = api_key
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"x-api-key": self.api_key
		}

	def get_random_quiz(self, limit: int = 1) -> dict:
		return get(
			f"{self.api}/v1/questions?limit={limit}",
			headers=self.headers).json()

	def get_quiz_by_category(
			self,
			category: str,
			limit: int = 1) -> dict:
		return get(
			f"{self.api}/v1/questions?category={category}&limit={limit}",
			headers=self.headers).json()

	def get_quiz_by_difficulty(
			self,
			difficulty: str,
			limit: int = 1) -> dict:
		return get(
			f"{self.api}/v1/questions?difficulty={difficulty}&limit={limit}",
			headers=self.headers).json()

	def get_quiz_by_tags(
			self,
			tags: str,
			limit: int = 1) -> dict:
		return get(
			f"{self.api}/v1/questions?tags={tags}&limit={limit}",
			headers=self.headers).json()
