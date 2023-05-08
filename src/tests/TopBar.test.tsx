import React from 'react'
import { screen, render } from '@testing-library/react'
import TopBar from '../components/TopBar'

describe('TopBar component', () => {
  test('renders title', () => {
    render(<TopBar />)
    const titleElement = screen.getByText('Frontend React Test')
    expect(titleElement).toBeInTheDocument()
  })
})
