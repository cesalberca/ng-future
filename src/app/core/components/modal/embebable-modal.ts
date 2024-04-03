export interface EmbedableDialog<T> {
  data: T
  close: () => void
}
