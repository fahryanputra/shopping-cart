import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "components/Navigation";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Navigation component", () => {
  it("renders shop link", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </MemoryRouter>
    );

    const shopText = screen.getByText("Shop");

    expect(shopText).toBeInTheDocument();
    expect(shopText.href).toContain("/");
  });

  it("renders cart link", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </MemoryRouter>
    );

    const cartText = screen.getByText("Cart");

    expect(cartText).toBeInTheDocument();
    expect(cartText.href).toContain("/cart");
  });
});
