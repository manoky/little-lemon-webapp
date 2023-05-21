import { updateTimes, initializeTimes } from './Main'

describe('Times Date', () => {
  it('return intial times based on dates', () => {
    expect(initializeTimes(new Date())).toEqual([
      '17:00',
      '17:30',
      '18:30',
      '19:30',
      '20:00',
      '21:30',
      '22:00',
    ])
  })

  it('updates times date on date change', () => {
    expect(updateTimes('2023-05-23')).toEqual([
      '17:00',
      '17:30',
      '19:00',
      '19:30',
      '21:30',
      '22:00',
      '23:30',
    ])
  })
})
