import { resolve } from 'path'

module.exports = {
  root: 'example',
  resolve: {
    alias: {
      '@lib': resolve(__dirname, 'lib')
    }
  },
  server: {
    port: 3001
  }
}
