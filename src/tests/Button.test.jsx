import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "components/Button";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  it("calls the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
