"use client"

import Link from "next/link";

export default function ErrorComponent() {
    return (
        <div>
            <h1>Something went wrong.</h1>
            <p>Try again later.</p>
            <Link 
                href="/"
                as="/"
            >
                Go home
            </Link>
        </div>
    );
}
