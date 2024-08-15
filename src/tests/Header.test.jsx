import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "components/Header";

describe("Header component", () => {
  it("renders on screen", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it("renders site logo", () => {
    render(<Header />);

    const image = screen.getByAltText("logo");

    expect(image).toBeInTheDocument();
  });

  it("renders site title", () => {
    render(<Header title={"Page Title"} />);

    const title = screen.getByText("Page Title");

    expect(title).toBeInTheDocument();
  });
});
