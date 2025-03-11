// components
import HomepageGridBlog from "./blog/HomepageGridBlog";
import HomepageGridGithub from "./github/HomepageGridGithub";
import HomepageGridLeetcode from "./leetcode/HomepageGridLeetcode";
import HomepageGridProject from "./project/HomepageGridProject";
import HomepageGridService from "./service/HomepageGridService";
import HomepageGridSocial from "./social/HomepageGridSocial";
import HomepageGridSummary from "./summary/HomepageGridSummary";

export default function HomepageGrid() {
  return (
    <div className="sm:grid-row-3 grid grid-cols-2 px-4 pb-14 *:min-h-40 *:max-sm:min-h-40 sm:grid-cols-4 sm:gap-3.5 sm:px-12 sm:pt-15 sm:pb-20 lg:px-12">
      <HomepageGridSummary />
      <HomepageGridProject />
      <HomepageGridLeetcode />
      <HomepageGridGithub />
      <HomepageGridSocial />
      <HomepageGridBlog />
      <HomepageGridService />
    </div>
  );
}
