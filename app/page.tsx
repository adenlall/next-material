import Current from "@/components/Current";
import Project from "@/components/Project";
import Slider from "@/components/Slider";
import Steps from "@/components/Steps";
import Icon from "@mdi/react";
import { mdiAnimationOutline, mdiAws, mdiBug, mdiDebian, mdiDocker, mdiGit, mdiGraphql, mdiLanguagePhp, mdiLanguageTypescript, mdiLaptop, mdiLaravel, mdiMaterialDesign, mdiNodejs, mdiPalette, mdiReact, mdiTailwind, mdiTriangle, mdiVuejs } from "@mdi/js";

import "beercss";
import "material-dynamic-colors";
import Link from "next/link";
import Image from "next/image";
import Travelos from "@/components/Travelos";

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
                <a target="_blank" href="https://adenlall.vercel.app/resume-adenlall.pdf">
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
      <div className="flex md:flex-row flex-col container m-auto gap-4 justify-center mb-4">
        <a target="_blank" className="p-0 m-0 md:w-1/2 w-full h-auto rounded-box tertiary flex items-center justify-center" href="mailto:adenlall@proton.me">
          <h2 style={{ fontSize: '5em' }} className="font-extrabold">
            Hire me
          </h2>
        </a>
        <Current />
      </div>

      <Travelos/>

      <ProfessionalProjects />
      <div className="my-4" />
      <SideProjects />

      <div className="w-full container m-auto">
        <div className="secondary-container md:h-[15em] h-auto px-8 my-4 mb-8 flex flex-col items-center justify-center rounded-box">
          <Steps />
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
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://www.php.net/">
            <Icon path={mdiLanguagePhp} />
            PHP
          </a>
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://www.typescriptlang.org/">
            <Icon path={mdiLanguageTypescript} />
            TypeScript
          </a>
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://laravel.com/">
            <Icon path={mdiLaravel} />
            Laravel
          </a>
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://expressjs.com/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
            Express
          </a>
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://nodejs.org/">
            <Icon path={mdiNodejs} />
            Node
          </a>
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://tailwindcss.com/">
            <Icon path={mdiTailwind} />
            Tailwind
          </a>
          <a className="chip secondary m-0" style={{ margin: 0 }} href="https://vuejs.org/">
            <Icon path={mdiVuejs} />
            Vue
          </a>
          <a target="_blank" href="https://graphql.org/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiGraphql} />
            GraphQL
          </a>
          <a target="_blank" href="https://www.docker.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiDocker} />
            Docker
          </a>
          <a target="_blank" href="https://reactnative.dev/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiReact} />
            RN
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
          <a target="_blank" href="https://www.mongodb.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.821 23.185s0-10.361.344-10.36c.266 0 .612 13.365.612 13.365-.476-.056-.956-2.199-.956-3.005zm6.668-10.24c-.919-4.016-2.932-7.469-5.708-10.134l-.007-.006a9.8 9.8 0 01-.895-1.732l-.024-.068.001.068c0 .565-.253 1.07-.652 1.409l-.003.002c-3.574 3.034-5.848 7.505-5.923 12.508v.013l-.001.208a15.1 15.1 0 006.07 12.115l.039.028.087.063q.241 1.784.412 3.576h.601c.166-1.491.39-2.796.683-4.076l-.046.239c.396-.275.742-.56 1.065-.869l-.003.003a14.143 14.143 0 004.549-10.404l-.001-.182v.009a16.341 16.341 0 00-.261-2.871l.015.099z" />
            </svg>
            MongoDB
          </a>
          <a target="_blank" href="https://expo.dev/" className="chip secondary m-0" style={{ margin: 0 }}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.292 15.547a3.927 3.927 0 004.115-3.145 2.57 2.57 0 00-2.161-1.177c-2.272-.052-3.491 2.651-1.953 4.323zm-9.177-10.85l5.359-3.104L18.766.63l-7.391 4.281.589.328 1.119.629 2.032-1.176zm6.046-3.39c.089.027.161.1.188.188l2.484 7.593a.285.285 0 01-.125.344 5.062 5.062 0 00-2.317 5.693 5.066 5.066 0 005.401 3.703.299.299 0 01.307.203l2.563 7.803a.3.3 0 01-.125.344l-7.859 4.771a.273.273 0 01-.131.036.262.262 0 01-.203-.041l-2.765-1.797a.311.311 0 01-.109-.129l-5.396-12.896-8.219 4.875c-.016.011-.037.021-.052.032a.293.293 0 01-.261-.021l-1.859-1.093a.283.283 0 01-.115-.381l7.953-15.749a.273.273 0 01.135-.131L18.615.045a.293.293 0 01.292-.005zm-8.322 5.1l-1.932-1.089-7.693 15.229 1.396.823 6.631-9.015a.281.281 0 01.271-.12.288.288 0 01.235.177l7.228 17.296 1.933 1.251-8.063-24.552zm13.406 10.557c-2.256 0-3.787-2.292-2.923-4.376.86-2.083 3.563-2.619 5.156-1.025.595.593.928 1.396.928 2.235a3.159 3.159 0 01-3.161 3.167z" />
            </svg>
            EXPO
          </a>
          <a target="_blank" href="https://m3.material.io/develop/web" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiMaterialDesign} />
            Material
          </a>
          <a target="_blank" href="https://daisyui.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiPalette} />
            DaisyUI
          </a>
          <a target="_blank" href="https://inertiajs.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width={500} height={500} rx={250} fill="url(#paint0_linear)" />
              <path d="M184 165H95l86 86-86 86h89l86-86-86-86z" />
              <path d="M318.5 165h-89l86 86-86 86h89l86-86-86-86z" />
            </svg>
            Inertia
          </a>
          <a target="_blank" href="https://www.gtk.org/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiLaptop} />
            GTK
          </a>
          <a target="_blank" href="https://www.debian.org/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiDebian} />
            Debian
          </a>
          <a target="_blank" href="https://aws.amazon.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiAws} />
            AWS
          </a>
          <a target="_blank" href="https://vercel.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon className="p-1" path={mdiTriangle} />
            Vercel
          </a>
          <a target="_blank" href="https://jestjs.io/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiBug} />
            Jest
          </a>
          <a target="_blank" href="https://pestphp.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiBug} />
            Pest
          </a>
          <a target="_blank" href="https://www.framer.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiAnimationOutline} />
            Framer
          </a>
          <a target="_blank" href="https://git-scm.com/" className="chip secondary m-0" style={{ margin: 0 }}>
            <Icon path={mdiGit} />
            GIT
          </a>
          <a target="_blank" href="https://redux.js.org/" className="chip secondary m-0" style={{ margin: 0 }}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.661 15.549a1.315 1.315 0 001.185-1.386 1.363 1.363 0 00-1.35-1.302h-.048a1.352 1.352 0 00-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 011.658-1.931 7.88 7.88 0 01-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z" />
              <path d="M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 001.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z" />
              <path d="M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 001.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z" />
            </svg>
            Redux
          </a>

        </div>
      </div>

    </main >
  )
}

