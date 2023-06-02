const { homedir } = require('os')
const { execSync } = require('child_process')
const { appendFileSync } = require('fs')
const { join } = require('path')

const main = async () => {
  const homeDir = homedir()
  const registerProcessHelper = require(`${homeDir}/tsp/projects/project-sh/dist/register-process-helper`).default
  const bashScriptPath = process.argv[2]
  const scriptProcessId = process.argv[3] || bashScriptPath
  const runScript = () => {
    try {
      const command = `/usr/bin/bash ${bashScriptPath}`
      console.log(`command`, command)
      const output = execSync(command).toString()
      console.log(output)
      appendFileSync(join(__dirname, `${scriptProcessId}.log`), output, 'utf-8')
    } catch (error) {
      console.log(`error`, error)
    }
  }
  registerProcessHelper(scriptProcessId, runScript)
}

main()