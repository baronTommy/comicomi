const types = [
  {
    name: 'build',
    message:
      'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
  },
  {
    name: 'ci',
    message:
      'ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
  },
  {name: 'docs', message: 'docs: Documentation only changes'},
  {name: 'feat', message: 'feat: A new feature'},
  {name: 'fix', message: 'fix: A bug fix'},
  {name: 'perf', message: 'perf: A code change that improves performance'},
  {
    name: 'refactor',
    message:
      'refactor: A code change that neither fixes a bug nor adds a feature',
  },
  {
    name: 'test',
    message: 'test: Adding missing tests or correcting existing tests',
  },
]

const scopes = [
  'animations',
  'common',
  'compiler',
  'compiler-cli',
  'core',
  'elements',
  'forms',
  'http',
  'language-service',
  'platform-browser',
  'platform-browser-dynamic',
  'platform-server',
  'platform-webworker',
  'platform-webworker-dynamic',
  'router',
  'service-worker',
  'upgrade',
]

const config = {
  types,
  scopes,
}

module.exports = config
