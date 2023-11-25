export default defineEventHandler(async (event) => {
  let request_body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.",
      },
      {
        role: "user",
        content:
          "Compose a poem that explains the concept of recursion in programming.",
      },
    ],
  };
  let response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    body: JSON.stringify(request_body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer: ${process.env.OPEN_API_KEY}`,
    },
  });
  let result = await response.json();

  return `Key: ${process.env.OPEN_API_KEY}`;
});
