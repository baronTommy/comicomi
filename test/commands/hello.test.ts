import {expect, test} from '@oclif/test'

describe('create-message help', () => {
  test
  .stdout()
  .command(['create-message', 'help'])
  .it('runs create-message help', ctx => {
    expect(ctx.stdout).to.contain('👍')
  })
})
