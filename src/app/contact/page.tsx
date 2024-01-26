"use client"

import useWeb3forms from "@web3forms/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);
    const apiKey = process.env.PUBLIC_ACCESS_KEY || process.env.NEXT_PUBLIC_CONTACT_FORM_KEY || "";

    const { submit: onSubmit } = useWeb3forms({
        access_key: apiKey,
        settings: {
            from_name: "Acme Inc",
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setMessage(Boolean(msg));
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setMessage(Boolean(msg));
        },
    });

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-8 mt-32">
                    <Image src="/CONTACT.png" width={1000} height={500} alt="" />
                    <p className="text-2xl text-white/70 font-mono max-[768px]:text-xl">Say hi to me! =)</p>
                </div>
                <div className="max-w-96 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-32">
                        <input
                            type="checkbox"
                            id=""
                            className="hidden"
                            style={{ display: "none" }}
                            {...register("botcheck")}></input>

                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                autoComplete="false"
                                className={`w-full px-4 py-3 border-[1px] placeholder:text-gray-800 dark:text-white rounded-xl outline-none dark:placeholder:text-gray-200 dark:bg-[#131625]  focus:ring-0  ${errors.name
                                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                    }`}
                                {...register("name", {
                                    required: "Full name is required",
                                    maxLength: 80,
                                })}
                            />
                            {errors.name && (
                                <div className="mt-1 text-red-600">
                                    <small>{errors.name.message as any}</small>
                                </div>
                            )}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">
                                Email Address
                            </label>
                            <input
                                id="email_address"
                                type="email"
                                placeholder="Email Address"
                                autoComplete="false"
                                className={`w-full px-4 py-3 border-[1px] placeholder:text-gray-800 dark:text-white rounded-xl outline-none dark:placeholder:text-gray-200 dark:bg-[#131625]   focus:ring-0  ${errors.email
                                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                    }`}
                                {...register("email", {
                                    required: "Enter your email",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Please enter a valid email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <div className="mt-1 text-red-600">
                                    <small>{errors.email.message as any}</small>
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <textarea
                                placeholder="Your Message"
                                className={`w-full px-4 py-3 border-[1px] placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-[#131625] rounded-xl outline-none h-96 focus:ring-0 focus:outline-none ${errors.message
                                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                    }`}
                                {...register("message", {
                                    required: "Enter your Message",
                                })}
                            />
                            {errors.message && (
                                <div className="mt-1 text-red-600">
                                    {" "}
                                    <small>{errors.message.message as any}</small>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 font-semibold text-white transition-colors bg-gradient-to-b from-[#e0e0e0] to-[#8B96B1] rounded-xl hover:bg-[#131625] focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
                            {isSubmitting ? (
                                <svg
                                    className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>

                    {isSubmitSuccessful && isSuccess && (
                        <div className="mt-3 text-sm text-center text-green-500">
                            {message || "Success. Message sent successfully"}
                        </div>
                    )}
                    {isSubmitSuccessful && !isSuccess && (
                        <div className="mt-3 text-sm text-center text-red-500">
                            {message || "Something went wrong. Please try later."}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}