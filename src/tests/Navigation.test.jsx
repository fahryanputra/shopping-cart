import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "components/Navigation";

describe("Navigation component", () => {
  it("renders search bar", () => {
    render(<Navigation />);

    const textInput = screen.getByLabelText("search");

    expect(textInput).toBeInTheDocument();
  });

  it("renders shop button", () => {
    render(<Navigation />);

    const button = screen.getByRole("button", { name: "Shop" });

    expect(button).toBeInTheDocument();
  });

  it("renders cart button", () => {
    render(<Navigation />);

    const button = screen.getByRole("button", { name: "Cart" });

    expect(button).toBeInTheDocument();
  });
});
