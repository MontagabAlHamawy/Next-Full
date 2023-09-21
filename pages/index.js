import ConnectDB from '@/utils/ConnectDB'
import Link from 'next/link'
import home from '@/styles/Home.module.css'
ConnectDB()
export default function Home() {
  return (
    <div className={home.homee}>
      <div className='d-flex h-100 text-center m-5 p-5'>
        <main className='px-5'>
          <h1>Home Page</h1>
          <p className='lead m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates harum facilis quod voluptatum dolore rerum tenetur tempora delectus! Porro accusamus, dignissimos omnis similique officia fuga blanditiis eaque dolores iusto!</p>
          <Link href='/posts' className="btn btn-primary">Blog</Link>
        </main>
      </div>
    </div>
  )
}
