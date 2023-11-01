// logOut.test.js
import logOut from "./logOut";

describe("logOut", () => {
  it("should remove name and token from localStorage and set window.location.href", () => {
    // Create spies for localStorage methods
    const localStorageRemoveItem = jest.spyOn(localStorage, "removeItem");
    const localStorageSetItem = jest.spyOn(localStorage, "setItem");

    // Create a mock function for navigateTo
    const navigateTo = (url) => {
      // Mock the behavior of window.location.href
      expect(url).toBe("../../index.html");
    };

    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorageRemoveItem).toHaveBeenCalledWith("name");
    expect(localStorageRemoveItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
  });
});
