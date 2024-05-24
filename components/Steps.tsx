import { mdiCodeBlockBraces, mdiCodeBraces, mdiDebian, mdiDocker, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguagePhp, mdiLanguagePython, mdiLaravel, mdiMaterialDesign, mdiReact } from '@mdi/js';
import Icon from '@mdi/react';
export default function Steps() {
    return (
        <div className="m-auto flex sm:flex-row flex-col space-y-8 sm:space-y-0 w-[80%] my-8">
            <div className='flex w-full'>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2017 - Learning basic algorithms and data structures</div>
                    </button>
                    <div className="small-margin">
                        <Icon path={mdiLanguagePython} />
                    </div>
                </div>
                <div className="max divider w-[40%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2017 - Learning basic web technologies</div>
                    </button>
                    <div className="small-margin">
                        <Icon path={mdiLanguageHtml5} />
                        <Icon path={mdiLanguageCss3} />
                        <Icon path={mdiLanguageJavascript} />
                    </div>
                </div>
                <div className="max divider w-full"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2018 - Getting familiar with PHP and getting into back end development</div>
                    </button>
                    <div className="small-margin">
                        <Icon path={mdiLanguagePhp} />
                    </div>
                </div>
                <div className="max divider w-[50%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2018 - Focusing more on backend development and learning more technologies</div>
                    </button>
                    <div className="small-margin">
                        <Icon path={mdiLaravel} />
                        <Icon path={mdiDebian} />
                        <Icon path={mdiDocker} />
                    </div>
                </div>
                <div className="max divider sm:w-full invisible sm:visible"></div>
            </div>
            <div className='flex w-full'>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2019 - React was my first modern javascript frontend framework</div>
                    </button>
                    <div className="small-margin">
                        <Icon style={{ opacity: 0.8 }} path={mdiReact} />
                    </div>
                </div>
                <div className="max divider w-full"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2020 - Getting deep into frontend development by learning Nextjs</div>                    </button>
                    <div className="small-margin">

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#a)">
                                <path
                                    d="M11.214.006c-.052.005-.216.022-.364.033C7.442.347 4.25 2.186 2.226 5.013a11.88 11.88 0 00-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.3 0 1.611-.179 2.977-.578 4.323-1.265.207-.105.247-.134.219-.157-.02-.014-.899-1.194-1.955-2.62l-1.919-2.593-2.404-3.559a342.499 342.499 0 00-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596a.426.426 0 01-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 01-.157-.172l-.05-.105.005-4.704.007-4.706.073-.092a.644.644 0 01.174-.143c.096-.047.133-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 2 2.895 4.362l4.734 7.172 1.9 2.878.097-.063a12.318 12.318 0 002.465-2.163 11.947 11.947 0 002.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 00-2.498-.523c-.226-.024-1.776-.05-1.97-.03zm4.913 7.26a.473.473 0 01.237.276c.018.06.023 1.365.018 4.305l-.007 4.218-.743-1.14-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.478.478 0 01.232-.296c.097-.05.132-.054.5-.054.347 0 .408.005.486.047z"
                                />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path d="M0 0H24V24H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="max divider w-full"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2022 - Start descovering mobile apps with React Native and Expo</div>
                    </button>
                    <div className="small-margin">
                        <Icon path={mdiReact} />
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.292 15.547a3.927 3.927 0 004.115-3.145 2.57 2.57 0 00-2.161-1.177c-2.272-.052-3.491 2.651-1.953 4.323zm-9.177-10.85l5.359-3.104L18.766.63l-7.391 4.281.589.328 1.119.629 2.032-1.176zm6.046-3.39c.089.027.161.1.188.188l2.484 7.593a.285.285 0 01-.125.344 5.062 5.062 0 00-2.317 5.693 5.066 5.066 0 005.401 3.703.299.299 0 01.307.203l2.563 7.803a.3.3 0 01-.125.344l-7.859 4.771a.273.273 0 01-.131.036.262.262 0 01-.203-.041l-2.765-1.797a.311.311 0 01-.109-.129l-5.396-12.896-8.219 4.875c-.016.011-.037.021-.052.032a.293.293 0 01-.261-.021l-1.859-1.093a.283.283 0 01-.115-.381l7.953-15.749a.273.273 0 01.135-.131L18.615.045a.293.293 0 01.292-.005zm-8.322 5.1l-1.932-1.089-7.693 15.229 1.396.823 6.631-9.015a.281.281 0 01.271-.12.288.288 0 01.235.177l7.228 17.296 1.933 1.251-8.063-24.552zm13.406 10.557c-2.256 0-3.787-2.292-2.923-4.376.86-2.083 3.563-2.619 5.156-1.025.595.593.928 1.396.928 2.235a3.159 3.159 0 01-3.161 3.167z" />
                        </svg>
                    </div>
                </div>
                <div className="max divider w-[30%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <Icon path={mdiCodeBraces} />
                        <div className="tooltip">2024 - Learning "Material You" UI/UX design system</div>
                    </button>
                    <div className="small-margin">
                        <Icon path={mdiMaterialDesign} />
                    </div>
                </div>
            </div>
        </div>
    )
}