import { ImageSlider } from "./ImageSlider";
import img1 from "../img/image.png"
import img2 from "../img/3f524a5f-9daf-4350-886f-da6cd5ae683d.png"
import img3 from "../img/qslf0x12.png"
import { LastesNews } from "./LastesNews";
import { Blogs } from "./Blogs";

const IMAGES = [img1.src, img2.src ,img3.src];
export default function Blog() {

    return(
        <div className="">
            <div className="header">

            </div>
            <div className="main-hightlight" style={{
                maxWidth: "1200px",
                width: "90%",
                aspectRatio: "11/6",
                margin: "0 auto",

            }}>
                <ImageSlider imageUrls={IMAGES}/>
            </div>
            <div className="Lastest news flex justify-center w-full">
                <LastesNews imageUrls={IMAGES}/>
            </div>
            <div className="post flex justify-center ">
                <Blogs/>
            </div>
        </div>
        
    );
        
}
