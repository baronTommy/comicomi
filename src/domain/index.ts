import {Maybe} from '~/util/type'

export type Text = string

export type ConventionalCommitsMessageObj = {
    type: Maybe<string>;
    scope: Maybe<string>;
    description: Maybe<string>;
    body: Maybe<Text>;
    footer: Maybe<string>;
}

export const conventionalCommitsMessageObj: ConventionalCommitsMessageObj = {
  type: undefined,
  scope: undefined,
  description: undefined,
  body: undefined,
  footer: undefined,
}

export type ConventionalCommitsMessage = Text
