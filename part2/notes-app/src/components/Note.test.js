import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Note from "./Note";
import userEvent from "@testing-library/user-event";

test("renders content", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const { container } = render(<Note note={note} />);
  // screen.debug();

  const div = container.querySelector(".note");
  expect(div).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );
});
// test("clicking the button calls event handler once", async () => {
//   const note = {
//     content: "Component testing is done with react-testing-library",
//     important: true,
//   };

//   const mockHandler = jest.fn();

//   render(<Note note={note} updateNote={mockHandler} />);

//   const user = userEvent.setup();
//   const button = screen.getByText("change true");
//   await user.click(button);

//   expect(mockHandler.mock.calls).toHaveLength(1);
// });

//   const element = screen.getByText('Component testing is done with react-testing-library')
//   expect(element).toBeDefined()
// })
