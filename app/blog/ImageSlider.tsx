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
        <div className="w-full h-full relative" data-carousel="slide">
            <div className="w-full h-full flex ">
            {imageUrls.map(url => (
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img key={url} src={url}
                    className="img-slider-img object-cover w-full h-full block shrink-0 grow-0 transition translate ease-in-out delay-300"
                    />
                </div>
            ))}
            </div>
            
            <button onClick={showPrevImage} className="img-slider-btn" style={{left:0}} aria-label="View Previous Image">
                <ArrowBigLeft/>
            </button>
            <button onClick={showNextImage} className="img-slider-btn" style={{right:0}} aria-label="View Next Image">
                <ArrowBigRight/>
            </button>

            <div className="absolute bottom-2 left-1/2 flex gap-1 translate--50-px" >
                {imageUrls.map((_, index) =>(
                    <button key={index} onClick={()=>setImageIndex(index)} aria-label={`View Image ${index}`} className="img-slider-dot-btn">
                        {index === imageIndex ? <CircleDot/> : <Circle/>}
                        </button>
                ))}
            </div>
        </div>
        
       
    )
}

