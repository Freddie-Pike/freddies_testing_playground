import React from "react";
import { render, screen } from "@testing-library/react";
import GreeterUI from "../GreeterUI";

describe("GreeterUI", () => {
  it("renders greeting text.", () => {
    render(<GreeterUI person={"Fred"} />);
    const greeting = screen.queryByText(/hello, fred/i);

    expect(greeting).toBeInTheDocument();
  });
});
