
import { render, screen } from "@testing-library/react";
import App from './App.js'
test("tests the header", ()=>{
  render(<App/>);
  const headerEl = screen.getByText(/Transaction Manager/i);
  expect(headerEl).toBeInTheDocument;
})