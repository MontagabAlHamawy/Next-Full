import { useRouter } from "next/router"

export default function PostDetels({ post }) {
  const router = useRouter()
  return (

    <div className="container text-center py-4">
      <button type="button" className="btn btn-success m-2" onClick={() => { router.push(`/posts/edit-post/${post._id}`) }}>Edit</button>
      <div className="row">
        <div className="col-md-12">
          <img src={post.imageurl}  className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4">{post.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-left">
          <p>
            {post.details}
          </p>
        </div>
      </div>
    </div>
  )
}
