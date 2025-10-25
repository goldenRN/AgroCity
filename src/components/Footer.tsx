


"use client";

import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
    MailIcon,
    PhoneIcon,
    MapPinIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 text-green-950">
            {/* --- Top social row --- */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col md:flex-row items-center gap-4">
                <h3 className="text-lg font-medium">Бидэнтэй холбогдох</h3>
                <div className="flex gap-5 text-xl">
                    <a href="	
https://www.instagram.com/agrocitysez?igsh=c25rZHVvcmNzbmV6" className="text-pink-600 hover:scale-110 transition-transform"><FaInstagram /></a>
                    {/* <a href="#" className="text-black hover:scale-110 transition-transform"><FaXTwitter /></a> */}
                    {/* <a href="#" className="text-red-600 hover:scale-110 transition-transform"><FaYoutube /></a> */}
                    <a href="https://www.facebook.com/share/1EQnTfP5SJ/?mibextid=wwXIfr" className="text-blue-500 hover:scale-110 transition-transform"><FaFacebook /></a>
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* --- Middle section --- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
                {/* Холбоо барих */}
                <div className="text-left">
                    <h3 className="text-xl text-green-950 mb-5">Холбоо барих</h3>
                    <ul className="space-y-3 text-green-950">
                        <li className="flex items-center gap-2">
                            <MailIcon size={18} className="text-green-950" />
                            <a href="mailto:agrocity@ub.gov.mn" className="hover:text-lime-700 transition-colors duration-200">
                                agro_city2025@ulaanbaatar.mn
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <PhoneIcon size={18} className="text-green-950" />
                            <a href="tel:+9760000000" className="hover:text-lime-700 transition-colors duration-200">
                                +976 0000000
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Хаяг байрлал */}
                <div className="text-left pl-0 md:pl-10">
                    <h3 className="text-xl text-green-950 mb-5">Хаяг байрлал</h3>
                    <ul className="space-y-3 text-green-950">
                        <li className="flex items-center gap-2">
                            <MapPinIcon size={18} className="text-green-950" />
                            <span>УБ хот, СБД, Бага тойруу, </span>
                        </li>
                        <li>8-р хороо, Сити тауэр 8 давхарт 802 тоот</li>
                    </ul>
                </div>

                {/* Холбоосууд */}
                <div className="text-left pl-0 md:pl-10">
                    <h3 className="text-xl text-green-950 mb-5">Холбоосууд</h3>
                    <ul className="text-base text-green-950 list-disc list-inside space-y-1">
                        <li>
                            <Link href="/feedback" className="hover:text-green-950 transition">
                                Санал хүсэлт
                            </Link>
                        </li>
                        <li>
                            <Link href="/ProgramLisence" className="hover:text-green-950 transition">
                                Програмын лиценз
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-green-950 transition">
                                Нууцлалын бодлого
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="border-gray-300" />

            {/* --- Bottom row --- */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-green-950 gap-2 md:gap-0">
                <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start text-center md:text-left">
                    <p>
                        © 2025 <span className="text-green-950 font-semibold">АГРО-СИТИ ЭЗТБ</span>.
                    </p>
                </div>
                <div className="text-center md:text-right text-sm text-green-950 mt-2 md:mt-0">
                    <p>Бүх эрх хуулиар хамгаалагдсан.</p>
                </div>
            </div>
        </footer>
    );
}