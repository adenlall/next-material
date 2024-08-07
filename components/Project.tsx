import Link from "next/link";

export default function Project({
    img,
    title,
    href,
    tags,
    className,
    cover,
    primary,
    brand,
    padImage,
    secondary,
    button,
    target
}: {
    href?: string,
    img?: string;
    title?: string;
    cover?: string;
    primary?: string;
    secondary?: string;
    className?: string;
    padImage?: boolean;
    brand?: string
    tags?: Array<string>
    button?: string
    target?: string
}) {
    return (
        <article className="no-padding md:w-[20em] w-[17em] h-[32em] md:h-[33.5em]">
            {
                img ? (
                    <img className={"responsive large " + primary + (padImage ? " p-4" : "")} src={img} />
                ) : ""
            }
            <div className="padding flex flex-col justify-evenly h-[12em] md:h-[15em]">
                <div>
                    <h4 className="small mb-1">{brand}</h4>
                    <div className="md:flex hidden gap-1">
                        {tags?.slice(0,3)?.map(function (item, i) {
                            return (
                                <span key={crypto.randomUUID()} style={{ margin: 0 }} className="chip small round text-sm">
                                    {item}
                                </span>
                            )
                        }
                        )}
                    </div>
                    <p className="text-xs md:my-2 my-0">{title}</p>
                </div>
                <nav className="">
                    <Link href={href ?? "/"} target={target ?? "_blank"}>
                        <button style={{ margin: 0 }} className="button primary">{button ?? "GitHub"}</button>
                    </Link>
                </nav>
            </div>
        </article>
    );
}