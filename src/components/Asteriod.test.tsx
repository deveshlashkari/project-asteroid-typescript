import React from 'react';
import { render, screen } from '@testing-library/react';
import Asteroid from './Asteriod';
import { MemoryRouter } from 'react-router-dom';

describe('Asteroid', () => {
  test('renders learn react link', () => {
    render( 
    <MemoryRouter>
      <Asteroid />
    </MemoryRouter>
    );
    const linkElement = screen.getAllByText(/Enter Asteroid ID/i);
    expect(linkElement).toHaveLength(2);
  });
})
