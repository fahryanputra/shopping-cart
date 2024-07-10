import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "components/Header";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
  it("renders on screen", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it("renders site logo", () => {
    render(<Header logoUrl={"#"} />);

    const image = screen.getByAltText("logo");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "#");
  });

  it("renders site title", () => {
    render(<Header title={"Page Title"} />);

    const title = screen.getByText("Page Title");

    expect(title).toBeInTheDocument();
  });

  it("renders search bar", () => {
    render(<Header />);

    const textInput = screen.getByLabelText("search");

    expect(textInput).toBeInTheDocument();
  });

  it("renders shop button", () => {
    render(<Header />);

    const button = screen.getByRole("button", { name: "Shop" });

    expect(button).toBeInTheDocument();
  });

  it("renders cart button", () => {
    render(<Header />);

    const button = screen.getByRole("button", { name: "Cart" });

    expect(button).toBeInTheDocument();
  });
});
