// services/authService.ts

type User = {
  id: string;
  name: string;
  email: string;
};

// Fake in-memory "DB"
let fakeUser: User | null = null;

export const loginUser = async (email: string, password: string) => {
  // Simulate a user in DB
  if (email === "test@example.com" && password === "password123") {
    fakeUser = { id: "1", name: "Test User", email };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    return { user: fakeUser };
  }
  throw new Error("Invalid credentials");
};

export const registerUser = async (name: string, email: string, password: string) => {
  // In real case, we'd check if email already exists
  fakeUser = { id: Date.now().toString(), name, email };
  localStorage.setItem("user", JSON.stringify(fakeUser));
  return { user: fakeUser };
};

export const getProfile = async () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const logoutUser = async () => {
  fakeUser = null;
  localStorage.removeItem("user");
};
