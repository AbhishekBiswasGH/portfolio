// components
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import NavDownloadResume from "./components/NavDownloadResume";

export default function Header() {
  return (
    <header
      className={`sticky top-0 z-50 flex w-device justify-center *:w-full *:max-w-extent *:pt-5 max-sm:-translate-y-px max-sm:bg-gradient-to-b max-sm:from-matte max-sm:from-20% max-sm:to-transparent`}
    >
      <div
        className={`relative flex items-center justify-between px-4 sm:bg-gradient-to-b sm:from-matte sm:from-15% sm:to-transparent sm:px-12 lg:px-12`}
      >
        <Logo />
        <NavBar />
        <NavDownloadResume />
        {/* <div
          className={`absolute top-0 flex w-device justify-center *:w-full *:max-w-extent`}
        >
          <div className={"h-16"}></div>
        </div> */}
      </div>
    </header>
  );
}
