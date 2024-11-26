import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";





const Footer = () => {
    return (
        <footer className="relative py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-auto mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c99846] to-[#554023]">
                            $Arcane
                        </h3>
                        <p className="mt-2 text-gray-400">To the moon and beyond!</p>
                    </div>
                    
                    <div className="flex gap-6">
                        <Link href="https://twitter.com" target='_blank' className="hover:text-[#088ec8] transition-colors">
                            <FaTwitter className=" h-6 w-6 text-white" />
                        </Link>
                        <Link href="https://t.me" target='_blank'  className="hover:text-[#088ec8] transition-colors">
                            <FaTelegramPlane className=" h-6 w-6 text-white" />
                        </Link>
                        <Link href="https://discord.com" target='_blank'  className="hover:text-[#088ec8] transition-colors">
                            <FaDiscord className=" h-6 w-6 text-white" />
                        </Link>
                    </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
                    <p>HODL Responsibly | Not Financial Advice</p>
                    <p className="mt-2">© {new Date().getFullYear()} Arcane Coin. All rights reserved.</p>
                </div>

            </div>
            <div className="absolute bottom-0 left-[-125px] w-[250px] h-[200px] bg-[#395D8B] blur-[450px] opacity-70 rounded-[118px] z-[-9999]"></div>

        </footer>
    );
};

export default Footer;