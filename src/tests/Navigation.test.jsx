import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "components/Navigation";

describe("Navigation component", () => {
  it("renders search bar", () => {
    render(<Navigation />);

    const textInput = screen.getByLabelText("search");

    expect(textInput).toBeInTheDocument();
  });

  it("renders shop link", () => {
    render(<Navigation />);

    const shopText = screen.getByText("Shop");

    expect(shopText).toBeInTheDocument();
  });

  it("renders cart link", () => {
    render(<Navigation />);

    const cartText = screen.getByText("Cart");

    expect(cartText).toBeInTheDocument();
  });
});
