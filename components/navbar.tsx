import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();
  
  return (
    <div className="border-b">
      <div className="bg-[#fffff]">
        {/* First Navbar */}
        <Container>
  <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
    {/* Center Text Zone */}
    <div className="flex items-center gap-x-2">
      <p className="font-bold text-xl">
        <a href="tel:+21692265519">(+216) 92265519</a>
      </p>
    </div>
    <p className="font-bold text-xl">
    Livraison gratuite à partir de 99 dt d'achat
      </p>    {/* Right Text Zone */}
    <div className="flex items-center gap-x-2">
    <button className="font-bold text-xl">
        <a href="/contact">Contact(icon)</a>
      </button>
      <button className="font-bold text-xl">
        <a href="/compte"> Compte(icon)</a>
      </button>
          </div>
  </div>
</Container>

      </div>
      {/* Big Image Logo */}
      <div className="flex justify-center bg-[#ffeaf3] w-[1500px] mx-auto">
        <img
          src="https://beautystore.tn/img/logo-1655823100.jpg" // Use the provided logo URL
          alt="Logo"
          width={500} // Set the desired width of the logo image
          height={400} // Set the desired height of the logo image
          className="my-5" // Add margin classes here
        />
      </div>
      <div className="bg-[#fffff] py-2">
        {/* Last Navbar (Current Navbar) */}
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">STORE</p>
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
