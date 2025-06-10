const userUrl = "https://wedev-api.sky.pro/api/user";
const apiUrl = "https://wedev-api.sky.pro/api/kanban";

export const getTasks = async (token) => {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера!")
  }
  const data = await response.json();
  return data;
};

export const register = async ({ login, name, password }) => {
  const response = await fetch(userUrl, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
    }),
  });

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже сущетсвует!")
  }

  if (!response.ok) {
    throw new Error("Ошибка сервера!")
  }

  const data = await response.json();
  return data;
};  

export const login = async ({ login, password }) => {
  const response = await fetch(`${userUrl}/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Передан неправильный логин или пароль!")
  }

  if (!response.ok) {
    throw new Error("Ошибка сервера!")
  }

  const data = await response.json();
  return data;
};
