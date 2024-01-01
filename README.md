# Demo Chat App using LM studio
The chat app contains the simple usage of LM studio's local server service, where we can download any LLM of our choice and use initiate a local server to generate responses.
I have tried using the server with Mixtral-7b and Phi-2. The responses were quite different, as expected, while the response time was reasonable.

## Mistral-7B
The Mistral-7B-Instruct-v0.2 Large Language Model (LLM) is an improved instruct fine-tuned version of Mistral-7B-Instruct-v0.1, with 7 billion parameters. In order to limit the response time and the length of the response, the string '(respond in 50 words)' was added to the prompt. The average response time was around 8 seconds using an Apple Metal GPU, with the svelte app running on local server.

<img width="843" alt="Screenshot 1945-10-12 at 12 37 18 AM" src="https://github.com/Astle-sudo/LLM-Chat-app/assets/67687557/aa035dbb-d3fc-4bf1-b317-ac76a262f62b">

## Phi 2
Phi-2 is a 2.7 billion parameter Transformer model, an extension of Phi-1.5, with additional training data including synthetic NLP texts and curated web content. The string was added to the prompt as usual, but apparently the model did not understand, as it did cross the limit of 50 words. The average time was 5 seconds for the response (the longer responses took more time of course). The overall accuracy was very good.

<img width="825" alt="Screenshot 1945-10-12 at 12 42 54 AM" src="https://github.com/Astle-sudo/LLM-Chat-app/assets/67687557/19dc48dc-28ec-42ed-a18f-da3143e7f900">
<img width="756" alt="Screenshot 1945-10-12 at 12 43 29 AM" src="https://github.com/Astle-sudo/LLM-Chat-app/assets/67687557/243c4807-23c3-4c9d-8bc3-95ff08c51481">
<br>

Few points to note:
- The models were not fine-tuned
- The original context length was much higher than 50 words, but I had to limit it for faster responses (and also because it was generating thousands of words for very simple prompts)
- The file uploaded here cannot access the LLM model, as the LM studio server was local (I have not hosted it publically yet)
