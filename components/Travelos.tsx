import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiGraphql } from "@mdi/js";

export default function Travelos() {
    return <div className="container h-[30em] m-auto my-4 secondary-container rounded-box">
        <div className="w-full h-full secondary-container rounded-box">
            <video className={"object-cover w-full h-full secondary-container rounded-box"}
                src="https://raw.githubusercontent.com/adenlall/next-material-design-3/main/public/movie.webm"
                autoPlay loop />
            <div className="w-full h-full absolute top-0 rounded-xl"
                style={{ background: 'linear-gradient(var(--primary-container), #0000)' }} />
            <div className="absolute w-full flex items-center justify-center gap-2 top-0 p-4 primary-text">
                <span className="text-4xl font-extrabold">Featured Project</span>
                <Image alt="logo"
                    src={"/projects/travelo/logo.png"}
                    width={50} height={50}
                />
                <span className="text-4xl font-extrabold">Travelos Trips</span>
            </div>
            <div className="absolute top-[82%] w-full flex items-center justify-center">
                <Link target="_blank" href={"/projects/travelos"} className="button extra"
                    style={{ background: "transparent", backdropFilter: 'blur(11px)' }}>Check Out</Link>
                <Link target="_blank" href="https://travelos.vercel.app/api/graphql"
                    className="button secondary extra m-0" style={{ margin: 0, padding: 0 }}>
                    <Icon path={mdiGraphql} />
                </Link>
            </div>
        </div>
    </div>
}