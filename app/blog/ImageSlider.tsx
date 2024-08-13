'use client'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import { useState } from "react"


type ImageSliderProps = {
    imageUrls: string[]
}


export function ImageSlider({imageUrls}: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0);
    function showNextImage(){
        setImageIndex(index => {
            if (index === imageUrls.length -1) return 0
            return index +1
        })
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return imageUrls.length - 1;
            return index - 1;
        });
    } 
      
    return(
        <div className="w-full h-full relative" >
            <div className="w-full h-full flex overflow-hidden">
            {imageUrls.map(url => (
                <img key={url} src={url}
                className="img-slider-img"
                style={{translate: `${-100* imageIndex}%`}}
                />
            ))}
            </div>
            
            <button onClick={showPrevImage} className="img-slider-btn" style={{left:0}} aria-label="View Previous Image">
                <ArrowBigLeft/>
            </button>
            <button onClick={showNextImage} className="img-slider-btn" style={{right:0}} aria-label="View Next Image">
                <ArrowBigRight/>
            </button>

            <div style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50",
                display: "flex",
                gap: ".25rem",
            }}>
                {imageUrls.map((_, index) =>(
                    <button key={index} onClick={()=>setImageIndex(index)} aria-label={`View Image ${index}`} className="img-slider-dot-btn">
                        {index === imageIndex ? <CircleDot/> : <Circle/>}
                        </button>
                ))}
            </div>
        </div>
        
       
    )
}

