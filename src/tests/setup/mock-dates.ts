import { DateTime, Settings } from 'luxon'

Settings.defaultZone = 'UTC'
const expectedNow = DateTime.fromISO('2024-03-22T12:34:56.000Z')
Settings.now = () => expectedNow.toMillis()
