import React from 'react'
import { screen, render } from '@testing-library/react'
import DataCard from '../components/DataCard'

describe('DataCard component', () => {
  test('renders title and children', () => {
    const title = 'Test title'
    const children = <p>Test content</p>

    render(<DataCard title={title}>{children}</DataCard>)

    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()

    const contentElement = screen.getByText('Test content')
    expect(contentElement).toBeInTheDocument()
  })
})
