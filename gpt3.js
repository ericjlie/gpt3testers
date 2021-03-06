const fetch = require('node-fetch')
const GPT3_URL = 'https://api.openai.com/v1/engines/davinci/completions'

module.exports = async function completion (prompt, stopSequence, tokens, temp = '.7') {
  const response = await fetch(GPT3_URL, {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + process.env.TOKEN,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      prompt,
      stop: stopSequence,
      max_tokens: tokens,
      temperature: temp
    })
  })

  const json = await response.json()
  return json.choices[0].text
}
