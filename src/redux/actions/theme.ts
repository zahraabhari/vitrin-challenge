export function changeTheme(payload: "dark" | "light") {
  return { type: "CHANGE_THEME", payload };
}
