// solcjs import hack for browsers.
// requires soljson.js already imported in index.html via <script>
// then, add externals: { 'module': 'Module' } to your webpack config

import solc from 'solc/wrapper'

export default solc(require('module'))
