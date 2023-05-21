import { render, screen } from '@testing-library/react'
import { BookingForm } from './BookingForm'
describe('BookingForm', () => {
  it('should display booking form details', () => {
    render(<BookingForm />)

    expect(screen.getByText('Choose date')).toBeInTheDocument()
    expect(screen.getByText('Choose time')).toBeInTheDocument()
    expect(screen.getByText('Number of guests')).toBeInTheDocument()
    expect(screen.getByText('Occasion')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Make your reservation/i })
    ).toBeInTheDocument()
  })
})
