import React from "react";

import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="my-5 flex text-xl">
        <li className="flex gap-5">
          <Link className="underline" to="/">
            Home
          </Link>
          <Link className="underline" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
