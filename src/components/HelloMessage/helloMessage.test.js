import React, { Component } from "react";
import { render } from "@testing-library/react";

import { HelloMessage } from ".";
describe("HelloMessage tests", () => {
    it("should render given message", () => {
        const { getByText, debug } = render(<HelloMessage message="World"/>);
        getByText(/World/i);
        debug();
        // const onSuccess = jest.fn();
        // console.log(onSuccess);
    });
});
