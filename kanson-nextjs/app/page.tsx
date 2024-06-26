import Link from 'next/link'
import PostList from './blog/PostList'
export default function Home() {
  const postData = [
    { id: 1, slug: 'aaa', title: 'jjj' },
    { id: 2, slug: 'bbb', title: 'lll' },
    { id: 3, slug: 'ccc', title: 'kkk' }
  ]
  return (
    <>
      <h1 className={"text-orange-300"}>hello Home pages</h1>
      <Link href={"/dashboard"}>go to dashboard</Link>
      <PostList posts={postData}></PostList>
    </>
  )
}
