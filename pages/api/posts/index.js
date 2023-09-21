import Post from "@/models/Post"
import ConnectDB from "@/utils/ConnectDB"
import nc from "next-connect"



ConnectDB()

const handler = nc().post(async (req, res) => {
    const { title, imageurl, details } = req.body
    try {
        const newpost = new Post({ title, imageurl, details })
        await newpost.save()
        res.status(200).json({ status: '1 Post has been added Successfully !' })

    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
}).get(async (req, res) => {

    try {
        const posts = await Post.find({})
        res.send(posts)

    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
})

export default handler
