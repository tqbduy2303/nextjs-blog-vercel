import { ImageSlider } from "./ImageSlider";


const IMAGES = ["car1", "car2", "car3", "car4", "car5"];
export default function Blog() {

    return(
        <div>
            <div className="header">

            </div>
            <div className="main-hightlight" style={{
                maxWidth: "1200px",
                width: "100%",
                aspectRatio: "10/6",
                margin: "0 auto",

            }}>
                <ImageSlider imageUrls={IMAGES}/>
            </div>
            <div className="Lastest news">

            </div>
            <div className="post">

            </div>
        </div>
        
    );
        
}
