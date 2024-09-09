import Image from "next/image";
import Link from "next/link";

// import { LastesNews } from "../LastesNews";
// import ImageSlider from "../ImageSlider";
import {useTranslations} from 'next-intl';



export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="container mx-auto w-9/10">
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {t('title')}
                </h1>
                <p className="mb-12 text-white font-medium !leading-relaxed text-body-color  dark:opacity-90 sm:text-lg md:text-xl">
                  {t('description')}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  className="rounded-md bg-keyColor1 dark:bg-keyColor py-4 px-8 text-base font-semibold text-black 
                  hover:bg-keyColor1/80 dark:hover:bg-keyColor/80"
                  href={"/blogs"}
                >
                  {t('button-title')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>

  );
}
