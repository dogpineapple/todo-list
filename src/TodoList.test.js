import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('input changes when value of input changes', () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  const taskInput = getByLabelText("Create task");
  fireEvent.change(taskInput, { target: { value: "wooo" } });

  expect(taskInput.value).toEqual("wooo");
});

it('submits correctly with task', () => {
  const { getByLabelText, queryByText, getByText } = render(<TodoList />);
  const taskInput = getByLabelText("Create task");
  const submitBtn = getByText("Create");
  fireEvent.change(taskInput, { target: { value: "yes" } });
  fireEvent.click(submitBtn);

  expect(queryByText("yes")).toBeInTheDocument();
});

it('adds multiple tasks', () => {
  const { getByLabelText, queryByText, getByText } = render(<TodoList />);
  const taskInput = getByLabelText("Create task");
  const submitBtn = getByText("Create");
  fireEvent.change(taskInput, { target: { value: "ok" } });
  fireEvent.click(submitBtn);
  fireEvent.change(taskInput, { target: { value: "yes" } });
  fireEvent.click(submitBtn);
  fireEvent.change(taskInput, { target: { value: "yup" } });
  fireEvent.click(submitBtn);

  expect(queryByText("yes")).toBeInTheDocument();
  expect(queryByText("ok")).toBeInTheDocument();
  expect(queryByText("yup")).toBeInTheDocument();
});

it('deletes a task', () => {
  const { getByLabelText, queryByText, getByText } = render(<TodoList />);
  const taskInput = getByLabelText("Create task");
  const submitBtn = getByText("Create");

  fireEvent.change(taskInput, { target: { value: "wheat" } });
  fireEvent.click(submitBtn);

  expect(queryByText("wheat")).toBeInTheDocument();

  const deleteBtn = getByText("X");

  fireEvent.click(deleteBtn);
  expect(queryByText("wheat")).not.toBeInTheDocument();
})