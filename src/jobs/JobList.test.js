import React from 'react';
import { getByText, render, waitFor } from "@testing-library/react";
import { screen } from '@testing-library/dom';


// import axiosMock from "axios";
// import "jest-dom/extend-expect";

import JobList from "./JobList";

describe("basic rendering", function () {
  it("renders without crashing", function () {
    render(<JobList />);
  });
});

describe("AJAX requests function", function () {
  it("retrieves and displays all jobs on mount", async () => {
    jest.fn().mockResolvedValueOnce({
      jobs: [
        {
          "id": 1,
          "title": "Test, Job",
          "salary": 50000,
          "equity": "0.123",
          "companyHandle": "test-company",
          "companyName": "Test-Company"
        }
      ]
    });

    const { container } = render(<JobList />);
    expect(container.querySelector('.spinner-border')).toBeInTheDocument();

    // const resolvedJobList = await waitFor(() => screen.getByText(".JobList"));
    const resolvedJobList = await screen.findAllByText("Multimedia programmer");

    expect(resolvedJobList).toHaveTextContent("Multimedia programmer");



  });
});

//test getting all jobs (display on page)

//test getting jobs via search

// it("fetches and displays data", async () => {
//     // We'll be explicit about what data Axios is to return when `get` is called.
//     axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });

//     // Let's render our Fetch component, passing it the url prop and destructuring
//     // the `getByTestId` function so we can find individual elements.
//     const url = "/greeting";
//     const { getByTestId } = render(<Fetch url={url} />);

//     // On first render, we expect the "loading" span to be displayed
//     expect(getByTestId("loading")).toHaveTextContent("Loading data...");

//     // Because the useAxios call (useEffect) happens after initial render
//     // We need to handle the async nature of an AJAX call by waiting for the
//     // element to be rendered.
//     const resolvedSpan = await waitForElement(() => getByTestId("resolved"));

//     // Now with the resolvedSpan in hand, we can ensure it has the correct content
//     expect(resolvedSpan).toHaveTextContent("hello there");
//     // Let's also make sure our Axios mock was called the way we expect
//     expect(axiosMock.get).toHaveBeenCalledTimes(1);
//     expect(axiosMock.get).toHaveBeenCalledWith(url);
// });