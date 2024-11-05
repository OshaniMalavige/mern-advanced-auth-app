// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Sidebar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);

    return (
        <div
            className={`w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30 ${
                sideBarOpen ? '' : 'hidden'
            }`}
            id="main-nav"
        >
            {/* Sidebar header */}
            <div className="w-full h-20 border-b flex px-4 items-center mb-8">
                <p className="font-semibold text-3xl text-blue-400 pl-4">LOGO</p>
                {/* Close button */}
                <button
                    className="ml-auto text-gray-500"
                    onClick={() => setSideBarOpen(false)}
                >
                    X
                </button>
            </div>

            {/* Main section */}
            <div className="mb-4 px-4">
                <p className="pl-4 text-sm font-semibold mb-1">MAIN</p>

                <div className="w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                        <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                    </svg>
                    <span className="text-gray-700">Dashboard</span>
                </div>

                <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                        <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
                    </svg>
                    <span className="text-gray-700">Analytics</span>
                </div>

                <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                        <path d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"></path>
                    </svg>
                    <span className="text-gray-700">Inventory</span>
                </div>

                <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                        <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L8.933,12.08c-0.039,0.171,0.007,0.352,0.119,0.48c0.084,0.093,0.202,0.14,0.322,0.14c0.057,0,0.114-0.01,0.17-0.029l2.078-0.643c0.081-0.025,0.155-0.071,0.212-0.129l1.7-1.702v5.732H15.258z"></path>
                    </svg>
                    <span className="text-gray-700">Orders</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
