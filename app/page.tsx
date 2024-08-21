import Image from "next/image";
import Link from "next/link";
import img1 from "./img/image.png"
import img2 from "./img/3f524a5f-9daf-4350-886f-da6cd5ae683d.png"
import img3 from "./img/qslf0x12.png"
import { LastesNews } from "./LastesNews";
import { Blogs } from "./Blogs";
import ImageSlider from "./ImageSlider";

const IMAGES = [img1.src, img2.src ,img3.src];
export default function Home() {
  return (
    <div className="w-9/10">
    <div className="max-w-screen-xl aspect-video m-auto w-9/10 ">
        <ImageSlider />
    </div>
    <div className="flex justify-center">
        <LastesNews imageUrls={IMAGES}/>
    </div>
    <div className="flex justify-center ">
        <Blogs/>
    </div>
</div>

  );
}
