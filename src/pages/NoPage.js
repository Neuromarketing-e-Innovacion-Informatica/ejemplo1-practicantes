import React from 'react';

// Reciclados
import { Navbar } from '../components/Reciclados/Navbar';
import { Footer } from '../components/Reciclados/Footer';


export const NoPage = () => {
    return (
        <>
            <Navbar />
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column py-5">
                    <h1 className="masthead-heading text-uppercase mb-0">404</h1>
                    <br/>
                    <h2>Esta página no existe</h2>

                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="/">
                            Volver
                        </a>
                    </div>
                </div>

            </header>
            <Footer />
        </>
    )
}
