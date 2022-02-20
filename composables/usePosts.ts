// import useSanity from "./useSanity";
import PostDTO from "@/definitions/PostDTO";
import PostModel from "@/definitions/PostModel";

function usePosts() {
  const { fetchData } = useSanity();
  const query =
    '*[_type == "post" ] {title , "slug": slug.current, author, mainImage, categories, publishedAt, body}';
  const posts = useState("posts", (): PostModel[] => null);
  async function fetchPosts(): Promise<void> {
    const { data } = await fetchData<PostDTO[]>("fetchPosts", query);
    posts.value = data.value.map((d) => new PostModel(d));
  }
  return { fetchPosts, posts };
}

export default usePosts;
