import useSanity from "./useSanity";

const { client } = useSanity();

const query = '*[_type == "post" ] {title , "slug": slug.current}';

const posts = ref([]);
async function fetchPosts() {
  posts.value = await client.fetch(query);
}

function usePosts() {
  return { fetchPosts, posts };
}

export default usePosts;
