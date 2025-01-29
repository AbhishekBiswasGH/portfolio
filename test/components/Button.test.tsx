// libraries
import React from "react";

// utils
// import { expect, test, vi } from "vitest";
// import {
//   render,
//   screen,
//   fireEvent
// } from "@testing-library/react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// components
import Button from "@components/Button";

test("renders Button with text", () => {
  render(<Button>Click Me</Button>);
  const button = screen.getByText(/click me/i);
  expect(button).toBeInTheDocument();
});

// test("fires onClick event when clicked", async () => {
//   const onClick = vi.fn();
//   render(
//     <Button onClick={onClick}>Click Me</Button>
//   );

//   const button = screen.getByText(/click me/i);
//   fireEvent.click(button);

//   expect(onClick).toHaveBeenCalledTimes(1);
// });
