import * as useCase from '~/useCase'
import {nextStep, init, config} from '~/service'

const {typeList, scopeList} = config

export const main = async () => {
  const {input} = init()

  input.type = (await useCase.selectType(typeList)).type
  nextStep(input)

  input.scope = (await useCase.selectScope(scopeList)).scope
  nextStep(input)

  input.description = (await useCase.inputDescription()).description
  nextStep(input)

  input.body = (await useCase.inputBody()).body
  nextStep(input)

  input.footer = (await useCase.inputFooter()).footer
  nextStep(input)
}
