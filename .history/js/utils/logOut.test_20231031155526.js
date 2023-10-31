import logOut from "./logOut.js";

describe("logOut", () => {
  beforeEach(() => {
    // Mock the localStorage.removeItem method
    const mockRemoveItem = jest.fn();
    global.localStorage = {
      removeItem: mockRemoveItem,
    };

    // Mock the window.location.href assignment
    delete global.window.location;
    global.window = Object.create(window);
    Object.defineProperty(window, "location", {
      value: {
        href: "",
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should remove name and token from localStorage and set window.location.href", () => {
    // Arrange
    const expectedLocation = "../../index.html";

    // Act
    logOut();

    // Assert
    expect(localStorage.removeItem).toHaveBeenCalledTimes(2);
    expect(localStorage.removeItem).toHaveBeenCalledWith("name");
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(window.location.href).toBe(expectedLocation);
  });
});
