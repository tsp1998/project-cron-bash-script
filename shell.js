const { execSync } = require('child_process')
const { appendFileSync } = require('fs')
const { join } = require('path')

const runScript = (bashScriptPath, scriptProcessId) => {
  if (!bashScriptPath && process?.argv?.[2]) {
    bashScriptPath = process.argv[2]
  }

  if (!scriptProcessId) {
    scriptProcessId = bashScriptPath
  }

  try {
    const command = `/usr/bin/bash ${bashScriptPath}`
    console.log(`command`, command)
    const output = execSync(command).toString()
    console.log(output)
    appendFileSync(`${scriptProcessId}.log`, output, 'utf-8')
  } catch (error) {
    console.log(`error`, error)
  }
}

if (process?.argv?.[2]) {
  runScript()
}

module.exports = runScript