import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {

    return (
        <div className="min-h-screen">
            <div className="hero-image">
                <img src="https://besthqwallpapers.com/Uploads/25-4-2019/88786/thumb2-earth-at-night-from-space-europe-city-lights-continent-satellite-view.jpg"
                className="rounded" />
                <h1 className="text-white font-bold text-xl text-center pt-8">Welcome to the homepage.</h1>
                <p className="text-white text-xs text-center">yes this is built with react</p>

                <h1>express?</h1>
                <ul>
                    {this.state.users.map(user =>
                        <li key={user.id}>{user.username}</li>
                        )};
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Home