import React from "react";
import { render } from "@testing-library/react";
import ViewEditToggle from ".";


describe("Tests ViewEditToggle", () => {


    it('should test ViewEditToggle', () => {
        const { getByText } = render(<ViewEditToggle/>);
        getByText('ViewEditToggle');
    });

    it('should test InputText', () => {
        const { getByRole } = render(<ViewEditToggle toggleStatus={true} onToggle={()=>{}}/>);
        getByRole("input", { name: "Click on the edit button to start editing" });
    });


})