function ProfessionalProjects() {
  return <div className="container tertiary-container rounded-box p-4 m-auto mt-0">
    <h1 className="large">Professional Projects</h1>
    <Slider margin={20} width={'auto'} data={[
      <Project
        button="Visit"
        brand={"Hooanime"}
        tags={["Nextjs", "ReactJS", "Nextjs-13", "Next-SEO", "Crawling", "Streaming"]}
        primary={"bg-[#e0edad]"} secondary={"#e0edad60"} img={"https://adenlall.vercel.app/projects/ar.hooanime/logo.png"}
        cover="https://adenlall.vercel.app/projects/ar.hooanime/1.png"
        href={"https://ar.hooanime.com/"}
        title="Anime streaming platform. with Suspense streaming and server actions with WPA support."
      />,
      <Project
        target="_self"
        brand={"Travelos"}
        button="Project Description"
        tags={["GraphQL", "Realy", "Nextjs"]}
        primary={"bg-[#d9ebe4]"} img={"https://adenlall.vercel.app/projects/travelo/logo.png"}
        cover="https://adenlall.vercel.app/projects/ar.hooanime/1.png"
        href={"/projects/travelos"}
        title="Travelos It allows users to explore destinations together, and gain insider knowledge from local experts."
      />,
      <Project
        brand={"AllAcc"}
        tags={["PHP", "Laravel", "React", "Inertia", "API", "AWS", "NGINX", "Platform"]}
        primary={"bg-[antiquewhite]"} secondary={"teal"} img="https://adenlall.vercel.app/projects/allacc/logo.png"
        cover="https://adenlall.vercel.app/projects/allacc/1.png"
        href={"https://github.com/adenlall/Allacc.tk"}
        title="Open source fully featured Linktree-like platform with customization tweaks and analytic system integrated"
      />,
      <Project
        brand={"Footymix"}
        button="Visit"
        tags={["Nextjs", "API", "Laravel", "AWS", "SEO", "GRAPHQL"]}
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
        title="A React Native Anilist clien for IOS and Android with authentication system"
      />,
      <Project
        brand={"salatok"}
        button="Visit"
        tags={["React", "Javascript", "TailwindCss", "DaisyUI", "SEO"]}
        primary={"bg-[#1fc5ed40]"} secondary={"#1fc5ed40"} img={"https://adenlall.vercel.app/projects/salatok/logo.png"}
        cover="https://adenlall.vercel.app/projects/salatok/1.png"
        href={"https://github.com/adenlall/salatok/"}
        title="Open source web application that provides offline prayer times and quran reader and player" />
    ]} />
  </div>
}


function SideProjects() {
  return <div className="container primary-container rounded-box p-4 m-auto mt-0">
    <h1 className="large">Side Projects</h1>
    <Slider margin={20} width={'auto'} data={[
      <Project
        brand={"adestore"}
        padImage={true}
        tags={["e-commerce", "Nextjs", "Shopify", "Headless", "Store"]}
        primary={"bg-[#808000]"} secondary={"#808000"} img={"https://adenlall.vercel.app/projects/adestore/logo.svg"}
        cover="https://adenlall.vercel.app/projects/adestore/0.png"
        href={"https://adestore.vercel.app/"}
        title="e-commerce headless stores built with Nextjs, shopify api and prisma, this store support cart and checkout"
      />,
      <Project
        brand={"salatokgtk"}
        button="Download - FlatHub"
        tags={["Javascript", "GTK", "Linux", "Desktop"]}
        primary={"bg-[teal]"} secondary={"#ffd556"} img="https://adenlall.vercel.app/projects/salatok-gtk/logo.svg"
        cover="https://adenlall.vercel.app/projects/salatok-gtk/2.png"
        href={"https://github.com/adenlall/salatok-gtk"}
        title="Open source desktop application that provides offline prayer times and related features."
      />,
      <Project
        brand={"bird game"}
        button="Play"
        tags={["Game", "Javascript", "Fun"]}
        primary={"bg-[#242938]"} img="/projects/bird/logo.svg"
        cover="/projects/bird/0.png"
        href={"https://bird-game-janah-bilal.vercel.app/"}
        title="The famous bird game with more extra features. The goal is to achieve the highest score possible."
      />,
    ]} />
  </div>
}