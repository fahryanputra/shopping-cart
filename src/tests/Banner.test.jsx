import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Banner from "components/Banner";

describe("Banner component", () => {
  it("renders on screen", () => {
    render(<Banner imgUrl={"#"} />);

    const image = screen.getByAltText("bannerImage");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "#");
  });
});
