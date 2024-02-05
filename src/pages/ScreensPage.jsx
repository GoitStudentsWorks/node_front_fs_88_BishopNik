import { useParams } from "react-router-dom"

const ScreensPage = () => {
    const {boardName} = useParams()
   
    return <>
       <h1>Hello i am ScreensPage board № {boardName} </h1>
    </>
}
export default ScreensPage