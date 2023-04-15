import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

export const Navbar = () => {
  return <header className="fixed w-full bg-white z-10 shadow-sm">
    <nav className="py-4 border-b[1px]">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo/>
          <Search/>
        </div>
      </Container>
    </nav>
  </header>
};