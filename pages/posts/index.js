
import PostItem from "@/components/PostItem"
import domain from "@/utils/config"
import axios from "axios"

export default function Index({ postData }) {
  const posts = postData.map((post) => (
    <PostItem post={post} key={post._id} />
  ));

  return (
    <>
      <h1 className="load text-center m-3">Blog</h1>
      <div className="cont-grid">
        {posts}
      </div>
    </>
  )
}


export async function getStaticProps() {
  const respons = await axios.get(`${domain}/posts`)
  return {
    props: {
      postData: respons.data
    }
  }
}