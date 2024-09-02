import Link from "next/link";

export default function NewItem(){
    return(
        <div>
                        <div className="lg:flex lg:flex-row p-4 lg:p-0 lg:pt-4 lg:pb-4 mt-12 lg:mt-0 flex-1 mt-4 lg:border-b lg:border-primary-03">
                        <div className="flex-1">
                            <Link href="/">
                            <div
                                className="w-full h-0 relative"
                                style={{ paddingTop: "56%" }}
                            >
                                <img
                                alt="horizontal-item-thumbnail"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover"
                                sizes="100vh"
                                src="/"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: "0px",
                                    color: "transparent",
                                }}
                                />
                            </div>
                            </Link>
                        </div>
                        <div className="flex flex-col flex-1 lg:ml-6">
                            <div className="font-manrope lg:text-xl text-base text-secondary font-medium mt-6 lg:mt-0">
                            Remittance
                            </div>
                            <div className="flex-1 pt-2 pb-4">
                            <Link href="/">
                                <div
                                className="font-manrope lg:text-xl text-base  text-xl lg:text-2xl overflow-hidden text-ellipsis text-white"
                                style={{
                                    WebkitLineClamp: 3,
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                }}
                                >
                                Sending money to Vietnam from India – 3 ways to take
                                remittance to Vietnam from India
                                </div>
                            </Link>
                            </div>
                            <div className="flex flex-row">
                            <div className="flex-1">
                                <div className="font-manrope lg:text-xl text-base text-primary-04 text-base">
                                Tue Aug 27 2024
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
    )

}