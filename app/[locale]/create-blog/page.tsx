"use client";

import Button from "@/components/button";
import Spinner from "@/components/spinner";
import { GlobalContext } from "@/context";
import { firebaseConfig, formControls, initialBlogFormData } from "@/utils";
import { BlogFormData } from "@/utils/types";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';

const app = initializeApp(firebaseConfig);
const stroage = getStorage(app, "gs://blog-aplication123.appspot.com");

function createUniqueFileName(fileName: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${timeStamp}-${randomString}`;
}

async function handleImageSaveToFireBase(file: any) {
  const extractUniqueFileName = createUniqueFileName(file?.name);
  const stroageRef = ref(stroage, `blog/${extractUniqueFileName}`);
  const uploadImg = uploadBytesResumable(stroageRef, file);

  return new Promise((resolve, reject) => {
    uploadImg.on(
      "state_changed",
      (snapshot) => {},
      (error) => reject(error),
      () => {
        getDownloadURL(uploadImg.snapshot.ref)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      }
    );
  });
}


export default function CreateBlog(){
    const { formData, setFormData } = useContext(GlobalContext);
    const [imageLoading, setImageLoading] = useState<boolean>(false);
    const { data: session } = useSession();
    const router = useRouter();
  
    // console.log(session, "session");
    
    async function handleBlogImageChange(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      if (!event.target.files) return;
      setImageLoading(true);
      const saveImageToFirebase: any = await handleImageSaveToFireBase(
        event.target.files[0]
      );
  
      if (saveImageToFirebase !== "") {
        setImageLoading(false);
        console.log(saveImageToFirebase, "saveImageToFirebase");
        setFormData({
          ...formData,
          image: saveImageToFirebase,
        });
      }
    }
  
    async function handleSaveBlogPost() {
      console.log(formData);
  
      const res = await fetch("/api/blogs/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // userid: session?.user?.name,
          // userimage: session?.user?.image,
          comment: [],
        }),
      });
  
      const data = await res.json();
  
      console.log(data, "data123");
  
      if (data && data.success) {
        setFormData(initialBlogFormData);
        router.push("/blogs");
      }
    }
  
    // console.log(formData, "formData");
    if(session?.user?.email === "admin@example.com"){
    return(
      <section className="overflow-hidden ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-10 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] px-8">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Create Your Own Blog Post
              </h2>
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className={`${imageLoading ? "w-1/2" : "w-full"}`}>
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Upload Blog Image
                      </label>
                      <input
                        id="fileinput"
                        accept="image/*"
                        max={1000000}
                        onChange={handleBlogImageChange}
                        type="file"
                        className="w-full mb-8 rounded-md border border-solid border-black py-3 px-6 text-primary text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primary dark:border-white  dark:shadow-signUp"
                      />
                    </div>
                    {imageLoading ? (
                      <div className="w-full">
                        <Spinner />
                      </div>
                    ) : null}
                  </div>

                  <div className="-mx-4 flex flex-wrap">
                    {formControls.map((control,key) => (
                      <div className="w-full px-4" key={key}>
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          {control.label}
                        </label>
                        {control.component === "input" ? (
                          <input
                            type={control.type}
                            name={control.id}
                            placeholder={control.placeholder}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event.target.value,
                              });
                            }}
                            value={formData[control.id as keyof BlogFormData]}
                            className="w-full mb-8 rounded-md border border-solid border-black py-3 px-6 text-black text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primary dark:text-white dark:border-white dark:shadow-signUp"
                          />
                        ) : control.component === "textarea" ? (
                          <textarea
                            placeholder={control.placeholder}
                            rows={5}
                            name={control.id}
                            onChange={(
                              event
                              : React.ChangeEvent<HTMLTextAreaElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event.target.value,
                              });
                            }}
                            value={formData[control.id as keyof BlogFormData]}
                            className="w-full resize-none rounded-md border border-solid border-black py-3 px-6 text-primary text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primary dark:border-white dark:shadow-signUp"
                          />
                        ): control.component === "markdowneditor" ? (
                          <MarkdownEditor
                            height="200px"
                            onChange={(
                              event
                              //: React.ChangeEvent<HTMLTextAreaElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event
                                //.target.value,
                              });
                            }}
                            // value={formData[control.id as keyof BlogFormData]}
                            // className="w-full resize-none rounded-md border border-solid py-3 px-6 text-black text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                          />
                        ) : control.component === "select" ? (
                          <select
                            name={control.id}
                            aria-placeholder={control.placeholder}
                    
                            onChange={(
                              event: React.ChangeEvent<HTMLSelectElement>
                            ) => {
                              setFormData({
                                ...formData,
                                [control.id]: event.target.value,
                              });
                            }}
                            value={formData[control.id as keyof BlogFormData]}
                            className="w-full mb-8 rounded-md border border-solid border-black py-3 px-6 text-primary bg-white text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primary dark:border-white dark:bg-black dark:shadow-signUp"
                          >
                            <option value={""} id="">
                              Select
                            </option>
                            {control.options.map((optionItem,key) => (
                              <option
                                key={key}
                                id={optionItem.value}
                                value={optionItem.value}
                              >
                                {optionItem.label}
                              </option>
                            ))}
                          </select>
                        ) : null}
                      </div>
                    ))}
                    <div className="w-full px-4 ">
                      <Button
                        text="Create New Blog"
                        onClick={handleSaveBlogPost}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );}
    else {
      return (
        <div className="flex flex-col gap-4">
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                    please login to create blog, please login as admin
                  </h2>
                  <Button
                    text="login"
                    onClick={() => router.push("/login")}
                  />
                </div>
      );
    }
}