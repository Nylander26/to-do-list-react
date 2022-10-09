import React from "react";
import './navbar.css'
import { BsJournalCheck } from 'react-icons/bs'


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-icon">
                <BsJournalCheck />
            </div>
            <div>
                <h1 className="title">To-Do List</h1>
            </div>
        </div>
    )
}