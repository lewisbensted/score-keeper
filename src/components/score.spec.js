import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Score from './score';


test('Check player one score button', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-one-button'))
  expect(screen.getByTestId('player-one-score').innerHTML).toBe('1')
  expect(screen.getByTestId('player-two-score').innerHTML).toBe('0')
})
test('Check player two score button', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-two-button'))
  expect(screen.getByTestId('player-one-score').innerHTML).toBe('0')
  expect(screen.getByTestId('player-two-score').innerHTML).toBe('1')
})
test('Check reset button', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('reset'))
  expect(screen.getByTestId('player-one-score').innerHTML).toBe('0')
  expect(screen.getByTestId('player-two-score').innerHTML).toBe('0')
})
test('Check change of max score resets scores', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.selectOptions(screen.getByTestId('playto'), '8')
  expect(screen.getByTestId('player-one-score').innerHTML).toBe('0')
  expect(screen.getByTestId('player-two-score').innerHTML).toBe('0')
})
test('Check player wins by two points', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  expect(screen.getByTestId('player-one-button')).toBeDisabled()
  expect(screen.getByTestId('player-two-button')).toBeDisabled()
  expect(screen.getByTestId('message').innerHTML).toBe('Player Two Wins!')
})