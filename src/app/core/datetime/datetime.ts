import { DateTime as LuxonDateTime } from 'luxon'

export class DateTime {
  private luxonDateTime: LuxonDateTime

  private constructor(date: string, locale?: string) {
    this.luxonDateTime = LuxonDateTime.fromISO(date as string, {
      locale,
    })
  }

  format(format: string, options?: { locale: string }): string {
    return this.luxonDateTime.toFormat(format, options)
  }

  toMillis() {
    return this.luxonDateTime.toMillis()
  }

  /**
   *
   * @returns ISO string in UTC
   */
  toISO(): string {
    return this.luxonDateTime.toUTC().toISO() as string
  }

  static fromNow(options?: { plusSeconds?: number }): DateTime {
    const { plusSeconds } = options ?? { plusSeconds: 0 }
    return new DateTime(LuxonDateTime.now().plus({ second: plusSeconds }).toISO() as string)
  }

  static fromISO(iso: string): DateTime {
    return new DateTime(iso)
  }

  static fromDate(date: Date): DateTime {
    return new DateTime(date.toISOString())
  }
}
