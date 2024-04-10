import { Injectable } from '@angular/core'

export type EventHandler = (data: unknown) => void

@Injectable({
  providedIn: 'root',
})
export class EventEmitter {
  private eventListeners: Record<string, EventHandler[]> = {}

  subscribe(eventName: string, handler: EventHandler): void {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = []
    }
    this.eventListeners[eventName].push(handler)
  }

  unsubscribe(eventName: string, handler: EventHandler): void {
    if (!this.eventListeners[eventName]) {
      return
    }
    this.eventListeners[eventName] = this.eventListeners[eventName].filter(h => h !== handler)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch(eventName: string, data: any): void {
    const handlers = this.eventListeners[eventName]
    if (!handlers) {
      return
    }
    handlers.forEach(handler => handler(data))
  }
}
