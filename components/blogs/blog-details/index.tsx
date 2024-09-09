"use client";

import Button from "@/components/button";
import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { extractHeadings } from '@/components/TableOfContent/extractHeadings'
import TableOfContents  from "@/components/TableOfContent";

export default function BlogDetailsHome({ blogData }: { blogData: Blog }) {
  console.log(blogData, "blogData");

  const [comment, setComment] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();
  function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString); // Parse ISO date string
  
    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
  
    // Format the date as dd/mm/yyyy
    return `${day} / ${month} / ${year}`;
  }
  async function handleCommentSave() {
    let extractComments = [...blogData.comment];

    extractComments.push(`${comment}|${session?.user?.name}`);
    const response = await fetch(`/api/blogs/update-post`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: blogData?.id,
        comment: extractComments,
      }),
    });
    try{
        const data = await response.json();
    
        console.log(data, "comment123");

        if (data && data.success) {
        setComment("");
        router.refresh();
        }
    } catch(error) {
         console.log(error); // handle the error appropriately
    }
    
  }

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!blogData) return null;
  const headings = extractHeadings(blogData?.content);
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-col gap-4 items-center justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div className="w-full">
                <h2 className="mb-8 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl">
                  {blogData?.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  {formatDate(blogData?.createdAt)}
                    {/* <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image src={blogData?.userimage} alt="User" fill />
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-body-color">
                          By
                          <span className="pl-2">
                            {blogData?.userid.split("_")[0]}
                          </span>
                        </h4>
                      </div>
                    </div> */}
                  </div>
                  
                  <div className="mb-5">
                    <Link
                      className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                      href={`/category/${blogData?.category}`}
                    >
                      {blogData?.category}
                    </Link>
                  </div>
                </div>
                
                <div className="w-full">
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blogData?.image || ""}
                        alt="Blog"
                        className="object-cover object-center"
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/5 float-right flex-auto"><TableOfContents headings={headings} /></div>
                   <div className="w-4/5 float-left flex-auto">
                      <div className="bg-primary p-4 rounded-md shadow-lg top-20">
                      <MarkdownPreview source={blogData?.content} className="text-white"
                      />
                      </div>
                    
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 flex gap-4 border-solid border	border-primary rounded-md ">
              {session !== null ? (
                <>
                  <input
                    name="comment"
                    id="comment"
                    autoFocus
                    autoComplete="off"
                    placeholder="Add comment here"
                    value={comment}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setComment(event.target.value)
                    }
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-black dark:shadow-signUp"
                  />
                  <Button text="Add" onClick={handleCommentSave} />
                </>
              ) : <>
                <p>please login to add comment</p>
              </>}
            </div>
            <section className="dark:bg-black py-8 lg:py-16 w-full lg:w-8/12 border-solid border	border-primary  rounded-md pl-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-white dark:text-white">
                  Discussion ({blogData?.comment.length})
                </h2>
              </div>
              {blogData && blogData.comment && blogData.comment.length > 0
                ? blogData.comment.map((comment,key) => (
                    <div className="p-6 text-base rounded-lg dark:bg-black" key={key}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-white dark:text-white font-semibold">
                            {
                            // comment.split("|")[1] === blogData?.id
                            //   ? `${
                            //       comment.split("|")[1].split("_")[0]
                            //     } (Author)`
                            //   : 
                              comment.split("|")[1].split("_")[0]}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        {comment.split("|")[0]}
                      </p>
                    </div>
                  ))
                : null}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}