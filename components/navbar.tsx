import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8 ">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">E-STORE</p>
          </Link>
          <MainNav data={[]} />
        </div>
      </Container>
      Navbar
    </div>
  );
};

export default Navbar;
