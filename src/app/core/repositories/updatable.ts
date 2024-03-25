export interface Updatable<Update> {
  update(update: Update): Promise<void>
}
