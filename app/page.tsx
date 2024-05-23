import Project from "@/components/Project";
import Slider from "@/components/Slider";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="pb-2">
      <div className="container m-auto primary-container rounded-box min-h-[14em] p-4 my-8">
        <article className="page bottom active medium middle-align center-align">
          <div className="flex h-full flex-col items-center justify-center">
            <i className="extra">dynamic_form</i>
            <h3 className="center-align">fullstack developer</h3>
            <p>years over creating fullstack solutions built with most popular and latest technologies</p>
            <div className="space"></div>
            <nav className="center-align">
              <a href="https://adenlall.vercel.app/resume-adenlall.pdf" target="_blank">
              <button>
                <i>download</i>
                download my resume
              </button>
              </a>
            </nav>
          </div>
        </article>
        <Steps />
      </div>
      <div className="container primary-container rounded-box p-4 m-auto my-8">
        <h1>Projects</h1>
        <Slider margin={20} width={'20em'} data={[
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
    </main>
  );
}
