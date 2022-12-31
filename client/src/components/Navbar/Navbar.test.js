import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
  it("Debe tener un link con Pokedex", () => {
    screen.logTestingPlaygroundURL();
    const element = screen.getByText(/pokedex/i);
    expect(element.innerHTML).toBe("Pokedex");
  });

  it("Debe tener un link con Create", () => {
    const element = screen.getByText(/create/i);
    expect(element.innerHTML).toBe("Create");
  });
  it("Debe tener un link con Create", () => {
    const element = screen.getByText("My team");
    expect(element.innerHTML).toBe("My team");
  });
});
