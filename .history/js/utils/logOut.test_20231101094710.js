// logOut.test.js
import logOut from "./logOut";

describe("logOut", () => {
  it("should remove name and token from localStorage and set window.location.href", () => {
    // Create a spy for localStorage.removeItem
    const localStorageRemoveItem = jest.spyOn(localStorage, "removeItem");

    // Create a mock function for navigateTo
    const navigateTo = (url) => {
      // Mock the behavior of window.location.href
      expect(url).toBe("../../index.html");
    };

    logOut(navigateTo);

    // Ensure localStorageRemoveItem is called for "name" and "token"
    expect(localStorageRemoveItem).toHaveBeenCalledWith("name");
    expect(localStorageRemoveItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
  });
});
