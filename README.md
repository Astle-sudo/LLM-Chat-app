# Demo Chat App using LM studio
The chat app contains the simple usage of LM studio's local server service, where we can download any LLM of our choice and use initiate a local server to generate responses.
I have tried using the server with Mixtral-7b and Phi-2. The responses were quite different, as expected, while the response time was reasonable.

## Mistral-7B
The Mistral-7B-Instruct-v0.2 Large Language Model (LLM) is an improved instruct fine-tuned version of Mistral-7B-Instruct-v0.1. In order to limit the response time and the length of the response, the string '(respond in 50 words)' was added to the prompt. The average response time was around 8 seconds using an Apple Metal GPU, with the svelte app running on local server.

<img width="843" alt="Screenshot 1945-10-12 at 12 37 18 AM" src="https://github.com/Astle-sudo/LLM-Chat-app/assets/67687557/aa035dbb-d3fc-4bf1-b317-ac76a262f62b">
