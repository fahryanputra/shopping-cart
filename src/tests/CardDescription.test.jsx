import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardDescription from "components/CardDescription";

describe("Card description component", () => {
  it("renders item name", () => {
    render(<CardDescription productName={"item name"} />);

    const productName = screen.getByText("item name");

    expect(productName).toBeInTheDocument();
  });

  it("renders item price", () => {
    render(<CardDescription productPrice={"2000"} />);

    const productPrice = screen.getByText("$2000");

    expect(productPrice).toBeInTheDocument();
  });
});
