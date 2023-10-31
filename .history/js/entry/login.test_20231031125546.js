import { loginUser } from "./login.js";

// Mocking the dependencies
jest.mock("./entryMessage.js", () => ({ displayMessage: jest.fn() }));
jest.mock("../localStorage/localStorage.js", () => ({ setLocalStorage: jest.fn() }));
jest.mock("../api/constant.js", () => ({ apiUrls: { login_Url: "mocked-api-url" } }));
jest.mock("../api/api.js", () => ({ apiCall: jest.fn() }));

describe("loginUser", () => {
  it("should login and store token in local storage", async () => {
    // Mock the API response
    const mockAccessToken = "mocked-access-token";
    const mockName = "John Doe";
    require("../api/api.js").apiCall.mockResolvedValue({ accessToken: mockAccessToken, name: mockName });

    // Mock the input elements (Can use a library like jsdom for this - installed "jest-environment-jsdom": "^29.7.0", as a dev dependency)
    const emailInput = { value: "example@mail.com" };
    const passwordInput = { value: "password1234" };

    // Call the function
    await loginUser(emailInput, passwordInput);

    // Assert that the functions were called as expected
    expect(require("../api/api.js").apiCall).toHaveBeenCalledWith("mocked-api-url", "post", expect.any(String));
    expect(require("../localStorage/localStorage.js").setLocalStorage).toHaveBeenCalledWith("token", mockAccessToken);
    expect(require("../localStorage/localStorage.js").setLocalStorage).toHaveBeenCalledWith("name", mockName);

    // Assert that the displayMessage function was called to display a success message
    expect(require("./entryMessage.js").displayMessage).toHaveBeenCalledWith(
      "login",
      "You have successfully logged in",
      "success"
    );
    
  });

  it("should handle login failure", async () => {
    // Mock the API response to simulate a login failure
    require("../api/api.js").apiCall.mockResolvedValue({ accessToken: null });

    // Mock the input elements (you can use a library like jsdom for this)
    const emailInput = { value: "example@mail.com" };
    const passwordInput = { value: "incorrect-password" };

    // Call the function
    await loginUser(emailInput, passwordInput);

    // Assert that the displayMessage function was called to display an error message
    expect(require("./entryMessage.js").displayMessage).toHaveBeenCalledWith(
      "login",
      "Wrong username or password",
      "danger"
    );
  });
});
