"use client"

// import { ui } from "beercss";
import { useEffect } from "react";

export default function Theme() {


    return <>
        <button
            className="circle"
            data-ui="#mdialog"
            onClick={() => {
                document.querySelector('#mdialog')?.classList.add("active");
                document.querySelector('.overlay')?.classList.add("active");
            }}
        >
            <i>light</i>
        </button>
        {/* <label className="switch icon">
            <input onClick={mode} type="checkbox" />
            <span>
                <i>dark_mode</i>
            </span>
        </label>

        <button className="circle cyan" onClick={() => { theme("#fff") }}/>
        <button className="circle yellow" onClick={() => { theme("#ffe763") }}/> */}

    </>
}