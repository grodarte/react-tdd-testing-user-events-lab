import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App/>)

  const name = screen.getByLabelText(/your name/i)
  const email = screen.getByLabelText(/your email/i)

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App/>)
  expect(screen.getAllByRole("checkbox").length).toBe(3)
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App/>)
  expect(screen.getByText(/coding/i)).not.toBeChecked()
  expect(screen.getByText(/exercising/i)).not.toBeChecked()
  expect(screen.getByText(/eating/i)).not.toBeChecked()

});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App/>)

  const nameField = screen.getByLabelText(/name/i)
  userEvent.type(nameField, "Gabrielle")

  const emailField = screen.getByLabelText(/email/i)
  userEvent.type(emailField, "myemail@email.com")

  expect(nameField).toHaveValue("Gabrielle")
  expect(emailField).toHaveValue("myemail@email.com")

});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App/>)
  const checkCoding = screen.getByRole("checkbox", { name: /coding/i})
  const checkExercising = screen.getByRole("checkbox", { name: /exercising/i})
  const checkEating = screen.getByRole("checkbox", { name: /eating/i})

  userEvent.click(checkCoding)
  userEvent.click(checkExercising)
  userEvent.click(checkEating)

  expect(checkCoding).toBeChecked()
  expect(checkExercising).toBeChecked()
  expect(checkEating).toBeChecked()

  userEvent.click(checkCoding)
  userEvent.click(checkExercising)
  userEvent.click(checkEating)

  expect(checkCoding).not.toBeChecked()
  expect(checkExercising).not.toBeChecked()
  expect(checkEating).not.toBeChecked()

});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App/>)

  const submit = screen.getByRole("button", { name: /submit/i })

  userEvent.click(submit)

  expect(screen.getByText(/thank you for joining my newsletter!/i)).toBeInTheDocument()
});
