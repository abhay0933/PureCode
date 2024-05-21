import { LuLogOut, LuUserCircle2, LuZap } from "react-icons/lu";
import logoDarkImg from "../../assets/images/logo-dark.png";
import logoLightImg from "../../assets/images/logo-light.png";
import offerBgOtherImg from "../../assets/images/offer-bg.png";
import Sidebar from "../sidebar/Sidebar";
import SimplebarReactClient from "../header/SimplebarReactClient";
import { getAdminVerticalMenuItems } from "../../mock_data/menuFunctions";

const Navbar = () => {
  return (
    <div
      id="application-sidebar"
      className="hs-overlay fixed inset-y-0 start-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-e border-default-200 bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-default-50 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0 hide-in-print"
    >
      <div className="sticky top-0 flex h-18 items-center justify-center border-b border-dashed border-default-200 px-6">
        <a href="/home">
          <img
            src={logoDarkImg}
            height={40}
            width={130}
            alt="logo"
            className="flex h-10 dark:hidden"
          />
          <img
            src={logoLightImg}
            height={40}
            width={130}
            alt="logo"
            className="hidden h-10 dark:flex"
          />
        </a>
      </div>

      <SimplebarReactClient className="h-[calc(100%-390px)]">
        <Sidebar menuItems={getAdminVerticalMenuItems()} />
      </SimplebarReactClient>

      <ul className="admin-menu flex flex-col gap-2 px-4 pt-10">
        <li className="menu-item">
          <div
            style={{ backgroundImage: `url(${offerBgOtherImg})` }}
            className="flex flex-col items-center rounded-md bg-primary/5 bg-cover bg-no-repeat p-4 text-center text-sm text-default-700"
          >
            <div className="-mt-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-default-100 bg-white text-primary shadow-lg dark:bg-default-50">
              <LuZap size={24} />
            </div>
            <p className="mb-4 text-sm text-default-700">
              🔥 Upgrade Your Plan. Find Out here
            </p>
            <button className="rounded bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white">
              Contact Support
            </button>
          </div>
        </li>

        <li className="menu-item">
          <a
            className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-default-700 hover:bg-default-100"
            href="/admin/profile"
          >
            <LuUserCircle2 size={20} />
            Profile
          </a>
        </li>
        <li className="menu-item">
          <a
            className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-red-500 hover:bg-red-400/10 hover:text-red-600"
            href="/auth/logout"
          >
            <LuLogOut size={20} />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
