import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import React from "react";
import Login from "./Login";

describe("Test the Login Component", () => {
  test("To Check whether Login Component loads", () => {
    render(<Login />);
    const loginComp = screen.getByTestId("Login");
    expect(loginComp).toBeTruthy();
  });
});

test("To check Email Input Field", () => {
  render(<Login />);
  const inputField = screen.getByTestId("emailField");
  expect(fireEvent.change(inputField, { target: { value: "123" } })).toBe(true);
});

test("To check Password Input Field", () => {
  render(<Login />);
  const inputField = screen.getByTestId("passwdField");
  expect(fireEvent.change(inputField, { target: { value: "123" } })).toBe(true);
});

test("Finds Login Component", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test("Login Button", () => {
  render(<Login />);
  const button = screen.getByTestId("pressMeButton");
  expect(fireEvent.click(button)).toBe(true);
});

test("View functionality error handling", async () => {
  axios.post = jest.fn().mockImplementationOnce(() => Promise.reject());
  const alertMock = jest.spyOn(window, "alert").mockImplementation();
  render(<Login />);
  const button = screen.getByTestId("pressMeButton");
  expect(fireEvent.click(button)).toBe(true);
  expect(alertMock).toBeCalledTimes(0);
});
