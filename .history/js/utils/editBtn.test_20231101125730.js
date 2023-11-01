// SHOULD have imported logOut form editBtn.js, but it is not exported.
// Solution: I made a mock of editBtn.js (logOut.js) and export logOut from logOut.js into logOut.test.js
// So the actual test is located in logOut.test.js, and logOut is imported from logOut.js
//
// Also had to split up localStorage.removeItem("name", "token"); into two lines
// as it was not removing token from localStorage since it can take only one argument per call.
//
// Also had to add "jest-localstorage-mock": "^2.4.26", to devDependencies in package.json
// to get localStorage to work in tests.

// IF logOut had been exported from editBtn.js, this would be the test:
import logOut from "./editBtn.js"; // THIS will not work since logOut is not exported from editBtn.js
import "jest-localstorage-mock";

describe("logOut", () => {
  it("should remove name and token from localStorage and navigate to the home page", () => {
    // Mock the navigateTo function
    const navigateTo = jest.fn();

    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorage.removeItem).toHaveBeenCalledWith("name"); // This will pass
    expect(localStorage.removeItem).toHaveBeenCalledWith("token"); // THIS WOULD FAIL IF localStorage.removeItem("name", "token"); WAS NOT SPLIT UP INTO TWO LINES

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
  });
});
