import { Link, Outlet } from "react-router-dom";

export function BooksLayout() {
  return (
    <>
    <Outlet />
    <hr />
      <nav>
        {/* <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul> */}
        <h1>Resuable component</h1>
        <hr />
      </nav>
    </>
  );
}
