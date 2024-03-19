export interface Creatable<Create> {
  save(create: Create): Promise<void>
}
