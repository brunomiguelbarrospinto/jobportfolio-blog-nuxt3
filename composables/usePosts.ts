// import useSanity from "./useSanity";
import PostDTO from "@/definitions/PostDTO";

import PostModel from "@/definitions/PostModel";

function usePosts() {
  const { fetchData } = useSanity();

  const query = `*[_type == "post"  ]
    {
      title ,
      "slug": slug.current,
      publishedAt, 
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

  const posts = useState("posts", (): PostModel[] => null);

  async function fetchPosts(): Promise<void> {
    const { data } = await fetchData<PostDTO[]>("fetchPosts", query);

    posts.value = data.value.map((d) => new PostModel(d));
  }

  return { fetchPosts, posts };
}

export default usePosts;
