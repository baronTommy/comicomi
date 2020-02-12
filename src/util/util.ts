import {Maybe} from './type'
export const removeTail = (txt: Maybe<string>) => {
  if (txt) {
    txt.replace(/\n+$/g, '').replace(/\n+$/g, '')
    return txt
  }
}
