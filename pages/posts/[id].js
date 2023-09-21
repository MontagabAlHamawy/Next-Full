
import PostDetels from "@/components/PostDetels"
import PostItem from "@/components/PostItem"
import domain from "@/utils/config"
import axios from "axios"

export default function Index({ post }) {
    return (
        <div className="cont-grid">
            <PostDetels post={post}/>
        </div>
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
