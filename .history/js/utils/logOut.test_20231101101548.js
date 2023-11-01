import logOut from "./logOut.js";
import * as apiModule from "../api/api.js";
import * as localStorageModule from "../localStorage/localStorage.js";

describe("logOut", () => {
  it("should remove name and token from localStorage and set window.location.href", () => {
    // Mock localStorage methods
    const localStorageMock = {
      removeItem: jest.fn(),
    };
    global.localStorage = localStorageMock;

    // Create a mock function for navigateTo
    const navigateTo = (url) => {
      // Mock the behavior of window.location.href
      expect(url).toBe("../../index.html");
    };

    // Mock the behavior of external modules
    jest.spyOn(apiModule, "apiCall").mockReturnValue("mocked-response");
    jest.spyOn(localStorageModule, "setLocalStorage");

    // Call logOut
    logOut(navigateTo);

    // Verify that functions from external modules were called with the expected arguments
    expect(apiModule.apiCall).toHaveBeenCalledWith("mocked-api-url", "post", expect.any(String));
    expect(localStorageModule.setLocalStorage).toHaveBeenCalledWith("token", mockAccessToken);
    expect(localStorageModule.setLocalStorage).toHaveBeenCalledWith("name", mockName);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("name");
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
  });
});
