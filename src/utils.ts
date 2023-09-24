import router from "./router";

export interface TokenType {
  token: string;
  expDate: string;
}

export const isValidToken = (token: string) => {
  const pattern = /^[a-zA-Z]{16}$/;
  return pattern.test(token);
};

export const setLocalStore = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const isTokenExpired = (
  betaNowDate = "",
  betaRegisteredDate = "",
  userRegisteredTest = false
) => {
  const userIsRegistered: { token: string; loginDate: string } = JSON.parse(
    localStorage.getItem("user_data")!
  );

  console.log(userIsRegistered);

  if (userIsRegistered || userRegisteredTest) {
    const nowDate = betaNowDate !== "" ? new Date(betaNowDate) : new Date();
    const registeredDate =
      betaRegisteredDate !== ""
        ? new Date(betaRegisteredDate)
        : new Date(userIsRegistered.loginDate);

    const difference = (Number(nowDate) - Number(registeredDate)) / (60 * 1000);

    return difference >= 3;
  }

  return null;
};

export const timer = async (time: number): Promise<string> => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res("something is happening");
    }, time)
  );
};

export const logOut = () => {
  localStorage.removeItem("user_data");
  router.push("/login");
};

export const isUserCanAccessMainPage = () => {
  const userData = JSON.parse(localStorage.getItem("user_data")!);
  if (userData) {
    const tokenIsExpired = isTokenExpired();

    if (tokenIsExpired) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
