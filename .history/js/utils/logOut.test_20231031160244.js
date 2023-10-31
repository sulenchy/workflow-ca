// logOut.test.js
import logOut from "./logOut";

describe("logOut", () => {
  it("should remove name and token from localStorage and set window.location.href", () => {
    const localStorageRemoveItem = jest.fn();
    const navigateTo = jest.fn();

    global.localStorage = {
      removeItem: localStorageRemoveItem,
    };

    logOut(navigateTo);

    expect(localStorageRemoveItem).toHaveBeenCalledTimes(2);
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");
  });
});
