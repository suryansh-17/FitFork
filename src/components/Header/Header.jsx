import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItems = [
    {
      name: "Home",
      slug: "/feed",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-green-50">
      <Container>
        <nav className="flex w-full">
          <div className="portrait:hidden flex text-5xl text-green-600 font-Protest font-bold  ml-3 mr-7 items-center">
            <Link to="/">FitFork</Link>
          </div>
          <div className="mr-4">
            <Link to="/">
              <Logo width="70vh" />
            </Link>
          </div>
          {/* small screen */}
          <div className="landscape:hidden flex text-3xl text-green-600 font-Protest font-bold  ml-3 mr-4 items-center">
            <Link to="/">FitFork</Link>
          </div>
          {/*Main nav bar*/}
          <ul className="portrait:hidden flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 font-mono text-xl m-2 items-center text-green-600 hover:bg-green-500 hover:text-white rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <div className="landscape:hidden flex items-center ml-auto inset-y-0 right-0">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <IoReorderThreeOutline className="text-4xl text-green-600" />
            </button>
          </div>

          {/*mobile nav bar*/}
          <div
            className={`fixed right-5 z-50 top-9 rounded-2xl bg-green-200  text-green-600 overflow-hidden flex flex-col mt-7 landscape:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-100vh"
            }`}
          >
            <div className="px-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <ul className="">
                  {navItems.map((item) =>
                    item.active ? (
                      <li key={item.name}>
                        <button
                          onClick={() => navigate(item.slug)}
                          className="inline-block px-6 py-2 duration-200 rounded-full"
                        >
                          {item.name}
                        </button>
                      </li>
                    ) : null
                  )}
                  {authStatus && (
                    <li>
                      <LogoutBtn />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
