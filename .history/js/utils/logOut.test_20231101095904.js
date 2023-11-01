// // logOut.test.js
// import logOut from "./logOut";

// describe("logOut", () => {
//   beforeEach(() => {
//     // Set up localStorage methods as spies
//     global.localStorage = {
//       setItem: jest.fn(),
//       getItem: jest.fn(),
//       removeItem: jest.fn(),
//       clear: jest.fn(),
//     };
//   });

//   it("should remove name and token from localStorage and set window.location.href", () => {
//     // Create a mock function for navigateTo
//     const navigateTo = (url) => {
//       // Mock the behavior of window.location.href
//       expect(url).toBe("../../index.html");
//     };

//     logOut(navigateTo);

//     // Ensure localStorage.removeitem is called for "name" and "token"
//     expect(localStorage.removeItem).toHaveBeenCalledWith("name");
//     expect(localStorage.removeItem).toHaveBeenCalledWith("token");

//     // Verify that navigateTo was called with the expected URL
//   });
// });

// logOut.test.js
import logOut from "./logOut";

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

    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("name");
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
  });
});

