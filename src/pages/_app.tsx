import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import useStore from "../lib/store";
import { mobilePixelShift } from "../lib/constants";

export default function App({ Component, pageProps }: AppProps) {
    const setWindowSize = useStore((state) => state.setWindowSize);

    // using useEffect to change Zustand state and giving access to the updated zustand state everywhere
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth > mobilePixelShift);
        };

        // initalize the innerWidth to zustand state
        handleResize();

        // Add event listener to update state on window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component no longer exists on DOM
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setWindowSize]);
    return <Component {...pageProps} />;
}
