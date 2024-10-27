import { CoverDemo } from "../components/CoverDemo";
import { NavbarDemo } from "../components/Navbar";

export default function Home() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-50  to-blue-50  text-black">
        <NavbarDemo />
        <CoverDemo />
      </div>
    );
  }
  