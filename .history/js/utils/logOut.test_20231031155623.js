import logOut from "./logOut.js";

describe("logOut", () => {
  it("should remove name and token from localStorage and set window.location.href", () => {
    const localStorageRemoveItem = jest.fn();
    const locationHref = jest.fn();
    global.localStorage = {
      removeItem: localStorageRemoveItem,
    };
    global.window = { location: { href: locationHref } };

    logOut();

    expect(localStorageRemoveItem).toHaveBeenCalledTimes(2);
    expect(locationHref).toHaveBeenCalledWith("../../index.html");
  });
});
