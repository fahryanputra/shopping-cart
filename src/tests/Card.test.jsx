import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "components/Card";

describe("Card component", () => {
  it("renders on screen", () => {
    render(<Card imgUrl={"#"} />);

    const image = screen.getByAltText("cardImage");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "#");
  });
});
