import { EventEmitter } from './event-emitter'

describe('EventEmitter', () => {
  it('should dispatch', () => {
    const { eventEmitter } = setup()
    const mock = jest.fn()

    eventEmitter.subscribe('foo', mock)
    eventEmitter.dispatch('foo', 1)

    expect(mock).toHaveBeenCalledWith(1)
  })

  it('should not dispatch if event is not registered', () => {
    const { eventEmitter } = setup()
    const mock = jest.fn()

    eventEmitter.dispatch('foo', 1)

    expect(mock).not.toHaveBeenCalled()
  })

  it('should unsubscribe', () => {
    const { eventEmitter } = setup()
    const mock = jest.fn()

    eventEmitter.subscribe('foo', mock)
    eventEmitter.dispatch('foo', 1)
    eventEmitter.unsubscribe('foo', mock)
    eventEmitter.dispatch('foo', 2)

    expect(mock).toBeCalledTimes(1)
  })

  it("should not unsubscribe if event doesn't exist", () => {
    const { eventEmitter } = setup()
    const mock = jest.fn()

    eventEmitter.unsubscribe('foo', mock)

    expect(mock).not.toHaveBeenCalled()
  })

  it('should support multiple events', () => {
    const { eventEmitter } = setup()
    const mockA = jest.fn()
    const mockB = jest.fn()

    eventEmitter.subscribe('foo', mockA)
    eventEmitter.subscribe('bar', mockB)
    eventEmitter.dispatch('foo', 1)
    eventEmitter.dispatch('bar', 2)

    expect(mockA).toHaveBeenCalledWith(1)
    expect(mockB).toHaveBeenCalledWith(2)
  })
})

function setup() {
  const eventEmitter = new EventEmitter()

  return {
    eventEmitter,
  }
}
