import React from 'react';
import { render } from "@testing-library/react";
import axiosMock from "axios"; 
import JobList from "./JobList";

describe("basic rendering", function () {
it("renders without crashing", function () {
    // this is a low-value test, but better than nothing
    render(<JobList />);
  });
});


afterEach(cleanup);