const { homedir } = require('os')
const runScript = require('./shell')

const main = async () => {
  const homeDir = homedir()
  const registerProcessHelper = require(`${homeDir}/tsp/projects/project-sh/dist/register-process-helper`).default
  const bashScriptPath = process.argv[2]
  const scriptProcessId = process.argv[3] || bashScriptPath
  registerProcessHelper(scriptProcessId, () => runScript(bashScriptPath, scriptProcessId))
}

main()