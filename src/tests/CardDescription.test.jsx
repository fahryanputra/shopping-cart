import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardDescription from "components/pages/shop/CardDescription";
import product from "./product";

describe("Card description component", () => {
  it("renders item name", () => {
    render(<CardDescription product={product} />);

    const productName = screen.getByText("clothes");

    expect(productName).toBeInTheDocument();
  });

  it("renders item price", () => {
    render(<CardDescription product={product} />);

    const productPrice = screen.getByText("$1");

    expect(productPrice).toBeInTheDocument();
  });

  it("renders cart button", () => {
    render(<CardDescription product={product} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
