import { findUserByEmail, User } from "./findUserByEmail";


export async function findUsersByEmail(emails: string[]) {

  const users = await Promise.all(
    emails.map((email) => findUserByEmail(email) )
  )

  return users.filter((user) => user !== undefined)
  
}