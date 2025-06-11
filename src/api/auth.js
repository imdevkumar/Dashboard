export async function loginUser(email, password) {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);

  const response = await fetch("https://api.pvaluedashboard.com/api/login", {
    method: "POST",   
    body: form,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
} 