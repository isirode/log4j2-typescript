// TODO : make a lib for this kind of stuff
export function isNullOrUndefinedOrEmpty(value: string | null | undefined) {
  return value === null || value === undefined || value === '';
}

export function isNullOrEmpty(value: string | null) {
  return value === null || value === '';
}
