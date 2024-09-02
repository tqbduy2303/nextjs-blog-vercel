"use client";
import { Blog } from "@/utils/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function ImageSlider({ lists }: { lists: Blog[] }){
  const getMaxId = Math.max(...lists.map((item) => item.id));

  console.log(getMaxId);

  const getLatestBlogForCurrentCategory =
    lists && lists.length ? lists.find((item) => item.id === getMaxId) : null;

  const relatedBlogs =
    lists && lists.length ? lists.filter((item) => item.id !== getMaxId) : [];

  console.log(relatedBlogs);
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  // const prevSlide = (): void => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + relatedBlogs?.image.length) % relatedBlogs?.image.length
  //   );
  // };

  // // Function to show the next slide
  // const nextSlide = (): void => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % relatedBlogs?.image.length);
  // };

  // useEffect hook to handle automatic slide transition
  // useEffect(() => {
  //   // Start interval for automatic slide change if not hovered
  //   if (!isHovered) {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000);

  //     // Cleanup the interval on component unmount
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <div
        className="relative h-[460px] mx-12 group hover:"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={getLatestBlogForCurrentCategory?.image || ""}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      {/* <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111111] text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111111] text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button> */}
      {/* <div className="flex justify-center mt-4">
        {relatedBlogs?.image.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-keyColor rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}