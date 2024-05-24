"use client"

import { mdiMaterialDesign } from "@mdi/js";
import Icon from "@mdi/react";

export default function Modal() {

    const theme = async (from: string) => {
        await ui("theme", from);
    };

    const mode = () => {
        let newMode = ui("mode") == "dark" ? "light" : "dark";
        ui("mode", newMode);
    }

    return <>
        {/* <dialog
            onClick={() => {
                // window.alert("hhhhhhhhhhhh");
                document.querySelector('#dialog').close();
                document.querySelector('#dialog-container').close();
            }}
            id="dialog-container"
            className="w-screen min-w-screen max-w-screen rounded-none min-h-screen max-h-screen h-screen absolute left-0 top-0 bg-black/30"
        > */}
        <dialog
            className="left" style={{maxWidth:'75vw', left:0}} id="mdialog">
            <h5 className="font-bold"><Icon className="w-[1.3em] h-[1.3em] mr-2" path={mdiMaterialDesign} /> Change Themes</h5>
            <div className="flex flex-wrap gap-0 my-8">
                <div className="w-full mb-4">
                    <h6>Dark mode</h6>
                </div>
                <label className="switch icon">
                    <input onClick={mode} type="checkbox" />
                    <span>
                        <i>dark_mode</i>
                    </span>
                </label>
            </div>
            <div className="flex flex-wrap gap-2 my-8">
                <div className="w-full mb-4">
                    <h6>Pick color</h6>
                </div>
                <button className="red3 border red-border circle m-0" onClick={() => theme('#ef9a9a')} />
                <button className="yellow7 border yellow-border circle m-0" onClick={() => theme('#fff59d')} />
                <button className="blue3 border blue-border circle m-0" onClick={() => theme('#90caf9')} />
                <button className="cyan3 border cyan-border circle m-0" onClick={() => theme('#80deea')} />
                <button className="brown3 border brown-border circle m-0" onClick={() => theme('#bcaaa4')} />
                <button className="purple3 border purple-border circle m-0" onClick={() => theme('#ce93d8')} />
                <button className="green3 border green-border circle m-0" onClick={() => theme('#a5d6a7')} />
            </div>
            {/* <nav className="right-align">
                <button onClick={() => {
                    document.querySelector('#mdialog')?.classList.remove("active");
                    document.querySelector('.overlay')?.classList.remove("active");
                }} className="border">Cancel</button>
                <button data-ui="#mdialog" >Confirm</button>
            </nav> */}
        </dialog>
        {/* </dialog> */}
    </>
}