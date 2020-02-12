import {Command, flags} from '@oclif/command'
import {main} from '~/_commands/create-message'

export default class CreateMessage extends Command {
  static description = 'describe the command here'

  static examples = [
    '$ comicomi create-message',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args} = this.parse(CreateMessage)
    if (args.file === 'help') {
      this.log('👍')
      return
    }

    main()
  }
}
