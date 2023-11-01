// logOut.test.js
import logOut from "./logOut.js";

describe("logOut", () => {
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };
  });

  it("should remove name and token from localStorage and navigate to the home page", () => {
    // Mock the localStorage.removeItem function
     const removeItemMock = jest.spyOn(localStorage, "removeItem");

     // Log information about the spy
     console.log("Spy has been called:", removeItemMock.mock.calls.length, "times");
     console.log("Spy calls:", removeItemMock.mock.calls);

    // Mock the navigateTo function
    const navigateTo = jest.fn();

    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(removeItemMock).toHaveBeenCalledWith("name");
    expect(removeItemMock).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
  });

  afterEach(() => {
    localStorage.clear();
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
