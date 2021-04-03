export async function getUsers() {
  const Response = await fetch("http://localhost:5000/users");
  const users = await Response.json();
  return users;
}
export async function createUser(user) {
  const response = await fetch("http://localhost:5000/createUser", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  await response.json().then();
}

export async function deleteUser(id, apiKey) {
  fetch("http://localhost:5000/deleteUser?userId=" + id + "&apiKey=" + apiKey, {
    method: "DELETE",
  }).then((res) => res.text());
}
export async function updateUser(user) {
  console.log(user);
  const response = await fetch(
    "http://localhost:5000/updateUser?userId=" + user.userId,
    {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  await response.json().then((data) => console.log(data));
}
