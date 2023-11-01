// logOut.test.js
import logOut from "./logOut.js";
import "jest-localstorage-mock";

describe("logOut", () => {
  it("should remove name and token from localStorage and navigate to the home page", () => {
    // Mock the navigateTo function
    const navigateTo = jest.fn();

    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorage.removeItem).toHaveBeenCalledWith("name");
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
  });
});

describe("Sample Test with jest.fn()", () => {
  it("should pass", () => {
    // Create a mock function for fetchData
    const fetchDataMock = jest.fn();

    // Mock fetchData to return a value when called
    fetchDataMock.mockReturnValue("Mocked Data");

    // Call the function that uses fetchData
    const result = fetchDataMock("example-url");

    // Ensure that fetchDataMock was called with the expected arguments
    expect(fetchDataMock).toHaveBeenCalledWith("example-url");

    // Ensure that the result matches the value we mocked
    expect(result).toBe("Mocked Data");
  });
});
