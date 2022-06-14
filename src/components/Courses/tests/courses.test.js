import "@testing-library/jest-dom/extend-expect";
import { screen, render, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Courses from "../Courses";
import { createBrowserHistory } from "history";


describe("Courses", () => {
  const mockedState = {
    user: {
      isAuth: true,
      name: "Test Name",
    },
    courses: [
      {
        id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
        title: "JavaScript",
        description: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum
                          has been the industry's standard dummy text ever since the
      1500s, when an unknown
                          printer took a galley of type and scrambled it to make a type
      specimen book. It has survived
                          not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                          nchange`,
        creationDate: "8/3/2021",
        duration: 160,
        authors: [
          "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
          "f762978b-61eb-4096-812b-ebde22838167",
        ],
      },
    ],
    authors: [
      {
        id: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
        name: "Vasiliy Dobkin",
      },
      {
        id: "f762978b-61eb-4096-812b-ebde22838167",
        name: "Nicolas Kim",
      },
      {
        id: "df32994e-b23d-497c-9e4d-84e4dc02882f",
        name: "Anna Sidorenko",
      },
      {
        id: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
        name: "Valentina Larina",
      },
    ],
  };
  const mockedStore = {
    getState: () => mockedState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };
  test("Courses should display amount of CourseCard equal length of courses array", () => {
    render(
      <Provider store={mockedStore}>
        <BrowserRouter>
          <Courses />
        </BrowserRouter>
      </Provider>
    );
    const coursesList = screen.getByTestId("coursesList");
    const childrenLength = coursesList.children.length;
    expect(childrenLength).toEqual(mockedState.courses.length);
  });

  test("Courses should display Empty container if courses array length is 0", () => {
    const mockedState = {
      user: {
        isAuth: true,
        name: "Test Name",
        role: 'admin'
      },
      courses: [],
      authors: [
        {
          id: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
          name: "Vasiliy Dobkin",
        },
        {
          id: "f762978b-61eb-4096-812b-ebde22838167",
          name: "Nicolas Kim",
        },
        {
          id: "df32994e-b23d-497c-9e4d-84e4dc02882f",
          name: "Anna Sidorenko",
        },
        {
          id: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
          name: "Valentina Larina",
        },
      ],
    };
    const mockedStore = {
      getState: () => mockedState,
      subscribe: jest.fn(),
      dispatch: jest.fn(),
    };
    render(
      <Provider store={mockedStore}>
        <BrowserRouter>
          <Courses />
        </BrowserRouter>
      </Provider>
    );
    const coursesList = screen.getByTestId("coursesList");
    const childrenLength = coursesList.children.length;
    expect(childrenLength).toEqual(mockedState.courses.length);
  });

  test("CourseForm should be showed after a click on a button 'Add new course'.", () => {
    const history = createBrowserHistory();

    render(
      <Provider store={mockedStore}>
        <BrowserRouter location={history.location} navigator={history}>
          <Courses />
        </BrowserRouter>
      </Provider>
    );
   
  });

});
