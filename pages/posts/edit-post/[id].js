
import domain from "@/utils/config"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

import home from '@/styles/Home.module.css'

export default function postID({ post }) {
  const [title, settitle] = useState(post.title)
  const [imageurl, setimageurl] = useState(post.imageurl)
  const [details, setdetails] = useState(post.details)

  async function updatePost() {

    const postUpdate = {
      title,
      imageurl,
      details
    }
    try {
      await axios.put(`${domain}/posts/${post._id}`, postUpdate)
      alert('Post updated successfully')
    } catch (error) {
      alert(error)
      console.log(error)
    }

  }

  return (
    <>
      <h1 className="text-center m-3">Update Post</h1>
      <div className="">
        <div className={home.margad}>
          <div className="mb-3 row">
            <div className="col-8">
              <input type="text" className="form-control" name="title"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value)
                }}
                placeholder="title" />
            </div>
          </div>
          <br />
          <div className="mb-3 row">
            <div className="col-8">
              <input type="text" className="form-control" name="imageUrl"
                value={imageurl}
                onChange={(e) => {
                  setimageurl(e.target.value)
                }}
                placeholder="image url" />
            </div>
          </div>
          <br />
          <div className="mb-3  row">
            <div className="col-8">
              <textarea className="form-control" name="details" id="" rows="3"
                value={details}
                onChange={(e) => {
                  setdetails(e.target.value)
                }}
                placeholder="details"></textarea>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="offset-sm-4 col-sm-8">
              <button className="btn btn-primary" onClick={updatePost}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  const respons = await axios.get(`${domain}/posts/${context.query.id}`)
  return {
    props: {
      post: respons.data
    },
  }
}
