import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ybtaiahbdkgybugrtfdi.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASEKEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
