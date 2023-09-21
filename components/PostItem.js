import domain from '@/utils/config'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Home from "@/styles/Home.module.css"
export default function PostItem({ post }) {

  const router = useRouter()


  async function deletePost() {
    try {
      await axios.delete(`${domain}/posts/${post._id}`)
      alert('Post deleted successfully')
      router.push('/posts')

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Link href={`/posts/${post._id}`} className={Home.linke}>
      <div className="card text-left cardimg text-center" >
        <img className="card-img-top" src={post.imageurl} />
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text">{post.details}</p>
          <button type="button" className="btn btn-success m-2" onClick={() => { router.push(`/posts/edit-post/${post._id}`) }}>Edit</button>
          <button type="button" className="btn btn-danger m-2" onClick={() => { deletePost(post._id) }}>Delete</button>
        </div>
      </div>
    </Link>
  )
}
