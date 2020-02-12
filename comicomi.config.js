
// TODO
// @types
const typeList = {
  // TODO  key value 形式に
  choices: [
    // 'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    // 'ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    // 'docs: Documentation only changes',
    // 'feat: A new feature',
    // 'fix: A bug fix',
    // 'perf: A code change that improves performance',
    // 'refactor: A code change that neither fixes a bug nor adds a feature',
    // 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    // 'test: Adding missing tests or correcting existing tests',

    'build',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'style',
    'test',
  ],
}
const scopeList = {
  choices: [
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
  ],
}

const config = {
  typeList,
  scopeList,
}

module.exports = config
