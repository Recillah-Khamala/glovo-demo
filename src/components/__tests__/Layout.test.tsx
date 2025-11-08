import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Layout Component', () => {
  it('renders the Glovo header', () => {
    renderWithRouter(<Layout>Test Content</Layout>)
    expect(screen.getByText('Glovo')).toBeInTheDocument()
    expect(screen.getByText('Last-Mile Delivery')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithRouter(<Layout>Test Content</Layout>)
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('New Delivery')).toBeInTheDocument()
  })

  it('renders children content', () => {
    renderWithRouter(<Layout>Test Content</Layout>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders footer', () => {
    renderWithRouter(<Layout>Test Content</Layout>)
    expect(
      screen.getByText(/© 2024 Glovo - Last-Mile Delivery Service/)
    ).toBeInTheDocument()
  })
})

