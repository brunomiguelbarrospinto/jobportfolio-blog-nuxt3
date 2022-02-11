// import useSanity from "./useSanity";
import PostDTO from "@/definitions/PostDTO";
import PostModel from "@/definitions/PostModel";

const { client } = useSanity();

const query = ({ slug }) =>
  `*[_type == "post" && slug.current == "${slug}" ][0] {title}`;

async function fetchPost({ slug }): Promise<PostModel> {
  const data = await client.fetch<PostDTO>(query({ slug }));
  return new PostModel(data);
}

function usePost() {
  return { fetchPost };
}

export default usePost;
