// logOut.test.js
import { logOut } from "./logOut";

describe("logOut", () => {
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

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(removeItemMock).toHaveBeenCalledWith("name");
    expect(removeItemMock).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
  });
});
