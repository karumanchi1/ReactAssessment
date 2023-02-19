import { render, screen } from "@testing-library/react"
import Header from "./Header"

test('test the title', ()=>{
 render(<Header/>)

 const title = screen.getByText("Transaction Manager", {exact:false})
 expect(title).toBeInTheDocument;
})