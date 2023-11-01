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
    const navigateTo = jest.fn(); // Mock the navigateTo function
    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorage.removeItem).toHaveBeenCalledWith("name");
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
  });


  afterEach(() => {
    localStorage.clear();
  });
});
