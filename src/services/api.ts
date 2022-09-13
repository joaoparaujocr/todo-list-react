import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000
});

export const getTasks = async () => {
  const user: any = localStorage.getItem("user");
  const { accessToken, user: { id } } = JSON.parse(user);
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`

  return await api.get(`users/${id}/tasks`)
    .then(({ data }) => data)
    .catch(err => console.log(err))
};

export const tokenIsValid = async (userReq: any) => {
  const { accessToken, user: { id } } = userReq;
  return await
    api
      .get(`users/${id}`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      })
      .then(() => {
        return userReq})
      .catch(() => "");
}

export const sigIn = async (dataSig: any) => {
  return await
    api
      .post("login", dataSig)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      })
      .catch(err => console.log(err));
}

export const registerUser = async ({email, password, name}: any) => {

  return await
    api
      .post("register", {email, password, name})
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      })
      .catch(err => "")
}

export const createTask = async (content: string) => {
  const user: any = localStorage.getItem("user");
  const userJs = JSON.parse(user);
  const data = {
    content,
    complete: false,
    userId: userJs.user.id,
  }

  await
    api
      .post("tasks", data)
      .then(res => res.data)
      .catch(err => console.error(err))

}

export const deleteTask = async (id: number)  => {
  await
    api
      .delete(`tasks/${id}`)
      .then(({ data }) => data)
      .catch(err => console.error(err))
}

export const checkedTask = async (id: number) => {
  await
    api
      .patch(`tasks/${id}`, {
        complete: true
      })
      .then(({ data }) => data)
      .catch(err => console.error(err))
}

export const uncheckedTask = async (id: number) => {
  await
    api
      .patch(`tasks/${id}`, {
        complete: false
      })
      .then(({ data }) => data)
      .catch(err => console.error(err))
}

export const updateTask = async (id: number, content: string) => {
  await
    api
      .patch(`tasks/${id}`, { content })
      .then(({ data }) => data)
      .catch(err => console.error(err))
}