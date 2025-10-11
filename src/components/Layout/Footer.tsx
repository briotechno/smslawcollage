"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebook, link: "https://facebook.com", color: "#3b5998" },
  { icon: FaTwitter, link: "https://twitter.com", color: "#00acee" },
  { icon: FaYoutube, link: "https://FaYoutube.com", color: "#FF0000" },
];

const galleryItems = [
  { src: "/assets/Noimage.jpg", title: "Elocution" },
  { src: "/assets/Noimage.jpg", title: "Guest Lecture" },
  { src: "/assets/Noimage.jpg", title: "Orientation" },
  { src: "/assets/Noimage.jpg", title: "Workshop" },
  { src: "/assets/Noimage.jpg", title: "Seminar" },
  { src: "/assets/Noimage.jpg", title: "Sports Day" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] text-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Quick Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-[#0073aa] inline-block">
            Quick Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <form className="flex flex-col gap-3 mt-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded-md text-sm"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border p-2 rounded-md text-sm"
              />
              <textarea
                placeholder="Message"
                className="border p-2 rounded-md text-sm"
                rows={3}
              />
              <button
                type="submit"
                className="bg-[#0073aa] text-white py-2 px-4 text-sm rounded hover:bg-blue-700 transition"
              >
                SUBMIT
              </button>
            </form>
            {/* Contact Info & Social Icons */}
            <div>
              <div className="mt-8 md:mt-0 m-5">
                <p>
                  SMS,
                  <br />
                  Law COLLAGE, Law COLLAGE,
                  <br />
                  Ahmedabad – 380 006.
                </p>
                <p className="mt-2">Phone: </p>
                <p>Email: </p>

                {/* Social Icons */}
                <div className="flex gap-3">
                  {socialIcons.map(({ icon: Icon, link, color }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={18} color="#fff" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-[#0073aa] inline-block">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {galleryItems.map(({ src, title }, idx) => (
              <div key={idx} className="text-center text-xs">
                <Image
                  src={src}
                  alt={title}
                  width={80}
                  height={60}
                  className="mx-auto rounded"
                />
                <p className="mt-1">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 mt-10 border-t pt-4 gap-2 text-center">
        <p>
          © Copyright {new Date().getFullYear()} SMSLAWCOLLAGE. All Rights
          Reserved.
        </p>
        <p className="mt-1 cursor-pointer">
          Maintained By{" "}
          <a
            href="https://www.briotechno.com/"
            target="_blank"
            className="text-[#0073aa] font-bold hover:underline"
          >
            BRIOTECHNO
          </a>
        </p>
      </div>
    </footer>
  );
}
