"use client";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className=" text-gray-300 pt-10 mt-10 font-light tracking-wide w-full shadow-inner border-b border-gray-200">
            {/* --- Дээд хэсэг --- */}
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">

                {/* Хаяг */}
                <div>
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2 mb-2 text-base text-black font-normal uppercase tracking-wider">
                            <MapPinIcon size={18} />
                            <span>ХАЯГ БАЙРШИЛ</span>
                        </div>
                        <p className="text-base text-gray-400 leading-relaxed">
                            Улаанбаатар, 
                        </p>
                    </div>
                </div>

                {/* Холбоо барих */}
                <div>
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2 mb-2 text-base text-black font-normal uppercase tracking-wider">
                            <MailIcon size={18} />
                            <span>ХОЛБОО БАРИХ</span>
                        </div>
                        <p className="text-base text-gray-400">
                            Имэйл:{" "}
                            <a
                                href="mailto:ankhtubayar@urnukhbarilga.com"
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                agrocity@ub.gov.mn
                            </a>
                        </p>
                        <p className="text-base text-gray-400">
                            Утас:{" "}
                            <a
                                href="tel:+97660303468"
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                +976 0000000
                            </a>
                        </p>
                    </div>
                </div>


            </div>

            {/* --- Доод хэсэг --- */}
            <div className=" bg-green-800 border-t border-green-600 mt-10 pt-6 pb-6 text-center">
                {/* Соц сүлжээ */}
                {/* <div>
                    <div className=" bg-green flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2 mb-2 text-base text-white font-normal uppercase tracking-wider">
                            <span>БИДЭНТЭЙ НЭГДЭХ</span>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-5 mt-1">
                            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-transform duration-200"><Facebook size={18} /></a>
                            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-transform duration-200"><Twitter size={18} /></a>
                            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-transform duration-200"><Linkedin size={18} /></a>
                            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-transform duration-200"><Instagram size={18} /></a>
                            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-transform duration-200"><Youtube size={18} /></a>
                        </div>
                    </div>
                </div> */}
                <p className="text-sm md:text-base text-gray-400">
                    © 2025 <span className="text-white font-light"> Agro City </span>, бүх эрх хуулиар хамгаалагдсан
                </p>
                <p className="text-sm mt-1 text-gray-500">
                    Website designed by <span className="text-cyan-400">Amber LLC</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
