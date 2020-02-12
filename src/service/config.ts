const {cosmiconfigSync} = require('cosmiconfig')
const explorerSync = cosmiconfigSync('comicomi')

export const {config} = explorerSync.search()
