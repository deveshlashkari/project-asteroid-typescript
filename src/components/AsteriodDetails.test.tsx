import React from 'react';
import { render, screen } from '@testing-library/react';
import AsteroidDetails from './AsteroidDetails';
import { MemoryRouter } from 'react-router-dom';

describe('Random Asteroid', () => {
  test('renders name heading', () => {
      render(
      <MemoryRouter>
          <AsteroidDetails />
      </MemoryRouter>
      );
      const linkElement = screen.getAllByText(/Name/i);
      expect(linkElement).toHaveLength(1);
  });

  test('renders NASA JPL URL heading', () => {
    render(
    <MemoryRouter>
        <AsteroidDetails />
    </MemoryRouter>
    );
    const linkElement = screen.getAllByText(/NASA JPL URL/i);
    expect(linkElement).toHaveLength(1);
  });

  test('renders Is Potentially Hazardous heading', () => {
    render(
    <MemoryRouter>
        <AsteroidDetails />
    </MemoryRouter>
    );
    const linkElement = screen.getAllByText(/Is Potentially Hazardous/i);
    expect(linkElement).toHaveLength(1);
});

})
