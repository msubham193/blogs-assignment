import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Blog from '../components/Blog';

test('renders title and body', () => {
  const props = {
    title: 'Test Title',
    body: 'Test Body',
    id: 1,
    posts: [],
    setPosts: jest.fn(),
  };
  const { getByText } = render(<Blog {...props} />);
  const titleElement = getByText(/Test Title/i);
  const bodyElement = getByText(/Test Body/i);
  expect(titleElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});

test('calls setPosts when delete button is clicked', () => {
  const props = {
    title: 'Test Title',
    body: 'Test Body',
    id: 1,
    posts: [{ id: 1, title: 'Test Title', body: 'Test Body' }],
    setPosts: jest.fn(),
  };
  const { getByTestId } = render(<Blog {...props} />);
  const deleteButton = getByTestId('delete-button');
  fireEvent.click(deleteButton);
  expect(props.setPosts).toHaveBeenCalledTimes(1);
  expect(props.setPosts).toHaveBeenCalledWith([]);
});
