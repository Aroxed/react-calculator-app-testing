import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculator from '../Calculator'

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />)
  })

  it('renders calculator with initial display of 0', () => {
    expect(screen.getByTestId('display')).toHaveTextContent('0')
  })

  it('displays numbers when clicked', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    expect(screen.getByTestId('display')).toHaveTextContent('5')
  })

  it('concatenates multiple digits', () => {
    fireEvent.click(screen.getByTestId('digit-1'))
    fireEvent.click(screen.getByTestId('digit-2'))
    fireEvent.click(screen.getByTestId('digit-3'))
    expect(screen.getByTestId('display')).toHaveTextContent('123')
  })

  it('performs addition correctly', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('operator-add'))
    fireEvent.click(screen.getByTestId('digit-3'))
    fireEvent.click(screen.getByTestId('equals'))
    expect(screen.getByTestId('display')).toHaveTextContent('8')
  })

  it('performs subtraction correctly', () => {
    fireEvent.click(screen.getByTestId('digit-8'))
    fireEvent.click(screen.getByTestId('operator-subtract'))
    fireEvent.click(screen.getByTestId('digit-3'))
    fireEvent.click(screen.getByTestId('equals'))
    expect(screen.getByTestId('display')).toHaveTextContent('5')
  })

  it('performs multiplication correctly', () => {
    fireEvent.click(screen.getByTestId('digit-4'))
    fireEvent.click(screen.getByTestId('operator-multiply'))
    fireEvent.click(screen.getByTestId('digit-3'))
    fireEvent.click(screen.getByTestId('equals'))
    expect(screen.getByTestId('display')).toHaveTextContent('12')
  })

  it('performs division correctly', () => {
    fireEvent.click(screen.getByTestId('digit-9'))
    fireEvent.click(screen.getByTestId('operator-divide'))
    fireEvent.click(screen.getByTestId('digit-3'))
    fireEvent.click(screen.getByTestId('equals'))
    expect(screen.getByTestId('display')).toHaveTextContent('3')
  })

  it('handles decimal point correctly', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('decimal'))
    fireEvent.click(screen.getByTestId('digit-2'))
    expect(screen.getByTestId('display')).toHaveTextContent('5.2')
  })

  it('clears display when C is clicked', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('clear'))
    expect(screen.getByTestId('display')).toHaveTextContent('0')
  })

  it('handles multiple operations in sequence', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('operator-add'))
    fireEvent.click(screen.getByTestId('digit-3'))
    fireEvent.click(screen.getByTestId('operator-multiply'))
    fireEvent.click(screen.getByTestId('digit-2'))
    fireEvent.click(screen.getByTestId('equals'))
    expect(screen.getByTestId('display')).toHaveTextContent('16')
  })

  it('equals button does nothing when no operation is pending', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('equals'))
    expect(screen.getByTestId('display')).toHaveTextContent('5')
  })

  it('equals button resets calculator state after calculation', () => {
    fireEvent.click(screen.getByTestId('digit-5'))
    fireEvent.click(screen.getByTestId('operator-add'))
    fireEvent.click(screen.getByTestId('digit-3'))
    fireEvent.click(screen.getByTestId('equals'))
    fireEvent.click(screen.getByTestId('digit-2'))
    expect(screen.getByTestId('display')).toHaveTextContent('2')
  })
}) 
