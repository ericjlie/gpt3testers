const readline = require('readline-promise').default
const fetchGpt3 = require('./gpt3')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

const STOP_SEQUENCE = '==='
const CODE_TEMPLATE = `
  [example] a red button that says stop
  [toCode] <button style={{color: 'white', backgroundColor: 'red'}}>Stop</button>

  ===

  [example] a blue box that contains 2 yellow circles with red borders
  [toCode] <div style={{backgroundColor: 'blue', padding: 20}}><div style = {{backgroundColor: 'yellow', border: '5px solid red', borderRadius: '50%', padding: 20, width: 100, height: 100}}></div><div style ={{backgroundColor: 'yellow', borderWidth: 1, border: '5px solid red', borderRadius: '50%', padding: 20, width: 100, height: 100}}></div></div>,

  ===

  [example]`

async function run () {
  const codeDescription = await rl.questionAsync('JSX element description: ')
  const description = await fetchGpt3(
    CODE_TEMPLATE + codeDescription + '\n[toCode]',
    STOP_SEQUENCE,
    200,
    0
  )


  console.log(description)
  // console.log(parseSuperhero('Name: ' + superName + description))
  process.exit(0)
}

run()
