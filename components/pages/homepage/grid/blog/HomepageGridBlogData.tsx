// components
import HomepageGridBlogCount from "./HomepageGridBlogCount";
import HomepageGridBlogLatestBlogTitle from "./HomepageGridBlogLatestBlogTitle";

export default function HomepageGridBlogData() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-y-1 px-6 pb-5 text-sm">
      <HomepageGridBlogLatestBlogTitle />
      <HomepageGridBlogCount />
    </div>
  );
}
