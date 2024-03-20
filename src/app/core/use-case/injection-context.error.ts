export class InjectionContextError extends Error {
  constructor() {
    super('Could not get injection context')
  }
}
