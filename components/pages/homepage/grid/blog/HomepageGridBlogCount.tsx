export default function HomepageGridBlogCount() {
  // TODO: fetch blog count
  const BLOG_COUNT = 248;

  return (
    <span className="flex items-end text-xs text-snow/70">
      {`Latest • ${BLOG_COUNT} blogs`}
    </span>
  );
}
