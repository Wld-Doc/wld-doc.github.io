// https://github.com/nuxt/content/pull/676

const path = require('path');
const fs = require('fs/promises');

const interpolateSourceCode = async (file) => {
  if (file.extension !== '.md') {
    return
  }

  const lines = file.data.split('\n')
  let inCodeBlock = false

  for (let i = 0, l = lines.length; i < l; i++) {
    const line = lines[i].trim()

    if (!inCodeBlock && line.startsWith('```')) {
      inCodeBlock = true
      // handling indented codeblocks
      // could save the codeblock indent and offset the line indent from it.
      continue
    }

    const basePath = 'static/files/'
    const sourceKey = 'source:'
    if (inCodeBlock && line.startsWith(sourceKey)) {
      try {
        const [lineIndent, relativePath] = lines[i].split(sourceKey)
        // const sourceCode = path.resolve(path.dirname(file.path), relativePath)
        const sourceCode = path.resolve(basePath, relativePath)
        const buffer = await fs.readFile(sourceCode,{encoding: 'utf8'})

        let indentedLine = lineIndent + buffer.toString().replace(/\n/g, "\n" + lineIndent)
        if (lineIndent.length) {
          // an extra lineIndent is added to the end.
          indentedLine = indentedLine.slice(0, lineIndent.length * -1)
        }

        lines[i] = indentedLine
      } catch (e) {
        throw e
      }

      continue
    }

    if (inCodeBlock && line.startsWith('```')) {
      inCodeBlock = false
    }
  }

  file.data = lines.join('\n')
}

// export default {
//   hooks: {
//     'content:file:beforeParse': interpolateSourceCode
//   }
// }
export default interpolateSourceCode;
