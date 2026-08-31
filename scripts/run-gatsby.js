const { spawnSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const brewBin = "/opt/homebrew/opt/node@18/bin"
const major = Number(process.versions.node.split(".")[0])

if (major !== 18) {
  const brewNode = path.join(brewBin, "node")
  if (fs.existsSync(brewNode)) {
    const result = spawnSync(brewNode, [__filename, ...process.argv.slice(2)], {
      stdio: "inherit",
      env: { ...process.env, PATH: `${brewBin}:${process.env.PATH}` },
    })
    process.exit(result.status === null ? 1 : result.status)
  }

  console.error(
    `Gatsby 4 needs Node 18. You have ${process.version}. Install Node 18 or put it on PATH.`
  )
  process.exit(1)
}

const gatsby = path.join(__dirname, "..", "node_modules", ".bin", "gatsby")
const result = spawnSync(gatsby, process.argv.slice(2), {
  stdio: "inherit",
  shell: process.platform === "win32",
})
process.exit(result.status === null ? 1 : result.status)
