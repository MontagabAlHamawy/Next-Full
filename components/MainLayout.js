import Header from "./Header"
import Footer from "./Footer"


export default function MainLayout(props) {
  
    return (
      <>
      <Header/>
        {props.children}
      <Footer/>
      </>
    )                           
  }
  