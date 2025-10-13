"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <div className="mx-auto flex min-h-screen w-full  flex-col overflow-hidden rounded-none bg-white shadow-none lg:flex-row">
        <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-b from-[#18B9A0] via-[#08A08A] to-[#013432]" />
          <div className="relative flex h-full flex-col justify-between text-white ">
            <div className="flex flex-col items-center justify-center h-full">
                <Image
                src="/landing/logo.png"
                alt="Person preparing for a trip with suitcases"
                width={100}
                height={100}
                priority
                className=" w-[10rem] drop-shadow-2xl"
              />
              <Image
                src="/loginSvg.svg"
                alt="Person preparing for a trip with suitcases"
                width={420}
                height={420}
                priority
                className=" w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10 lg:w-1/2">
          <div className="w-full max-w-md">
            <header>
              <h1 className="text-3xl font-semibold text-gray-900">Log In</h1>
            </header>

            <form
              className="mt-10 space-y-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mt-2 w-full rounded-full border border-gray-200 bg-gray-100 px-5 py-4 text-sm text-gray-800 transition focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18B9A0]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-semibold text-gray-600 transition hover:text-[#18B9A0]"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your Password"
                    required
                    className="w-full rounded-full border border-gray-200 bg-gray-100 px-5 py-4 text-sm text-gray-800 transition focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18B9A0]"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((state) => !state)}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-500 transition hover:text-[#18B9A0]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border border-gray-300 accent-[#18B9A0]"
                  />
                  <span>Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#18B9A0]"
              >
                Login
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                className="font-semibold text-[#047463] transition hover:text-[#18B9A0]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;
