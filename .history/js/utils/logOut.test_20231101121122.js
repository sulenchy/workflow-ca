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
