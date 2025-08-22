"use client";
import Link from 'next/link'
import React from 'react'
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export default function Login() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section className='mt-20'>
      <div className='container'>
        <div>
          <Link href="http://localhost:3000/">
            <button className="gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
              <ArrowRight className="h-4 w-4 inline-flex justify-center items-center rotate-180" />
              Back
            </button>
          </Link>
        </div>
        <div className="section-heading">
          <h2 className="section-title">Register</h2>
          <p className="section-description mt-5">
            New here? Create your account and join us today!
          </p>
        </div>
        <form className="mt-6 space-y-4 section-heading">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="name"
              placeholder="your name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <a href="#" className="text-[#001E80] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-black to-[#001E80] text-white py-2 rounded-lg font-medium  hover:from-gray-400 hover:to-gray-400 transition">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="http://localhost:3000/login" className="text-[#001E80] font-medium hover:underline">
            Sign In
          </a>
        </p>

      </div>
            <div className="md:h-[324px] -translate-y-96  -translate-x-28 left-0 z-0 absolute">
        <motion.img
          src={cogImage.src}
          alt="Cog image"
          className="md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="md:h-[538px] -translate-y-96  translate-x-28 right-0 z-0 absolute">
        <motion.img
          src={cogImage.src}
          alt="Cog image"
          className="md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}
