import PostDTO from "@/definitions/PostDTO";
import PostModel from "@/definitions/PostModel";

function usePost() {
  const { fetchData } = useSanity();
  const query = ({ slug }) =>
    `*[_type == "post" && slug.current == "${slug}" ][0]
    {
      title ,
      "slug": slug.current,
      publishedAt, 
      body,
      categories[]->{
        title,
        "color": color.hex,
        "slug": slug.current
      },
      "mainImage": mainImage.asset->url,
      author->{
        name,
        "image": image.asset->url
      }
    }`;
  const post = useState("post", (): PostModel => null);
  async function fetchPost({ slug }): Promise<void> {
    const { data } = await fetchData<PostDTO>("fetchPost", query({ slug }));
    post.value = new PostModel(data.value);
  }
  return { fetchPost, post };
}

export default usePost;
