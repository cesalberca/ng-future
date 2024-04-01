export interface Updatable<Update, Return = void> {
  update(update: Update): Promise<Return>
}
