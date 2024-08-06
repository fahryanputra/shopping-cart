import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardDescription from "components/CardDescription";

describe("Card description component", () => {
  it("renders item name", () => {
    render(<CardDescription itemName={"item name"} />);

    const itemName = screen.getByText("item name");

    expect(itemName).toBeInTheDocument();
  });

  it("renders item price", () => {
    render(<CardDescription itemPrice={"2000"} />);

    const itemPrice = screen.getByText("2000");

    expect(itemPrice).toBeInTheDocument();
  });
});
