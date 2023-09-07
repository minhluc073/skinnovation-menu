import LayoutOne from "../../../components/Layout/LayoutOne";
import BlogSidebar from "../../../components/Blog/BlogSidebar";
import PostContent from "../../../components/Blog/PostContent";
import InstagramTwo from "../../../components/Sections/Instagram/InstagramTwo";
import ConnectionInstance from "@services/connection-instance";

const PostDetail = ({ post, blog }) => {
  return (
    <LayoutOne tilte={post.title}>
      <div className="post">
        <div className="post__cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
        <div className="post__body">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-md-3">
                <div className="post__sidebar">
                  <BlogSidebar limit={5} popularPostData={blog} />
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className="post__content">
                  <PostContent data={post} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutOne>
  );
};

export async function getStaticPaths() {
  const res = await ConnectionInstance.get("/blog");
  const blog = res.data;
  const paths = blog.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blogRes = await ConnectionInstance.get("blog", {
    params: { _limit: 4 },
  });
  const postRes = await ConnectionInstance.get("blog", {
    params: { slug_like: params.slug },
  });

  return {
    props: {
      blog: blogRes.data,
      post: postRes.data[0],
    },
    // revalidate: 1,
  };
}

export default PostDetail;
