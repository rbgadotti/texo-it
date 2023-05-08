import React from 'react'
import { render, act, screen } from '@testing-library/react'
import MultipleWinners from '../components/MultipleWinners'

const mockMultipleWinners = {
  years: [
    {
      year: 2022,
      winnerCount: 3
    },
    {
      year: 2021,
      winnerCount: 2
    },
    {
      year: 2020,
      winnerCount: 4
    }
  ]
}

describe('MultipleWinners component', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockMultipleWinners),
    });
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('renders data', async () => {
    await act(async () => {
      render(<MultipleWinners />)
      expect(screen.getByText('2022')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
      expect(screen.getByText('2021')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('2020')).toBeInTheDocument()
      expect(screen.getByText('4')).toBeInTheDocument()
    })
  })

  test('renders only showCount items', async () => {
    await act(async () => {
      render(<MultipleWinners showCount={2} />)
      expect(screen.getByText('2022')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
      expect(screen.getByText('2021')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.queryByText('2020')).toBeNull()
    })
  })
})
