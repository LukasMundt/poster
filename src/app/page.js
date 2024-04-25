import Link from "next/link";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <>
    <Link href="/login">Login</Link>
      <PostForm />
      <PostList />
    </>
  );
}
