"use client";

import { Blog } from "@/utils/types";
import Button from "../button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { categories } from "@/utils";
import Link from "next/link";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useTranslations } from "next-intl";
export default function CategoryList({ list }: { list: Blog[] }) {
  console.log(list, "list");
  const t = useTranslations('Category');

  const router = useRouter();

  const getMaxId = Math.max(...list.map((item) => item.id));

  console.log(getMaxId);

  const getLatestBlogForCurrentCategory =
    list && list.length ? list.find((item) => item.id === getMaxId) : null;

  const relatedBlogs =
    list && list.length ? list.filter((item) => item.id !== getMaxId) : [];

  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              {getLatestBlogForCurrentCategory === null ? (
                <div className="flex flex-col gap-4">
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                    {t("noBlogs")}
                  </h2>
                  <Button
                    text={t("btn")}
                    onClick={() => router.push("/create-blog")}
                  />
                </div>
              ) : (
                <div>
                  <Link  href={`/blogs/${getLatestBlogForCurrentCategory?.id}`}>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                    {getLatestBlogForCurrentCategory?.title}
                  </h2>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={getLatestBlogForCurrentCategory?.image || ""}
                        alt="Blog"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <MarkdownPreview source={getLatestBlogForCurrentCategory?.content}/>
                  {/* <p className="mb-8 leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {getLatestBlogForCurrentCategory?.content}
                  </p> */}
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  {t("filter")}
                </h3>
                <div className="flex flex-wrap py-6 px-8">
                  {categories.map((catItem,key) => (
                    <button
                      key={key}
                      onClick={() => router.push(`/category/${catItem.value}`)}
                      className="mr-3 mb-3 inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-primary duration-300"
                    >
                      {catItem.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  {t("relateBlogs")}
                </h3>
                <ul className="p-8">
                  {relatedBlogs && relatedBlogs.length ? (
                    relatedBlogs.map((item) => (
                      <li
                        className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                        key={item.id}
                      >
                        <Link
                                href={`/blogs/${item.id}`}
                                className="mb-[8px] block text-base font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary"
                              >
                        <div className="flex items-center lg:block xl:flex">
                          <div className="mr-5 lg:mb-3 xl:mb-0">
                            <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
                              <Image src={item.image} alt="Blog" fill />
                            </div>
                          </div>
                          <div className="w-full">
                            <h5>
                                {item.title}
                            </h5>
                          </div>
                        </div>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <h1>{t("noRelateBlogs")}</h1>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}