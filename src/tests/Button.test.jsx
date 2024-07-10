import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "components/Button";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  it("renders on screen", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders button's name on screen", () => {
    render(<Button name={"Name"} />);

    const name = screen.getByRole("button", { name: "Name" }).textContent;

    expect(name).toMatch("Name");
  });

  it("calls the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
