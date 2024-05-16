"use server";

import { signIn as nextAuthSignIn, signOut as nextauthSignOut } from "../auth";

export async function signIn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  await nextAuthSignIn("credentials", { username, password, redirectTo: "/" });
}

export async function signOut() {
  await nextauthSignOut();
}
