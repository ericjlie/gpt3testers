const readline = require('readline-promise').default
const fetchGpt3 = require('./gpt3')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

const SUPERHERO_STOP_SEQUENCE = '==='
const SUPERHERO_TEMPLATE = `Name: Queen of Jacks
Description: Queen of Jacks is a young woman who wears a diamond patterned dress and has long black hair.
Powers: Queen of Jacks can use her eyes to hypnotize enemies.
===
Name: Sergeant Cream
Description: A young man with spiky, bluish-gray hair. He is known to be hyperactive and energetic, but not very bright. He is rather wealthy, but has no idea how he acquired his wealth.
Powers: Sergeant Cream has the ability to make people happy by touching them. He is also capable of flight.
===
Name: Polka Demon
Description: A young girl wearing black polka dot clothing. Has short black hair. About 12 years old.
Powers: Polka Demon can manipulate sound, allowing her to emit powerful sonic waves, create sonic barriers, and cause herself to become completely silent. She can also use sound waves to teleport, although she is only able to teleport herself.
===
Name: `

function parseSuperhero (description) {
  const lines = description.split('\n')
  const result = {}

  for (const line of lines) {
    try {
      const split = line.split(':')
      const field = split[0]
      const value = split.slice(1)
      
      result[field.toLowerCase()] = value.join(':')
    } catch (e) {
      console.error('Failed on line', line, e)
      // pass
    }
  }

  return result
}

async function run () {
  const superName = await rl.questionAsync('Enter superhero name: ')
  const description = await fetchGpt3(
    SUPERHERO_TEMPLATE + superName,
    SUPERHERO_STOP_SEQUENCE
  )

  console.log('===\n' + description)
  // console.log(parseSuperhero('Name: ' + superName + description))
  process.exit(0)
}

run()
