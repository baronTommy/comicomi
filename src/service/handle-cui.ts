import {decoratedMessageObj, boxenConf, tpl} from '~/ui'
import {conventionalCommitsMessageObj, ConventionalCommitsMessageObj} from '~/domain'
const clear = require('clear')
const boxen = require('boxen')

const createView = (obj: ConventionalCommitsMessageObj, inputted: ConventionalCommitsMessageObj) =>
  boxen(tpl(obj, inputted), boxenConf)

// eslint-disable-next-line no-console
export const echo = (p: string) => console.log(p)

export const nextStep = (inputted: ConventionalCommitsMessageObj) => {
  clear()
  echo(createView(decoratedMessageObj, inputted))
}

export const init = () => {
  const input = conventionalCommitsMessageObj
  clear()
  echo(createView(decoratedMessageObj, input))
  return {input}
}

