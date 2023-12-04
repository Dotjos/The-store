import { supabase } from "./Supabase";

export async function signUpNewUser(userName, password, email, role, shopId) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName,
        role,
        shopId,
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
}

export async function signInWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}
