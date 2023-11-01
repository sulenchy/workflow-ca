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
    // Create a mock for the navigateTo function
    const navigateTo = jest.fn();

    // Create a mock for localStorage.removeItem
    const removeItemMock = jest.fn();

    // Mock localStorage methods
    global.localStorage = {
      removeItem: removeItemMock,
    };

    // Call the logOut function with the mock navigateTo
    logOut(navigateTo);
    console.log("logOut function called");

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(removeItemMock).toHaveBeenCalledWith("name");
    console.log("removeItemMock called for 'name'");
    expect(removeItemMock).toHaveBeenCalledWith("token");
    console.log("removeItemMock called for 'token'");

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
    console.log("navigateTo called with '../../index.html'");

    // Log the success
    console.log("Test finished successfully!");
  });
  
});
