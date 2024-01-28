'use client'
import React from "react";
import bg from '@/assets/img/1330376.png'

export default function Home() {
  

  return (
    <main
    style={{
      backgroundImage: `url(${bg.src})`,
    }}
    className="home__body">
      <div className="home__container">
        <div className="home__card">
          <div className="home__card__body">
            <h1>Welcome to My Fancy App</h1>
            <p>
              This is a sample project that includes a React frontend, a Node.js
              backend and a MongoDB database.
            </p>
          </div>
          <div className="home__card__footer">
            <a href="/login" className="btn btn--primary">
              Login
            </a>
            <a href="/register" className="btn btn--secondary">
              Register
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


