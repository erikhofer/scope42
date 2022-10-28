import { Workspace, WorkspaceConfig } from '@scope42/data'

export async function initializeWorkspace(workspace: Workspace) {
  await workspace.writeConfig(WorkspaceConfig.parse({}))

  const readme = await workspace.rootDirectory.resolveOrCreateFile('README.md')

  if ((await readme.readText()) === '') {
    await readme.writeText(README_CONTENT)
  }
}

const README_CONTENT = `
# scope42 Workspace

This directory contains data for scope42, a web-based tool for software architecture improvement.
Click the link below and open this directory as a workspace.

## 🔗 [scope42](https://app.scope42.org)

<!-- This file is generated once when creating a workspace to give others a hint what is contained in this diretory. Feel free to edit or delete this. -->
`
