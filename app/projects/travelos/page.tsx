import { mdiBug, mdiGithub, mdiGraphql, mdiLanguageTypescript, mdiNodejs, mdiReact, mdiTailwind, mdiTriangle } from "@mdi/js";
import Icon from "@mdi/react";
import "beercss";
import "material-dynamic-colors";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="pb-2 md:px-0 px-2">
            <div className="container m-auto primary-container rounded-box min-h-[14em] p-4 my-8 mb-4">
                <div className="flex md:flex-row flex-col gap-4 items-stretch justify-center">
                    <article className="page h-[23em] bottom active medium middle-align md:w-1/2 w-full">
                        <div className="flex h-full flex-col">
                            <h1 className="text-start">Travelos</h1>
                            <p className="md:w-fit md:text-start">
                                Travelos is a platform that connects travelers with potential trip companions and local guides. It allows users to find and connect with other like-minded individuals to share travel experiences, explore destinations together, and gain insider knowledge from local experts.
                            </p>
                            {/* <div className="space"></div> */}
                            <nav className="md:m-0 m-auto">
                                <a target="_blank" href="https://github.com/adenlall/travelos">
                                    <button className="button tertiary">
                                        <Icon path={mdiGithub} />
                                        GitHub Page
                                    </button>
                                </a>
                            </nav>
                        </div>
                    </article>
                    <article className="p-0 m-0 md:w-1/2 w-full h-auto h-[23em] tertiary page bottom active medium">
                        <img src="/0.jpg" className="w-full h-full object-cover" />
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
                    <a className="chip secondary m-0" style={{ margin: 0 }} href="https://www.typescriptlang.org/">
                        <Icon path={mdiLanguageTypescript} />
                        TypeScript
                    </a>
                    <a className="chip secondary m-0" style={{ margin: 0 }} href="https://nodejs.org/">
                        <Icon path={mdiNodejs} />
                        Node
                    </a>
                    <a className="chip secondary m-0" style={{ margin: 0 }} href="https://tailwindcss.com/">
                        <Icon path={mdiTailwind} />
                        Tailwind
                    </a>
                    <a target="_blank" href="https://graphql.org/" className="chip secondary m-0" style={{ margin: 0 }}>
                        <Icon path={mdiGraphql} />
                        GraphQL
                    </a>
                    <a target="_blank" href="https://www.postgresql.org/" className="chip secondary m-0" style={{ margin: 0 }}>
                        <svg
                            viewBox="-5 -8 44 44"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M22.839 0a13.59 13.59 0 00-3.677.536l-.083.027a15.132 15.132 0 00-2.276-.219c-1.573-.027-2.923.353-4.011.989C11.719.964 9.495.317 7.151.448c-1.629.088-3.411.583-4.735 1.979C1.104 3.818.407 5.974.552 8.912c.041.807.271 2.124.656 3.837.38 1.709.917 3.709 1.589 5.537.672 1.823 1.405 3.463 2.552 4.577.572.557 1.364 1.032 2.296.991.652-.027 1.24-.313 1.751-.735.249.328.516.468.755.599.308.167.599.281.907.355.552.14 1.495.323 2.599.135a5.083 5.083 0 001.167-.359l.047 1.307c.057 1.38.095 2.656.505 3.776.068.183.251 1.12.969 1.953.724.833 2.129 1.349 3.739 1.005 1.131-.24 2.573-.677 3.532-2.041.948-1.344 1.375-3.276 1.459-6.412.02-.172.047-.312.072-.448l.224.021h.027c1.208.052 2.521-.12 3.62-.631.968-.448 1.703-.901 2.239-1.708.131-.199.281-.443.319-.86.041-.411-.199-1.063-.595-1.364-.791-.604-1.291-.375-1.828-.26a8.698 8.698 0 01-1.599.192c1.541-2.593 2.645-5.353 3.276-7.792.375-1.443.584-2.771.599-3.932.021-1.161-.077-2.187-.771-3.077C28.481.802 25.423.03 23.059.005h-.219zm-.063.855c2.235-.021 5.093.604 7.145 3.228.464.589.6 1.448.584 2.511s-.213 2.328-.573 3.719c-.692 2.699-2.011 5.833-3.859 8.652a.847.847 0 00.208.115c.385.161 1.265.296 3.025-.063.443-.095.767-.156 1.105.099a.69.69 0 01.244.568.921.921 0 01-.177.448c-.339.509-1.009.995-1.869 1.396-.76.353-1.855.536-2.817.547-.489.005-.937-.032-1.319-.152l-.02-.004c-.147 1.411-.484 4.203-.704 5.473-.176 1.025-.484 1.844-1.072 2.453-.589.615-1.417.979-2.537 1.219-1.385.297-2.391-.021-3.041-.568s-.948-1.276-1.125-1.719c-.124-.307-.187-.703-.249-1.235a26.832 26.832 0 01-.136-1.911c-.041-1.12-.057-2.24-.041-3.365a4.092 4.092 0 01-2.068 1.016c-.921.156-1.739 0-2.228-.12a3.032 3.032 0 01-.693-.271c-.229-.12-.443-.255-.588-.527a.75.75 0 01-.073-.509.806.806 0 01.287-.443c.265-.215.615-.333 1.14-.443.959-.199 1.297-.333 1.5-.496.172-.135.371-.416.713-.828 0-.015 0-.036-.005-.052a3.961 3.961 0 01-1.771-.479c-.197.208-1.224 1.292-2.468 2.792-.521.624-1.099.984-1.713 1.011-.609.025-1.163-.281-1.631-.735-.937-.912-1.688-2.48-2.339-4.251s-1.177-3.744-1.557-5.421c-.375-1.683-.599-3.037-.631-3.688-.14-2.776.511-4.645 1.625-5.828s2.641-1.625 4.131-1.713c2.672-.151 5.213.781 5.724.979.989-.672 2.265-1.088 3.859-1.063a9.85 9.85 0 012.24.292l.027-.016a9.11 9.11 0 01.984-.28 12.864 12.864 0 012.76-.339zm.203.89h-.197c-.76.009-1.527.099-2.271.26 1.661.735 2.916 1.864 3.801 3 .615.781 1.12 1.64 1.505 2.557.152.355.251.651.303.88.031.115.047.213.057.312 0 .052.005.105-.021.193 0 .005-.005.016-.005.021.043 1.167-.249 1.957-.287 3.072-.025.808.183 1.756.235 2.792.047.973-.072 2.041-.703 3.093.052.063.099.125.151.193 1.672-2.636 2.88-5.547 3.521-8.032.344-1.339.525-2.552.541-3.509.016-.959-.161-1.657-.391-1.948-1.792-2.287-4.213-2.871-6.24-2.885zm-6.391.343c-1.572.005-2.703.48-3.561 1.193-.887.74-1.48 1.745-1.865 2.781-.464 1.224-.625 2.411-.688 3.219l.021-.011a6.787 6.787 0 011.771-.687c.667-.157 1.391-.204 2.041.052.657.249 1.193.848 1.391 1.749.939 4.344-.291 5.959-.744 7.177-.172.443-.323.891-.443 1.349.057-.011.115-.027.172-.032.323-.025.572.079.719.141.459.192.771.588.943 1.041a2.2 2.2 0 01.093.38.572.572 0 01.027.167 72.023 72.023 0 00.015 4.984c.032.719.079 1.349.136 1.849.057.495.135.875.188 1.005.171.427.421.984.875 1.364.448.381 1.093.631 2.276.381 1.025-.224 1.656-.527 2.077-.964.423-.443.672-1.052.833-1.984.245-1.401.729-5.464.787-6.224-.025-.579.057-1.021.245-1.36.187-.344.479-.557.735-.672.124-.057.244-.093.343-.125a13.47 13.47 0 00-.323-.432 6.04 6.04 0 01-.891-1.463 7.408 7.408 0 00-.344-.647c-.176-.317-.4-.719-.635-1.172-.469-.896-.979-1.989-1.245-3.052-.265-1.063-.301-2.161.376-2.932.599-.688 1.656-.973 3.233-.812-.047-.141-.072-.261-.151-.443a10.469 10.469 0 00-1.391-2.355c-1.339-1.713-3.511-3.412-6.859-3.469zm-8.853.068a7.72 7.72 0 00-.505.016c-1.349.079-2.62.468-3.532 1.432-.911.969-1.509 2.547-1.38 5.167.027.5.24 1.885.609 3.536.371 1.652.896 3.595 1.527 5.313.629 1.713 1.391 3.208 2.12 3.916.364.349.681.495.968.485.287-.016.636-.183 1.063-.693a57.33 57.33 0 012.412-2.729 4.666 4.666 0 01-1.552-4.203c.135-.984.156-1.907.135-2.636-.015-.708-.063-1.176-.063-1.473v-.032l-.005-.009c0-1.537.272-3.057.792-4.5.375-.996.928-2 1.76-2.819-.817-.271-2.271-.676-3.843-.755a7.764 7.764 0 00-.505-.016zm16.53 7.041c-.905.016-1.411.251-1.681.552-.376.433-.412 1.193-.177 2.131.233.937.719 1.984 1.172 2.855.224.437.443.828.619 1.145.183.323.313.547.391.745.073.177.157.333.24.479.349-.74.412-1.464.375-2.224-.047-.937-.265-1.896-.229-2.864.037-1.136.261-1.876.277-2.751a7.899 7.899 0 00-.985-.068zm-10.978.158c-.276 0-.552.036-.823.099a6.102 6.102 0 00-1.537.599 3.319 3.319 0 00-.463.303l-.032.025c.011.199.047.667.063 1.365.016.76 0 1.728-.145 2.776-.323 2.281 1.333 4.167 3.276 4.172.115-.469.301-.944.489-1.443.541-1.459 1.604-2.521.708-6.677-.145-.677-.437-.953-.839-1.109a1.935 1.935 0 00-.697-.109zm10.557.27h.068c.083.005.167.011.239.031a.532.532 0 01.183.073.21.21 0 01.099.145v.011a.386.386 0 01-.047.183.92.92 0 01-.145.197.875.875 0 01-.516.281.78.78 0 01-.547-.135 1.04 1.04 0 01-.172-.157.318.318 0 01-.084-.172.235.235 0 01.052-.171.69.69 0 01.157-.12c.129-.073.301-.125.5-.152.072-.009.145-.015.213-.02zm-10.428.224c.068 0 .147.005.22.015.208.032.385.084.525.167a.52.52 0 01.177.141.32.32 0 01.073.224.44.44 0 01-.1.208.847.847 0 01-.192.172.841.841 0 01-.599.151.96.96 0 01-.557-.301 1.061 1.061 0 01-.157-.219.36.36 0 01-.057-.24c.021-.14.141-.219.256-.26.131-.043.271-.057.411-.052zm12.079 9.791h-.005c-.192.073-.353.1-.489.163a.587.587 0 00-.317.285c-.089.152-.156.423-.136.885a.622.622 0 00.199.095c.224.068.609.115 1.036.109.849-.011 1.896-.208 2.453-.469a5.25 5.25 0 001.255-.817c-1.859.38-2.905.281-3.552.016a1.935 1.935 0 01-.443-.267zm-10.708.125h-.027c-.072.005-.172.032-.375.251-.464.52-.625.848-1.005 1.151-.385.307-.88.469-1.875.672a2.573 2.573 0 00-.615.192c.036.032.036.043.093.068.147.084.333.152.485.193.427.104 1.124.229 1.859.104.729-.125 1.489-.475 2.141-1.385.115-.156.124-.391.031-.641-.093-.244-.297-.463-.437-.52a1.033 1.033 0 00-.276-.084z" />
                        </svg>
                        PostgreSQL
                    </a>
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

            <div className="container h-[30em] m-auto my-4 secondary-container rounded-box">
                <div className="w-full h-full secondary-container rounded-box">
                    <video className={"object-cover w-full h-full secondary-container rounded-box"} src="/movie.mp4" autoPlay loop />
                    <div className="w-full h-full absolute top-0 rounded-xl" style={{ background: 'linear-gradient(var(--primary-container), #0000)' }} />
                    <div className="absolute flex items-center gap-2 top-0 p-4 primary-text">
                        <Image alt="logo"
                            src={"/projects/travelos/logo.png"}
                            width={50} height={50}
                        />
                        <span className="text-4xl font-extrabold">the new trip experience</span>
                    </div>
                    <div className="absolute top-[82%] w-full flex items-center justify-center">
                        <Link target="_blank" href={"https://travelos.vercel.app/api/graphql"} className="button extra" style={{background:"transparent", backdropFilter:'blur(11px)'}}>Check Out</Link>
                        <Link target="_blank" href="https://travelos.vercel.app/api/graphql"
                            className="button secondary extra m-0" style={{ margin: 0, padding: 0 }}>
                            <Icon path={mdiGraphql} />
                        </Link>
                    </div>
                </div>
            </div>


            <div className="secondary-container rounded-t-box">
                <div className="container m-auto mt-16 ">
                    <div className="w-full p-4 py-8 text-lg min-h-[15em]">
                        <h2>Target Audience</h2>
                        <p>
                            Travelos is designed for adventurous travelers seeking companionship
                            and authentic experiences,
                            as well as local experts eager to share their unique insights and
                            knowledge with curious explorers.
                        </p>
                        <div className="h-[5em] rounded-box my-8 flex items-center justify-center" style={{ background: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h2 className="font-bold">Other Solution</h2>
                        </div>
                        <h3>Google Travel</h3>
                        <div className="flex md:flex-row flex-col gap-6 my-4">
                            <img src="/google-travel.jpg" className="rounded-box md:w-1/2 w-full" />
                            <p className="md:w-1/2 w-full indent-8">
                                While <strong>Google Travel</strong> primarily focuses on providing users
                                with tools for planning and booking trips, including flight
                                and hotel searches, itinerary management, and travel recommendations,
                                <br />
                                <strong>Travelos</strong> distinguishes itself by fostering community and connection.
                                <strong>Travelos</strong> connects travelers with potential trip companions and local guides,
                                allowing users to share experiences, explore destinations together,
                                and benefit from the insider knowledge of local experts.
                                This social and experiential approach creates a more personalized and
                                interactive travel experience compared to the primarily informational
                                and transactional nature of <strong>Google Travel</strong>.
                            </p>
                        </div>
                        <hr style={{ borderColor: 'var(--primary)' }} className="my-8" />
                        <h3>Roadtrippers</h3>
                        <div className="flex md:flex-row flex-col-reverse gap-6 my-4">
                            <p className="md:w-1/2 w-full indent-8">
                                While <strong>Travelos</strong> connects travelers with potential
                                trip companions and local guides to facilitate shared
                                experiences and provide insider knowledge, fostering a
                                community-oriented and authentic travel experience,
                                <strong>Roadtrippers</strong> primarily aids users in planning and optimizing
                                road trips by offering detailed itineraries, interactive
                                maps, and information on points of interest,
                                accommodations, and dining options along their routes.
                            </p>
                            <img src="/roadtrippers.webp" className="rounded-box md:w-1/2 w-full" />
                        </div>
                        <hr style={{ borderColor: 'var(--primary)' }} className="my-8" />
                        <div className="h-[5em] rounded-box my-16 flex items-center justify-center" style={{ background: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h2 className="font-bold">Technical Review</h2>
                        </div>
                        <p>
                            Travelos's technical stack includes a Relay-compliant
                            GraphQL API built with PostgreSQL, Prisma, and Pothos,
                            providing efficient data fetching, type safety,
                            and seamless schema management for a robust and scalable platform.
                        </p>
                        <img className="rounded-box my-6" src="/graphql/query.png" />
                        <p>
                            <strong>I use GraphQL</strong> a query language for my API,
                            allowing clients to request exactly the data they need.
                            This is crucial for efficient data fetching,
                            especially in a platform like Travelos where users might
                            need specific information about travelers, trips, and guides.
                        </p>
                        <br />
                        <p>
                            <strong>Relay Compliant</strong>, I Ensures that my GraphQL API follows
                            the conventions and patterns required by Relay,
                            a JavaScript framework for building data-driven React
                            applications. This compliance means my API supports
                            features like pagination, mutations, and subscriptions
                            in a way that's optimized for performance and usability,
                            <img className="rounded-box my-6" src="/graphql/relay.png" />
                            because simply GraphQL without Relay is meaningless.
                        </p>
                        <h3 className="text-2xl mt-8">Benefits of This Stack</h3>
                        <p>
                            <ul className="list-disc">
                                <li>
                                    <span className="font-bold">Type Safety</span>
                                    <p className="pl-4">
                                        Both Prisma and Pothos are designed to
                                        work seamlessly with TypeScript, providing type safety
                                        throughout your application. This reduces runtime errors
                                        and makes your codebase easier to maintain.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-bold">Efficient Data Fetching</span>
                                    <p className="pl-4">
                                        GraphQL and Relay compliance
                                        ensure that clients can fetch exactly the data they need,
                                        minimizing over-fetching and under-fetching issues.
                                        This is crucial for performance, especially in mobile
                                        applications or in regions with limited bandwidth.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-bold">Scalability</span>
                                    <p className="pl-4">
                                        PostgreSQL is known for handling large
                                        datasets and complex queries efficiently, making it a
                                        good fit for a growing platform like Travelos.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-bold">Developer Efficiency</span>
                                    <p className="pl-4">
                                        Prisma's auto-generated queries
                                        and mutations, combined with Pothos's schema builder,
                                        significantly speed up development time. Developers
                                        can focus more on business logic rather than boilerplate
                                        code.
                                    </p>
                                </li>
                            </ul>
                            <h2>Graphql server</h2>
                            <img className="w-full rounded-box my-4" loading="lazy" src="https://www.nocountryforgeeks.com/assets/images/posts/2019-08-22-contruye-un-server-graphql-con-prisma/coverPage.jpg" />
                            <p>
                                Deploying a GraphQL server using Pothos
                                and Prisma in a <b>serverless environment</b> like
                                Vercel presents several challenges.
                                <ul className="list list-disc pl-8">
                                    <li>
                                        Firstly,
                                        the <b>stateless nature of serverless functions</b>
                                        can complicate database connections,
                                        requiring careful management of connection
                                        pooling and potential cold starts.
                                    </li>
                                    <li>
                                        Additionally, configuring the Pothos schema
                                        to efficiently handle data fetching while
                                        ensuring optimal performance in a serverless
                                        context can be tricky.
                                    </li>
                                    <li>
                                        Lastly,<b>debugging</b> issues in a serverless setup may be more
                                        complex due to the lack of persistent logs
                                        and the ephemeral nature of the execution
                                        environment, making it hard to trace
                                        errors effectively.
                                    </li>
                                </ul>
                                <h3>Solution</h3>
                                <p className="pl-8">
                                    To enhance Prisma's performance and streamline database connections in a serverless environment using Neon and the Relay framework, consider the following solutions:
                                    <ul className="space-y-6 my-4">
                                        <li>
                                            <h4>Neon Database with Prisma</h4>
                                            <ul className="pl-8 my-4 list-disc space-y-2">
                                                <li>
                                                    <b>Serverless Database:</b> Use Neon, a serverless PostgreSQL database that automatically scales with demand. This reduces the overhead of managing database connections.
                                                </li>
                                                <li>
                                                    <b>Connection Pooling: </b> Neon provides built-in connection pooling, which helps maintain persistent connections and minimizes latency. Configure Prisma to utilize Neon’s pooling capabilities effectively.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Prisma Optimization</h4>
                                            <ul className="pl-8 my-4 list-disc space-y-2">
                                                <li>
                                                    <b>Batching Queries:</b> Use Prisma's capabilities to batch queries and reduce the number of database calls. This can be done by leveraging features like include and select to fetch related data in fewer requests.
                                                </li>
                                                <li>
                                                    <b>Prisma Middleware:</b> Implement middleware to log and optimize queries, allowing you to monitor performance and make adjustments as necessary.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Relay Framework</h4>
                                            <ul className="pl-8 my-4 list-disc space-y-2">
                                                <li>
                                                    <b>Efficient Data Fetching:</b> Relay's pagination and data fetching strategies can help manage large datasets efficiently, reducing the load on your server and database.
                                                </li>
                                                <li>
                                                    <b>Client-Side Caching:</b> Utilize Relay's built-in caching mechanisms to minimize the number of requests made to your GraphQL server, leading to faster responses.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Warm-Up Strategies</h4>
                                            <ul className="pl-8 my-4 list-disc space-y-2">
                                                <li>
                                                    <b>Keep Functions Warm:</b> Schedule warm-up requests to your serverless functions to minimize cold start times. This can improve the initial response time for users.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Monitoring and Optimization</h4>
                                            <ul className="pl-8 my-4 list-disc space-y-2">
                                                <li>
                                                    <b>Performance Monitoring:</b> Use tools like Grafana or DataDog to monitor the performance of your Prisma queries and Neon database, allowing you to identify bottlenecks and optimize accordingly.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                            </p>
                            <div className="h-[5em] rounded-box my-8 flex items-center justify-center" style={{ background: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <h2 className="font-bold">Try Graphql Serverless</h2>
                            </div>
                            <div className="w-full h-[25em] overflow-hidden rounded-box primary">
                                <iframe scrolling="no" className="overflow-hidden" src="https://travelos.vercel.app/api/graphql?query=query%7B%0A++locations%7B%0A++++city%0A++%7D%0A%7D" width={'100%'} height={'100%'} />
                            </div>
                            <h3>Globale Archetecture Overview :</h3>
                            <img loading="lazy" className="w-full rounded-box my-4" src="https://miro.medium.com/v2/resize:fit:1006/1*pkNbdH2AeUWOZbvxitMwzA.png" />
                            <p>
                                Deploying a GraphQL server with Pothos
                                and Prisma in a serverless environment
                                offers scaling potential through automatic
                                horizontal scaling and efficient data
                                fetching. Utilizing Neon for database
                                pooling and caching strategies enhances
                                performance under load.<br /><br />
                                Implementing monitoring tools and
                                asynchronous processing further ensures
                                reliability and responsiveness during
                                peak traffic.
                            </p>
                        </p>
                    </div>
                </div>
            </div>

        </main >
    );
}