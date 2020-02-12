import {selectScope, selectType, inputBody, inputDescription, inputFooter}  from '~/useCase'
import {nextStep, init, config} from '~/service'
import {removeTail} from '~/util'

const {types, scopes} = config

export const main = async () => {
  const {input} = init()

  input.type = (await selectType({choices: types})).type
  nextStep(input)

  input.scope = (await selectScope({choices: scopes})).scope
  nextStep(input)

  input.description = (await inputDescription()).description
  input.description = removeTail(input.description) // TODO multiline
  nextStep(input)

  input.body = (await inputBody()).body
  nextStep(input)

  input.footer = (await inputFooter()).footer
  nextStep(input)
}
