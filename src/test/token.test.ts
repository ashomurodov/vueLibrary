import { test, expect, describe, beforeEach, afterEach, it, vi } from "vitest";

import { isValidToken, setLocalStore, isTokenExpired, timer } from "../utils";

test("Token is valid", () => {
  expect(isValidToken("Ayyub")).toEqual(false);
  expect(isValidToken("AyyubAyyubAyyub1")).toEqual(false);
  expect(isValidToken("1234567891234567")).toEqual(false);
  expect(isValidToken("AyyubAyyubAyyuba")).toEqual(true);
  expect(isValidToken("AyyubAyyubAyyubaa")).toEqual(false);
});

describe("setLocalStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set an item in localStorage", () => {
    const key = "testKey";
    const value = { name: "John", age: 30 };

    setLocalStore(key, value);

    const storedValue = JSON.parse(localStorage.getItem(key)!);

    expect(storedValue).toEqual(value);
  });

  it("should overwrite an existing item in localStorage", () => {
    const key = "testKey";
    const originalValue = { name: "Alice", age: 25 };
    const updatedValue = { name: "Bob", age: 35 };

    localStorage.setItem(key, JSON.stringify(originalValue));

    setLocalStore(key, updatedValue);

    const storedValue = JSON.parse(localStorage.getItem(key)!);

    expect(storedValue).toEqual(updatedValue);
  });
});

describe("Check Token Expired", () => {
  it("Should return true if time difference big than 3", () => {
    const registeredDate = "Wed Sep 20 2023 14:53:15 GMT+0500 (Uzbekistan Standard Time)";
    const nowDate = "Wed Sep 20 2023 14:57:15 GMT+0500 (Uzbekistan Standard Time)";

    expect(isTokenExpired(nowDate, registeredDate, true)).toEqual(true);
  });

  it("Should return false if time difference small than 3", () => {
    const registeredDate = "Wed Sep 20 2023 14:53:15 GMT+0500 (Uzbekistan Standard Time)";
    const nowDate = "Wed Sep 20 2023 14:54:15 GMT+0500 (Uzbekistan Standard Time)";

    expect(isTokenExpired(nowDate, registeredDate, true)).toEqual(false);
  });

  it("Should return null if user not registered", () => {
    const registeredDate = "Wed Sep 20 2023 14:53:15 GMT+0500 (Uzbekistan Standard Time)";
    const nowDate = "Wed Sep 20 2023 14:54:15 GMT+0500 (Uzbekistan Standard Time)";

    expect(isTokenExpired(nowDate, registeredDate)).toEqual(null);
  });
});

// timer function test

describe("timer", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Enable fake timers
  });

  afterEach(() => {
    vi.useRealTimers(); // Restore real timers after each test
  });

  it("should resolve after the specified time", async () => {
    const delay = 1000; // 1 second

    const promise = timer(delay);

    vi.advanceTimersByTime(delay);

    await promise.then((result) => {
      expect(result).toEqual("something is happening");
    });
  });
});

// logout test width mock dates

// const localStorageMock = {
//   removeItem: vi.fn(),
// };

// const routerMock = {
//   push: vi.fn(),
// };

// vi.mock("./router", () => ({
//   router: routerMock,
// }));

// describe("logOut", () => {
//   beforeEach(() => {
//     localStorageMock.removeItem.mockClear();
//     routerMock.push.mockClear();
//   });

//   it("Should remove user_data from localstorage and navigate to '/login'", () => {
//     logOut();

//     expect(localStorageMock.removeItem).toHaveBeenCalledWith("user_data");
//     expect(routerMock.push).toHaveBeenCalledWith("/login");
//   });
// });
