import { mdiBug, mdiReact, mdiServerPlusOutline, mdiSpider, mdiTailwind, mdiTriangle, mdiWeb, mdiWebPlus } from "@mdi/js"
import Icon from "@mdi/react"
import Link from "next/link"

export default function page() {
    return <main className="">
        <div className="container m-auto primary-container rounded-box min-h-[14em] p-4 my-8 mb-4">
            <div className="flex md:flex-row flex-col gap-4 items-stretch justify-center">
                <article className="page h-[23em] bottom active medium middle-align md:w-1/2 w-full">
                    <div className="flex h-full flex-col">
                        <h1 className="text-start">Hooanime</h1>
                        <p className="md:w-fit md:text-start">
                            Anime Streaming platform based on crawling and fetching various APIs,
                            like anilist, anichart API, and various anime platfrms to provide the perfect
                            experience to the users,
                            with PWA support, WebWorkers, and half offline support.
                        </p>
                        <div className="mt-2">
                            <a target="_blank" href="https://ar.hooanime.com/">
                                <button className="button tertiary">
                                    <Icon path={mdiWeb} />
                                    Visit
                                </button>
                            </a>
                            <a target="_blank" href="https://hooanime.com/">
                                <button className="button tertiary">
                                    <Icon path={mdiWebPlus} />
                                    English Version
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="p-0 m-0 md:w-1/2 w-full h-[23em] tertiary page bottom active medium">
                    <img src="/hero.png" className="w-full h-full object-cover" />
                    <div className="w-full absolute flex flex-wrap items-center justify-center top-0 h-full">
                        <img className="w-[10em]" src="/projects/ar.hooanime/logo.svg" />
                    </div>
                </article>
            </div>
        </div>

        <div className="container m-auto my-12">
            <div className="p-8 w-full secondary-container rounded-box flex flex-wrap gap-2">
                <a className="chip secondary m-0" style={{ margin: 0 }} href="https://reactjs.org/">
                    <Icon path={mdiReact} />
                    React
                </a>
                <a className="chip secondary m-0" style={{ margin: 0 }} href="https://nextjs.org/">
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z" />
                    </svg>
                    Next
                </a>
                <a className="chip secondary m-0" style={{ margin: 0 }} href="https://tailwindcss.com/">
                    <Icon path={mdiTailwind} />
                    Tailwind
                </a>
                <div className="chip secondary m-0" style={{ margin: 0 }}>
                    <Icon className="p-[1px]" path={mdiSpider} />
                    Crawling
                </div>
                <div className="chip secondary m-0" style={{ margin: 0 }}>
                    <Icon path={mdiServerPlusOutline} />
                    Serverless
                </div>
                <a target="_blank" href="https://vercel.com/" className="chip secondary m-0" style={{ margin: 0 }}>
                    <Icon className="p-1" path={mdiTriangle} />
                    Vercel
                </a>
                <a target="_blank" href="https://jestjs.io/" className="chip secondary m-0" style={{ margin: 0 }}>
                    <Icon path={mdiBug} />
                    Jest
                </a>
            </div>
        </div>

        <div className="secondary-container rounded-t-3xl">
            <div className="container m-auto mt-16 ">
                <div className="w-full p-4 py-8 space-y-8 text-lg min-h-[15em]">
                    <div className="space-y-4">
                        <h1>
                            UI Interface
                        </h1>
                        <img src="/projects/ar.hooanime/0.png" className="rounded-box" alt="" />
                        <p>
                            Clean and stylish interface without any bloat,
                            designed to achieve the targeted user experience.
                            The interface is customizable with a wide range of
                            themes that users can select and apply.
                        </p>
                        <img src="/projects/ar.hooanime/00.png" className="rounded-box" alt="" />
                        <span className="block m-auto w-fit font-extrabold text-3xl">Clean, Modern, Fast</span>
                        <div className="flex md:flex-row flex-col gap-4">
                            <img src="/projects/ar.hooanime/000.png" className="rounded-box w-full md:w-1/2" alt="" />
                            <img src="/projects/ar.hooanime/0000.png" className="rounded-box w-full md:w-1/2" alt="" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1>
                            Architecture
                        </h1>
                        <img src="/projects/ar.hooanime/request.png" className="rounded-md w-full p-2 bg-white" alt="" />
                        <p>
                            Our App employs an efficient architecture to handle these complexe
                            requests and improve performance thanks to the Nextjs
                            and Vercel Architecture.<br /><br />
                            When a request is received, the App first checks
                            if the content is already cached. If it is,
                            the cached content is returned immediately.<br /><br /> If not,
                            the App fetches the required data
                            from multiple external services, caches the result for future
                            requests with different timeouts,
                            <br />
                            and then performs server-side rendering (SSR)
                            to generate the content.<br /><br /> Finally, the rendered content
                            is sent back to the client. This approach optimizes load
                            times by reducing redundant data fetching and rendering.
                        </p>
                        <h3>This Approche can be fine in most cases, but we need to make it better</h3>
                        <p>
                            This approach works well in most cases, but due to the unique
                            requirements of our app; we can't relay on the services and APIs speed response some times
                            the request can too slower, so we need to optimize it further.
                            Specifically, we aim to enhance caching strategies, improve
                            data fetching efficiency and user experience, and ensure seamless server-side rendering.
                            <br /><br />
                            By refining these processes, we can deliver an even faster and more
                            responsive user experience tailored to our application's specific needs.
                            <br />
                            before that to adress the problem this is the pagespeed analytics :
                            <div className="space-y-4 my-4">
                                <img src="/projects/benchmarking/old.png" className="w-full rounded-box" />
                                <img src="/projects/benchmarking/old-1.png" className="w-full rounded-box" />
                            </div>
                        </p>
                        <h2>Solutions</h2>
                        <div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Refactor Caching Strategy</h2>
                                <p className="pl-4">
                                    Implement an on-demand cache expiration mechanism to ensure that cached data is refreshed only when necessary, maintaining data accuracy while minimizing redundant fetch operations. This can be achieved by setting cache headers dynamically based on the specific needs of the application, allowing for fine-grained control over cache lifetimes.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Reduce Total Blocking Time (TBT)</h2>
                                <p className="pl-4">
                                    Move non-essential components to client-side rendering (CSR) and wrap them in React's <code className="primary p-1 rounded">Suspense</code> component. This will help defer the loading of these components, reducing the initial server-side rendering load and improving overall page load times. By offloading less critical components to the client side, the server can focus on rendering core elements faster.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Improve First Contentful Paint (FCP)</h2>
                                <p className="pl-4">
                                    Utilize the <code className="primary p-1 rounded">loading.js</code> file in Next.js to provide a custom loading indicator or skeleton screens, improving the perceived load time and providing immediate feedback to users while the main content is being fetched and rendered. This enhances user experience by making the app feel more responsive and interactive from the outset.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Additional Optimizations</h2>
                                <ul className="list-disc list-inside pl-4">
                                    <li><strong>Lazy Loading</strong>: Implement lazy loading for images and other non-critical resources to ensure that only the visible content is loaded initially. This reduces the initial load time and bandwidth usage, speeding up the time to interactive (TTI).</li>
                                    <li><strong>Image Optimization</strong>: Use Next.js's built-in image optimization capabilities to automatically serve appropriately sized and compressed images, further improving load times and reducing data usage.</li>
                                    <li><strong>Code Minification</strong>: Enable code minification (uglify) to reduce the size of JavaScript bundles, decreasing download times and improving overall performance.</li>
                                    <li><strong>Tree Shaking</strong>: Ensure tree shaking is properly configured to eliminate unused code from the final bundle, resulting in smaller and more efficient JavaScript files.</li>
                                </ul>
                            </div>
                            <h2>Results</h2>
                            <div className="space-y-4 my-4">
                                <img src="/projects/benchmarking/pagespeed/desktop-new-25-jun.png" className="w-full rounded-box" />
                                <img src="/projects/benchmarking/pagespeed/alpha-0-mob.png" className="w-full rounded-box" />
                            </div>
                            <p>To acheve this results we need to upate the whole app Architecture :</p>
                            <img src="/projects/benchmarking/schemas/hooanime-suspense.svg" className="w-full p-2 bg-white rounded-md my-4" />
                        </div>
                        <div>
                            <p>
                                We have consistently maintained and pushed bug and performance updates to the app for more than two years now.<br />
                                We have achieved really good results that we are proud of, making our app faster than many of our competitors
                                who don't even have a quarter of our features.
                            </p>
                        </div>
                        <Link target="_blank" href="https://ar.hooanime.com/" className="primary rounded-box flex gap-4 items-center justify-center p-4 text-3xl font-bold text-center">
                            <Icon className="w-[1.5em]" path={mdiWeb} />
                            <span>Give it a shot</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    </main>
}