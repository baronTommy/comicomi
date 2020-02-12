import {tpl, decorationObj} from '~/ui'
import {conventionalCommitsMessageObj, ConventionalCommitsMessageObj} from '~/domain'
const clear = require('clear')
const boxen = require('boxen')

const boxenConf = {
  float: 'center',
  padding: 2,
  borderColor: 'blue',
  margin: 2,
  borderStyle: 'double',
}

const createView = (obj: ConventionalCommitsMessageObj, inputted: ConventionalCommitsMessageObj) =>
  boxen(tpl(obj, inputted), boxenConf)

// eslint-disable-next-line no-console
export const echo = (p: string) => console.log(p)

export const nextStep = (inputted: ConventionalCommitsMessageObj) => {
  clear()
  echo(createView(decorationObj, inputted))
}

export const init = () => {
  const input = conventionalCommitsMessageObj
  clear()
  echo(createView(decorationObj, input))
  return {input}
}

