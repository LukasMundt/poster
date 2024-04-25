import supabase from "../../utils/supabase";

export default async function PostList() {
  const { data, error } = await supabase.from("posts").select();

  const { data: user } = await supabase.auth.getUser();

  console.log(user);

  if (error) {
    console.error(error);
  }

  return (
    <><ul className="list-none space-y-5">
      {data.map((post) => {
        return (
          <li
            className="border border-slate-800 rounded-lg px-3 py-2 w-fit"
            key={post.id}
          >
            {post.content}
          </li>
        );
      })}
    </ul>
    <p>{JSON.stringify(user.session)}</p>
    </>
  );
}
