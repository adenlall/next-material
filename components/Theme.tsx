"use client"

// import { ui } from "beercss";
import { useEffect } from "react";

export default function Theme() {

    useEffect(()=>{
        console.log("dddddddddddddd");
        theme("https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg");
        ui("mode", "light")
    },[])
    const theme = async (from:string) => {
        await ui("theme", from);
    };

    const mode = () => {
        let newMode = ui("mode") == "dark" ? "light" : "dark";
        ui("mode", newMode);
    }

    return <>
    <button onClick={mode}>mode</button>
        <button onClick={async()=>{await theme("https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg")}}>img 1</button>
        <button onClick={async()=>{await theme("https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg")}}>img 2</button>
    </>
}