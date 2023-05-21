import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AvailableTimesProvider } from './context'

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <AvailableTimesProvider>
        <App />
      </AvailableTimesProvider>
    </BrowserRouter>
  )
  const homeText = screen.getByText(
    /We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i
  )
  expect(homeText).toBeInTheDocument()
})
