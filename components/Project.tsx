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
    secondary
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
}) {
    return (
        <article className="no-padding h-[33.5em]">
            {
                img ? (
                    <img className={"responsive large " + primary + (padImage ? " p-4" : "")} src={img} />
                ) : ""
            }
            <div className="padding flex flex-col justify-evenly h-[15em]">
                <div>
                    <h4 className="small">{brand}</h4>
                    <div className="flex gap-1">
                        {tags?.map(function (item, i) {
                            if (i < 3) {
                                return (
                                    <span key={crypto.randomUUID()} style={{margin:0}} className="chip small round text-sm">
                                        {item}
                                    </span>
                                )
                            }else{
                                return <></>
                            }
                        }
                        )}
                    </div>
                    <p className="text-xs">{title}</p>
                </div>
                <nav>
                    <a href={href ?? "/"} target="_blank">
                        <button className="button primary">Visit</button>
                    </a>
                </nav>
            </div>
        </article>
    );
}