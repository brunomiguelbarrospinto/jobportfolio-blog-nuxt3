import PostDTO from "./PostDTO";

class PostModel {
  title: string;
  firstLetter: string;
  constructor(post: PostDTO) {
    this.title = post.title;
    this.firstLetter = post.title[0];
  }
  toJSON() {
    return { ...this };
  }
}

export default PostModel;
