import PostDTO from "./PostDTO";

class PostModel {
  title: string;
  slug: string;
  constructor(post: PostDTO) {
    this.title = post.title;
    this.slug = post.slug;
  }
  toJSON() {
    return { ...this };
  }
}

export default PostModel;
