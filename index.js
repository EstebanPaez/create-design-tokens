const axios = require('axios').default
const fs = require('fs').promises
const path = require('path')

module.exports = async () => {
  const { data } = await axios.get('https://gist.githubusercontent.com/camilopaezz/b073de6fa717a384f989ceadb6d44c41/raw/8eb7f9cf71f7e2ba2056632c9edd840fdd95b6a4/tokensBase.js')
  return fs.writeFile(path.join(process.cwd(), 'designTokens.js'), data, 'utf-8') 
}
