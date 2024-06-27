import Link from "next/link"
import { postListData } from "./types"
interface postType {
  posts: Array<postListData>
}
export default function PostList({ posts }: postType) {
  return (
    <ul>
      {
        posts.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/blog/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}