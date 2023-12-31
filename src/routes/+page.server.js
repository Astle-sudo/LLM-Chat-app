async function fetchData(prompt) {
    const baseUrl = 'http://localhost:1234/v1';
    const apiKey = 'not-needed';
    const data = {
      model: 'local-model',
      messages: [
        { role: 'user', content: prompt + '(Respond in 50 words)' }
      ],
      temperature: 0.7
    };
  
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
  
    const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData.choices[0].message;
}

export const actions = {
	default: async({request}) => {
        let data = await request.formData();
        let prompt = data.get('prompt');
        let AIresponse = await fetchData(prompt);

        return { 
            success: true,
            response: AIresponse 
        };
    }
};


