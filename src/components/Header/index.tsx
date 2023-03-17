import Link from "next/link";
import {useState} from "react";
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 6h14M5 18h14M5 12h14"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronUpIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M17 14l-5-5-5 5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const  Header = () =>{
    const [scroll,setScroll]=useState(false)
    const navigation = [
        {name:"STORY", href:"#story"},
        {name:"WORK", href:"#work"},
        {name:"TEAM", href:"#team"},
    ]

    if(typeof window !== "undefined"){
        window.onscroll = function() {myFunction()};
    }

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };

    return (
        <div className={classNames(scroll?'p-3 backdrop-blur-sm bg-[#2E2E2E]/80':"py-4","flex  fixed z-40 inset-x-0 p-2 px-5 w-full justify-between xl:px-20 transition-all duration-700 ease-in-out mx-auto items-center items-center")}>
            <div className={"relative z-10 items-center flex"}>
                <Link href="src/components/Header/index" legacyBehavior>
                <a>
                    <img
                        className="w-56 h-12 rounded-full hidden lg:flex lg:mr-5"
                        src="/LOGO.svg"
                        alt=""
                    />
                </a>
                </Link>
                <div className="hidden lg:flex lg:gap-10">
                    {navigation.map((item) => (
                        <a key={item.name}  href={item.href}
                           className="text-sm lg:text-base font-medium text-white transition duration-700 ">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-6">
                <Popover className="lg:hidden">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-500 p-2 outline-none"
                                aria-label="Toggle site navigation"
                            >
                                {({ open }) =>
                                    open ? (
                                        <ChevronUpIcon className="h-10 w-10" />
                                    ) : (
                                        <MenuIcon className="h-10 w-10" />
                                    )
                                }
                            </Popover.Button>
                            <AnimatePresence initial={false}>
                                {open && (
                                    <>
                                        <Popover.Overlay
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                                        />
                                        <Popover.Panel
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0, y: -32 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{
                                                opacity: 0,
                                                y: -32,
                                                transition: { duration: 0.2 },
                                            }}
                                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                                        >
                                            <div className="space-y-4">
                                                {/*<MobileNavLink href="#features">*/}
                                                {/*  Features*/}
                                                {/*</MobileNavLink>*/}
                                            </div>
                                        </Popover.Panel>
                                    </>
                                )}
                            </AnimatePresence>
                        </>
                    )}
                </Popover>
                <div className="hidden lg:flex gap-4 items-center">
                    <Link href="">
                        <img className="w-6 " src="discord 1.svg" alt=""/>
                    </Link>
                    <Link href="">
                        <img className="w-6" src="Twitter1.svg" alt=""/>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Header
