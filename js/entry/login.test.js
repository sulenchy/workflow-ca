import { loginUser } from "./login.js";
import { displayMessage } from "./entryMessage.js";
import { setLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";

// ********** fetchLocalStorage(token) fra localStorage.js er den som skal testes *********
// REWRITE TEST !!!!!
jest.mock("./entryMessage.js", () => ({ displayMessage: jest.fn() }));
jest.mock("../localStorage/localStorage.js", () => ({ setLocalStorage: jest.fn() }));
jest.mock("../api/constant.js", () => ({ apiUrls: { login_Url: "mocked-api-url" } }));
jest.mock("../api/api.js", () => ({ apiCall: jest.fn() }));

describe("loginUser", () => {
  it("should login and store token in local storage", async () => {
    // Mock the API response
    const mockAccessToken = "mocked-access-token";
    const mockName = "John Doe";
    apiCall.mockResolvedValue({ accessToken: mockAccessToken, name: mockName });

    // Mock the input elements (Can use a library like jsdom for this - installed "jest-environment-jsdom": "^29.7.0", as a dev dependency)
    const emailInput = { value: "valid@stud.noroff.no" };
    const passwordInput = { value: "password1234" };

    // Call the function
    await loginUser(emailInput, passwordInput);

    // Assert that the functions were called as expected
    expect(apiCall).toHaveBeenCalledWith("mocked-api-url", "post", expect.any(String));
    expect(setLocalStorage).toHaveBeenCalledWith("token", mockAccessToken);
    expect(setLocalStorage).toHaveBeenCalledWith("name", mockName);
  });

  it("should handle login failure", async () => {
    // Mock the API response to simulate a login failure
    apiCall.mockResolvedValue({ accessToken: null });

    // Mock the input elements (Can use a library like jsdom for this - installed "jest-environment-jsdom": "^29.7.0", as a dev dependency)
    const emailInput = { value: "invalid@mail.com" };
    const passwordInput = { value: "incorrect-password" };

    // Call the function
    await loginUser(emailInput, passwordInput);

    // Assert that the displayMessage function was called to display an error message
    expect(displayMessage).toHaveBeenCalledWith("login", "Wrong username or password", "danger");
  });
});
