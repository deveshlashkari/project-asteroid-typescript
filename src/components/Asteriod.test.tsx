import React from 'react';
import { render, screen } from '@testing-library/react';
import Asteroid from './Asteriod';
import { MemoryRouter } from 'react-router-dom';

describe('Asteroid', () => {
  test('renders text box', () => {
    render( 
    <MemoryRouter>
      <Asteroid />
    </MemoryRouter>
    );
    const linkElement = screen.getAllByText(/Enter Asteroid ID/i);
    expect(linkElement).toHaveLength(2);
  });

  test('submit button is shown', ()=> {
    const { getByText } = render(
    <MemoryRouter>
        <Asteroid />
    </MemoryRouter>
    );
    const button = getByText("Submit");
    expect(button).toBeTruthy()
  });

  test('random asteroid button is shown', ()=> {
    const { getByText } = render(
    <MemoryRouter>
        <Asteroid />
    </MemoryRouter>
    );
    const button = getByText("Random Asteroid");
    expect(button).toBeTruthy()
  });

})
