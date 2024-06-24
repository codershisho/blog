import { NextPage } from "next";
import styles from "./BlogHeaderFix.module.css";

const BlogHeaderFix: NextPage = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CoderShisho Blog</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default BlogHeaderFix