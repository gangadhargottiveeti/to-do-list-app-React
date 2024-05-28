import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe('Checks the Header Component', () => {

    it('should render the heading correctly in the page', () => {
        render(<Header />)
        
        const headingValue = screen.getByRole('heading',{level:1, name : "TODO App"});    //getByRole('heading, {level : 2})
        expect(headingValue).toBeInTheDocument();
    })
})