import supabase from "@/lib/supabase";

export async function createPost(content: string) {
  const { data, error } = await supabase
    .schema("openbird")
    .from("post")
    .insert({
      content,
    });

  if (error) throw error;
  return data;
}
