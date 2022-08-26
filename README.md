# quiz_api.py
Web-API for [quizapi.io](https://quizapi.io) website which is a SaaS which lets you test your knowledge on a wide variety of technical topics

## Example
```python
import quiz_api
quiz_api = quiz_api.QuizAPI(api_key="")
random_quiz = quiz_api.get_random_quiz()
print(random_quiz)
```
