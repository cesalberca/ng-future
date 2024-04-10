import { DateTime } from './datetime'

describe('DateTime', () => {
  it.each([
    ['2020-01-01', 'y L d', { locale: 'es' }, '2020 1 1'],
    ['2020-01-01', 'y L d', { locale: 'en' }, '2020 1 1'],
    ['2020-01-01', 'y LLL d', { locale: 'es' }, '2020 ene 1'],
    ['2020-01-01', 'y LLL d', { locale: 'en' }, '2020 Jan 1'],
  ])('should format date %s with format %s and options %s', (date, format, options, expected) => {
    const dateTime = DateTime.fromISO(date)

    const result = dateTime.format(format, options)

    expect(result).toBe(expected)
  })

  it('should return the date as ISO string', () => {
    const date = new Date()
    const dateTime = DateTime.fromDate(date)

    const result = dateTime.toISO()

    expect(result).toBe(date.toISOString())
  })

  it('should return from now', () => {
    const actual = DateTime.fromNow().toISO()

    expect(actual).toBe('2023-03-31T12:34:56.000Z')
  })

  it('should return from now date plus seconds', () => {
    const actual = DateTime.fromNow({ plusSeconds: 30 }).toISO()

    expect(actual).toBe('2023-03-31T12:35:26.000Z')
  })
})
