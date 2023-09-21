import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary flex ">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Next Full</Link>
        <div  id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/posts">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/posts/add-post">Add Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/api/posts">API</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
