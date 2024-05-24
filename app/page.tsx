import Project from "@/components/Project";
import Slider from "@/components/Slider";
import Steps from "@/components/Steps";
import { mdiLaptopAccount } from "@mdi/js";
import Icon from "@mdi/react";


import "beercss";
import "material-dynamic-colors";


export default function Home() {
  return (
    <main className="pb-2 md:px-0 px-2">
      <div className="container m-auto primary-container rounded-box min-h-[14em] p-4 my-8 mb-4">
        <div className="flex md:flex-row flex-col gap-4 items-stretch justify-center">
          <article className="page h-[23em] bottom active medium middle-align center-align md:w-1/2 w-full">
            <div className="flex h-full flex-col md:items-start items-center justify-center">
              {/* <i className="w-[3em] h-[3em]"><Icon path={mdiLaptopAccount} /></i> */}
              <h1 className="md:w-min md:text-start">fullstack developer</h1>
              <p className="md:w-fit md:text-start">Years of experience in developing full-stack solutions using the most popular and up-to-date technologies.</p>
              <div className="space"></div>
              <nav className="md:m-0 m-auto">
                <a href="https://adenlall.vercel.app/resume-adenlall.pdf" target="_blank">
                  <button className="button tertiary">
                    <i>download</i>
                    download my resume
                  </button>
                </a>
              </nav>
            </div>
          </article>
          <article className="p-0 m-0 md:w-1/2 w-full h-auto h-[23em] tertiary page bottom active medium">
            <video className="w-full h-full object-cover" autoPlay loop preload={"auto"}>
              <source src="https://kstatic.googleusercontent.com/files/65da8f0326427a8e71bfa678348f3fa1a4bb1660e0b013591eb3bfd9df455bd5a3334249de61229029be7d2fd7cf18d4e143728b7e0702b6bde6251a9c64511a" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </article>
        </div>
      </div>
      <div className="container tertiary-container rounded-box p-4 m-auto mt-0">
        <h1 className="large">Projects</h1>
        <Slider margin={20} width={'auto'} data={[
          <Project
            brand={"AllAcc"}
            tags={["PHP", "Laravel", "React", "Inertia", "API", "AWS", "NGINX", "Platform"]}
            primary={"bg-[antiquewhite]"} secondary={"teal"} img="https://adenlall.vercel.app/projects/allacc/logo.png"
            cover="https://adenlall.vercel.app/projects/allacc/1.png"
            href={"https://github.com/adenlall/Allacc.tk"}
            title="Open source Linktree-like platform with customization tweaks and analytic system integrated"
          />,
          <Project
            brand={"adestore"}
            padImage={true}
            tags={["e-commerce", "NextJS", "Next-14", "Shopify", "Headless", "Store"]}
            primary={"bg-[#808000]"} secondary={"#808000"} img={"https://adenlall.vercel.app/projects/adestore/logo.svg"}
            cover="https://adenlall.vercel.app/projects/adestore/0.png"
            href={"https://adestore.vercel.app/"}
            title="e-commerce headless stores built with Nextjs 14 and shopify api, this store support cart and checkout"
          />,
          <Project
            brand={"salatokgtk"}
            tags={["Javascript", "GTK", "Linux", "Desktop"]}
            primary={"bg-[teal]"} secondary={"#ffd556"} img="https://adenlall.vercel.app/projects/salatok-gtk/logo.svg"
            cover="https://adenlall.vercel.app/projects/salatok-gtk/2.png"
            href={"https://github.com/adenlall/salatok-gtk"}
            title="Open source desktop application that provides offline prayer times and related features."
          />,
          <Project
            brand={"Footymix"}
            tags={["NextJS", "React", "PHP", "Laravel", "API", "AWS", "SEO", "GRAPHQL"]}
            primary={"bg-[#ea156a70]"} secondary={"purple"} img={"https://adenlall.vercel.app//misc/logo.png"}
            cover="https://adenlall.vercel.app/projects/footymix/1.png"
            href={"https://neal-inspired-okdztawxu-adenlall.vercel.app/"}
            title="Football Fixtures, Quizzes, Quotes and more. with high performence designed for large scale trafic"
          />,
          <Project
            brand={"adelist"}
            tags={["React", "Native", "IOS", "Android", "GRAPHQL"]}
            primary={"bg-[#280b0b]"} secondary={"orange"} img={"https://adenlall.vercel.app/projects/adelist/logo.svg"}
            cover="https://adenlall.vercel.app/projects/adelist/1.png"
            href={"https://github.com/adenlall/adelist/"}
            title="A React Native Anilist clien for IOS and Android with full features"
          />,
          <Project
            brand={"salatok"}
            tags={["React", "Javascript", "TailwindCss", "DaisyUI", "SEO"]}
            primary={"bg-[#1fc5ed40]"} secondary={"#1fc5ed40"} img={"https://adenlall.vercel.app/projects/salatok/logo.png"}
            cover="https://adenlall.vercel.app/projects/salatok/1.png"
            href={"https://github.com/adenlall/salatok/"}
            title="Open source web application that provides offline prayer times and quran reader and player" />
          ,
          <Project
            brand={"Hooanime"}
            tags={["NextJS", "ReactJS", "NextJS-13", "Next-SEO", "Crawling", "Streaming"]}
            primary={"bg-[#e0edad]"} secondary={"#e0edad60"} img={"https://adenlall.vercel.app/projects/ar.hooanime/logo.png"}
            cover="https://adenlall.vercel.app/projects/ar.hooanime/1.png"
            href={"https://ar.hooanime.com/"}
            title="Anime streaming platform crawling all data from various popular arabic anime websites"
          />
        ]} />
      </div>

      <div className="w-full container m-auto">
        <div className="secondary-container md:h-[15em] h-auto px-8 my-4 mb-8 flex flex-col items-center justify-center rounded-box">
          <Steps />
        </div>
      </div>

    </main >
  );
}
