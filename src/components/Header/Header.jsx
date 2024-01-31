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
      slug: "/",
      active: true,
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
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          {/*Main nav bar*/}
          <ul className="portrait:hidden flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
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
              <IoReorderThreeOutline />
            </button>
          </div>

          {/*mobile nav bar*/}
          <div
            className={`fixed right-5 z-40 rounded-2xl bg-gray-100 overflow-hidden flex flex-col mt-7 landscape:hidden gap-12  origin-top duration-700 ${
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
                          className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
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
