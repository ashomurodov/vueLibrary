import router from "./router";

export const isValidToken = (token: string) => {
  const pattern = /^[a-zA-Z]{16}$/;

  return pattern.test(token);
};

export interface TokenType {
  token: string;
  expDate: string;
}

export const setLocalStore = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const isTokenExpired = () => {
  const userIsRegistered: { token: string; loginDate: string } = JSON.parse(
    localStorage.getItem("user_data")!
  );

  if (userIsRegistered) {
    const nowDate = new Date();
    const registeredDate = new Date(userIsRegistered.loginDate);

    const difference = (Number(nowDate) - Number(registeredDate)) / (60 * 1000);

    return difference >= 3;
  }

  return null;
};

export const timer = async (time: number) => {
  await new Promise((res) =>
    setTimeout(() => {
      res("something is happening");
    }, time)
  );
};

export const logOut = () => {
  localStorage.removeItem("user_data");
  router.push("/login");
};
