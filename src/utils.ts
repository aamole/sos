import type { User } from "grammy/types";

export function mentionUser(user: User): string {
  const name = user.first_name || "User";  
  return `<a href="tg://user?id=${user.id}">${name}</a>`;
}
