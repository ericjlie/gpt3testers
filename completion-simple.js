const readline = require('readline-promise').default
const fetchGpt3 = require('./gpt3')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

const STOP_SEQUENCE = '.'

async function run () {
  const inputStr = await rl.questionAsync('Enter string to complete: ')
  const completion = await fetchGpt3(
    inputStr,
    STOP_SEQUENCE,
    40,
    .5
  )

  console.log(completion)
  process.exit(0)
}

run()
