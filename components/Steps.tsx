import { mdiCodeBlockBraces, mdiCodeBraces, mdiDebian, mdiDocker, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguagePhp, mdiLanguagePython, mdiLaravel, mdiMaterialDesign, mdiReact } from '@mdi/js';
import Icon from '@mdi/react';
export default function Steps() {
    return (
        <div className="m-auto flex md:flex-row flex-col w-full space-y-8 md:space-y-0 my-8">
            <div className='flex w-full'>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2017 - Learning basic algorithms and data structures</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <Icon path={mdiLanguagePython} />
                    </div>
                </div>
                <div className="max divider w-[40%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2017 - Learning basic web technologies</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <svg
                            id="_x32_"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 460 460"
                        >
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    className="st0"
                                    d="M193.431 261.016L211.237 261.016 318.569 261.016 312.062 334.41 256 348.67 199.938 334.41 196.059 290.703 138.856 290.703 146.742 379.683 256 407.465 365.262 379.683 380.403 208.788 188.801 208.788 183.74 151.682 385.467 151.682 390.52 94.696 121.481 94.696 136.224 261.016z"
                                />
                            </g>
                        </svg>

                        <svg
                            viewBox="-150 -55 1234 1234"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M190 226l-30 149h604l-19 96H141l-30 148h604l-33 169-244 81-211-81 15-73H93L58 893l349 133 402-133 133-667H190z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562 562">
                            <path d="M218.195 257.521c0 64.719 4.624 119.1-27.309 151.283-17.961 18.105-46.301 28.772-81.17 28.772-57.192 0-88.947-27.862-109.215-66.416 19.512-12.459 39.452-24.502 59.775-36.154 8.292 23.188 36.291 49.258 67.888 33.21 20.027-10.18 17.715-41.04 17.715-74.537V81.151c-.063-1.044-.125-2.087.732-2.214h71.585l-.001 178.584zm181.532-42.059c-18.247-7.814-40.928-17.058-46.488-33.952-6.233-18.934 4.396-34.533 16.231-39.841 26.023-11.688 57.038 7.556 63.463 27.301 19.583-11.657 39.103-23.384 56.826-36.896-20.826-34.584-51.354-59.342-107.003-57.561-30.64.979-53.657 10.652-70.841 25.088-16.771 14.085-29.721 33.854-31.737 61.989-6.025 84.212 56.988 105.708 110.695 129.137 16.93 7.385 35.751 14.842 43.54 29.517 16.061 30.282-12.389 50.26-36.898 52.397-39.336 3.427-65.858-19.587-81.175-43.54-19.133 11.86-39.938 22.045-58.298 34.683 25.537 44.908 67.409 73.98 132.831 73.793 66.74-.188 116.219-32.366 120.281-92.977 5.523-82.384-56.198-105.495-111.427-129.138z" />
                        </svg>
                    </div>
                </div>
                <div className="max divider w-full"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2018 - Getting familiar with PHP and getting into back end development</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 552 552">
                            <path d="M171.844 204.374c-11.137-12.748-28.856-19.123-53.146-19.123H37.96L.5 377.99h41.984l9.96-51.241h35.963c15.869 0 28.923-1.663 39.173-5.003 10.247-3.33 19.562-8.92 27.945-16.767 7.037-6.467 12.725-13.599 17.087-21.4 4.354-7.797 7.448-16.401 9.278-25.812 4.443-22.848 1.09-40.643-10.046-53.393zm-33.351 50.449c-2.903 14.917-8.492 25.563-16.775 31.941-8.288 6.38-20.897 9.569-37.822 9.569H58.354l15.678-80.667H102.8c15.952 0 26.582 2.943 31.896 8.832 5.31 5.892 6.579 15.999 3.797 30.325zm199.335-17.764l-17.429 89.69h-42.317l16.572-85.278c1.884-9.702 1.193-16.32-2.084-19.847-3.272-3.529-10.242-5.296-20.9-5.296h-33.289l-21.458 110.421h-41.656l37.46-192.739h41.656l-9.959 51.241h37.111c23.346 0 39.452 4.077 48.317 12.218 8.866 8.146 11.519 21.344 7.976 39.59zm161.726-32.685c-11.137-12.748-28.856-19.123-53.142-19.123h-80.738l-37.46 192.739h41.984l9.96-51.241h35.963c15.869 0 28.918-1.663 39.169-5.003 10.247-3.33 19.562-8.92 27.945-16.767 7.036-6.467 12.729-13.599 17.088-21.4 4.354-7.797 7.447-16.401 9.277-25.812 4.442-22.848 1.094-40.643-10.046-53.393zm-33.348 50.449c-2.902 14.917-8.491 25.563-16.779 31.941-8.284 6.38-20.896 9.569-37.822 9.569h-25.537l15.678-80.667h28.765c15.952 0 26.581 2.943 31.899 8.832 5.31 5.892 6.574 15.999 3.796 30.325z" />
                        </svg>
                    </div>
                </div>
                <div className="max divider w-[50%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2018 - Focusing more on backend development and learning more technologies</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <svg viewBox="-100 0 662 662" xmlns="http://www.w3.org/2000/svg">
                            <path d="M505.57 234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78 39.78 0 00-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06 1.5-28.14 4.48-14 2.29-35.11 5.77-38.31 6.07l-.71.06-.69.13c-10 1.78-16.62 6.22-19.56 13.19-1.55 3.68-3.22 11.15 2.94 19.86 1.53 2.22 6.83 9.56 15.94 22.17 6.06 8.4 12.87 17.82 18.75 26L259.9 275 150.66 96.05l-.2-.34-.23-.33-.44-.65C145.32 88.17 139.76 80 123.7 80c-1.13 0-2.31 0-3.63.11-4.6.25-21.42 1.57-40.89 3.11-21.49 1.69-50.9 4-54.72 4.1h-.73l-.79.08c-9.14.89-15.77 4.6-19.7 11-6.55 10.69-1.42 22.69.26 26.63C6.87 133 37.56 197.7 64.63 254.81c18 37.94 36.58 77.17 38.1 80.65a34.85 34.85 0 0032.94 21.59 46.62 46.62 0 009.86-1.1h.21l.2-.05c13.86-3.38 57.83-14.54 89.2-22.59 1.9 3.32 3.9 6.83 6 10.44 21.93 38.5 37.9 66.35 43.16 73.46C287 421 295 432 310.06 432c5.46 0 10.46-1.4 15.74-2.89l1.53-.43h.12c10.53-3 150.69-52.16 157.87-55.35l.22-.1c5.44-2.41 13.66-6.05 16.18-15.4 1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54 17.37-4.5 38.8-10.11 43.38-11.55 11.47-3.43 14.94-10.69 16-14.73.79-3.15 1.82-11.2-5.9-18.85zm-320 58.19c-17.81 4.17-30.22 7.08-37.89 8.9-6.67-13.34-19.74-39.65-32.5-65.33-29.74-59.92-45.1-90.77-53.18-106.9l8.15-.7c13.34-1.15 31.61-2.72 41.78-3.57 16.76 28.26 74.32 125.3 96.3 162.3zM427.58 172zM310.06 416.4zm53.67-56.95c-24.21 8-37.33 12.37-44.42 14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5 6.81 14.57 19.72 33.46 44.93-18.07 6.04-48.2 16.02-72.27 24zm55.87-121.63l-23.76-31.53c13.67-2.39 21.54-3.77 26.15-4.6l12 14.88 11.94 14.82c-8.2 1.99-17.74 4.32-26.33 6.43z" />
                        </svg>
                        <Icon path={mdiDebian} />
                        <Icon path={mdiDocker} />
                    </div>
                </div>
                <div className="max divider md:w-full invisible md:visible"></div>
            </div>
            <div className='flex w-full'>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2019 - React was my first modern javascript frontend framework</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <Icon style={{ opacity: 0.8 }} path={mdiReact} />
                    </div>
                </div>
                <div className="max divider w-[50%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2020 - Getting deep into frontend development by learning Nextjs</div>                    </button>
                    <div className="small-margin secondary p-1">
                        <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="max divider w-full"></div>
                <div className="center-align">
                    <button className="circle small">
                        <i>done</i>
                        <div className="tooltip">2022 - Start descovering mobile apps with React Native and Expo</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <Icon path={mdiReact} />
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.292 15.547a3.927 3.927 0 004.115-3.145 2.57 2.57 0 00-2.161-1.177c-2.272-.052-3.491 2.651-1.953 4.323zm-9.177-10.85l5.359-3.104L18.766.63l-7.391 4.281.589.328 1.119.629 2.032-1.176zm6.046-3.39c.089.027.161.1.188.188l2.484 7.593a.285.285 0 01-.125.344 5.062 5.062 0 00-2.317 5.693 5.066 5.066 0 005.401 3.703.299.299 0 01.307.203l2.563 7.803a.3.3 0 01-.125.344l-7.859 4.771a.273.273 0 01-.131.036.262.262 0 01-.203-.041l-2.765-1.797a.311.311 0 01-.109-.129l-5.396-12.896-8.219 4.875c-.016.011-.037.021-.052.032a.293.293 0 01-.261-.021l-1.859-1.093a.283.283 0 01-.115-.381l7.953-15.749a.273.273 0 01.135-.131L18.615.045a.293.293 0 01.292-.005zm-8.322 5.1l-1.932-1.089-7.693 15.229 1.396.823 6.631-9.015a.281.281 0 01.271-.12.288.288 0 01.235.177l7.228 17.296 1.933 1.251-8.063-24.552zm13.406 10.557c-2.256 0-3.787-2.292-2.923-4.376.86-2.083 3.563-2.619 5.156-1.025.595.593.928 1.396.928 2.235a3.159 3.159 0 01-3.161 3.167z" />
                        </svg>
                    </div>
                </div>
                <div className="max divider w-[20%]"></div>
                <div className="center-align">
                    <button className="circle small">
                        <Icon path={mdiCodeBraces} />
                        <div className="tooltip">2024 - Learning "Material You" UI/UX design system</div>
                    </button>
                    <div className="small-margin secondary p-1">
                        <Icon path={mdiMaterialDesign} />
                    </div>
                </div>
            </div>
        </div>
    )
}