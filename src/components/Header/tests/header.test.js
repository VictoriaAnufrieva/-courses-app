import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  const mockedState = {
    user: {
      isAuth: true,
      name: "Test Name",
    },
    courses: [],
    authors: [],
  };
  const mockedStore = {
    getState: () => mockedState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };
  test("header should have logo", () => {
    render(
      <Provider store={mockedStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const logoImg = screen.getByAltText("logo");
    expect(logoImg).toBeInTheDocument();
  });

  test("header should have user name", () => {
    render(
      <Provider store={mockedStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const userName = screen.getByText('Test Name')
    expect(userName).toBeInTheDocument();
  });

});
