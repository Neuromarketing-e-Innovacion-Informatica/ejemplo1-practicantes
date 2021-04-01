import React from 'react';

// Componentes de "/"
import { Header } from '../components/InicioPage/Header';
import { Portfolio } from '../components/InicioPage/Portfolio';
import { About } from '../components/InicioPage/About';
import { Contact } from '../components/InicioPage/Contact';

// Reciclados
import { Navbar } from '../components/Reciclados/Navbar';
import { Footer } from '../components/Reciclados/Footer';

export const Inicio = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Portfolio />
            <About />
            <Contact />
            <Footer />

            <div className="scroll-to-top d-lg-none position-fixed">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
            </div>
        </>
    )
}