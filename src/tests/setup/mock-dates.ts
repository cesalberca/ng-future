import { DateTime, Settings } from 'luxon'

Settings.defaultZone = 'UTC'
const expectedNow = DateTime.fromISO('2023-03-31T12:34:56.000Z')
Settings.now = () => expectedNow.toMillis()
