import { Config } from 'jest'

console.warn('hiiiii')

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setup.ts'],
}

export default config
