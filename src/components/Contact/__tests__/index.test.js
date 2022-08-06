import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../../Contact/index';

afterEach(cleanup);

describe('Contact Component', () => {
  it('renders', () => {
    render(<ContactForm/>);
  })
})

describe('Contact me text', () => {
  it('inserts contact me into h1', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('contact-me')).toHaveTextContent('Contact me');
  });
})

describe('Locate button', () => {
  it('to match text content submit', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('submit-button')).toHaveTextContent('Submit');
  })
})