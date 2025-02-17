import { cn } from "@/lib/utils";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";

const Header = () => {
  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4">
          <LogoContainer />
        </div>
      </Container>
      {/* navigation */}
      {/* auth */}
    </header>
  );
};

export default Header;
