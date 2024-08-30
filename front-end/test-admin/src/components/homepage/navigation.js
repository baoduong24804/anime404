import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/home" class="navbar-brand">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">

                        <Link to="/" className="nav-link">
                            Anime404
                        </Link>
                        <Link to="/admin" className="nav-link">
                            Admin
                        </Link>
                        

                    </div>
                </div>
            </div>
        </nav>
    );


}




export default Navigation;