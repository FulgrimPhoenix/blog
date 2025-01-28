interface IPost {
  title: string;
  date: null | Date;
  paragraph: string;
  moreInfo: {
    linkText: string;
    link: string;
  };
}

export const MAIN_POST: IPost = {
  title: "Title of a longer featured blog post",
  date: null,
  paragraph:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  moreInfo: {
    linkText: "Continue reading…",
    link: "#",
  },
};

export const SECONDARY_POSTS: IPost[] = [
  {
    title: "Featured post",
    date: new Date(2020, 10, 12),
    paragraph:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    moreInfo: {
      linkText: "Continue reading...",
      link: "#",
    },
  },
  {
    title: "Post title",
    date: new Date(2020, 10, 11),
    paragraph:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    moreInfo: {
      linkText: "Continue reading...",
      link: "#",
    },
  },
];
