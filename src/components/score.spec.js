import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Score from './score';


test('test learn react link', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-one-button'))
  const score=screen.getByTestId('player-one-score')
  expect(score.innerHTML).toBe('2')
})
test('renders learn react link', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  const score=screen.getByTestId('player-two-score')
  expect(score.innerHTML).toBe('2')
})
test('renders learn react link', () => {
  render(<Score />)
  userEvent.click(screen.getByTestId('player-one-button'))
  userEvent.click(screen.getByTestId('player-two-button'))
  userEvent.click(screen.getByTestId('reset'))
  const score1=screen.getByTestId('player-one-score')
  const score2=screen.getByTestId('player-two-score')
  expect(score1.innerHTML).toBe('0')
  expect(score2.innerHTML).toBe('0')
})