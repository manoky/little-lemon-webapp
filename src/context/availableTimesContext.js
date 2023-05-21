import { createContext, useContext, useReducer } from 'react'

const AvailableTimesContext = createContext(null)
export const INIT_STATE = {
  availableTimes: [],
}

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'INIT_TIMES':
      return {
        ...state,
        availableTimes: action.payload.map((time) => ({ time, booked: false })),
      }

    case 'UPDATE_TIMES':
      return {
        ...state,
        availableTimes: action.payload.map((time) => ({ time, booked: false })),
      }

    case 'MARK_BOOKED':
      return {
        ...state,
        availableTimes: state.availableTimes.map((t) =>
          t.time === action.payload ? { ...t, booked: true } : t
        ),
      }
    default:
      return state
  }
}
export const AvailableTimesProvider = ({ children }) => {
  const [{ availableTimes, date }, dispatch] = useReducer(reducer, INIT_STATE)

  return (
    <AvailableTimesContext.Provider value={{ dispatch, availableTimes, date }}>
      {children}
    </AvailableTimesContext.Provider>
  )
}

export const useAvailableTimes = () => useContext(AvailableTimesContext)
