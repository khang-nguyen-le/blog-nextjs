import Image from "next/image";

import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import styles from "./post-content.module.css";
import PostHeader from "./post-header";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    img(image) {
      return (
        <div className={styles.image}>
          <Image
            src={`/images/posts/${post.slug}/${image.src}`}
            alt={image.alt}
            width={600}
            height={300}
          />
        </div>
      );
    },
    a(a) {
      return (
        <a href={a.href} target="_blank">
          {a.node.children[0].value}
        </a>
      );
    },
    // p(paragraph) {
    //   const { node } = paragraph;
    //   if (node.children[0].tagName === "img") {
    //     const image = node.children[0];

    //     return (
    //       <div className={styles.image}>
    //         <Image
    //           src={`/images/posts/${post.slug}/${image.properties.src}`}
    //           alt={image.properties.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    // },
    code(code) {
      const { children, className } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown components={customRenderers}>{post.content}</Markdown>
    </article>
  );
}

export default PostContent;
