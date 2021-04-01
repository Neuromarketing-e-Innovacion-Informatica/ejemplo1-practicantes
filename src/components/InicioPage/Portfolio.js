import React from 'react'

import cabin from '../../assets/img/portfolio/cabin.png';
import cake from '../../assets/img/portfolio/cake.png';
import circus from '../../assets/img/portfolio/circus.png';
import game from '../../assets/img/portfolio/game.png';
import safe from '../../assets/img/portfolio/safe.png';
import submarine from '../../assets/img/portfolio/submarine.png';

export const Portfolio = () => {

    // Creamos una constante llamada data, la cual contiene un Array con un Objeto por cada
    // componente que queramos renderizar, en este caso 6
    const data = [
        {
            id: 1,
            title: "Log Cabin",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec gravida dolor, porttitor rhoncus tortor. Donec iaculis elit at mi bibendum feugiat. Nam ac lobortis nulla. Aliquam pretium enim vel pharetra egestas. Donec iaculis, turpis vitae dictum congue, odio quam tincidunt arcu, et ultricies tellus nunc at dolor. Mauris ut felis non orci luctus congue. Quisque tempor, lectus vel sollicitudin molestie, erat tellus auctor purus, eu auctor nunc leo eu ex. Curabitur vel condimentum orci, eget semper magna. Fusce ut ligula ante. Praesent mattis malesuada diam vel consectetur. Ut nisi justo, commodo ac neque semper, congue fermentum sapien. Cras ac enim ipsum. Etiam eu dolor feugiat, varius mauris in, malesuada est. In hac habitasse platea dictumst. ",
            img: cabin
        },
        {
            id: 2,
            title: "Tasty Cake",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec gravida dolor, porttitor rhoncus tortor. Donec iaculis elit at mi bibendum feugiat. Nam ac lobortis nulla. Aliquam pretium enim vel pharetra egestas. Donec iaculis, turpis vitae dictum congue, odio quam tincidunt arcu, et ultricies tellus nunc at dolor. Mauris ut felis non orci luctus congue. Quisque tempor, lectus vel sollicitudin molestie, erat tellus auctor purus, eu auctor nunc leo eu ex. Curabitur vel condimentum orci, eget semper magna. Fusce ut ligula ante. Praesent mattis malesuada diam vel consectetur. Ut nisi justo, commodo ac neque semper, congue fermentum sapien. Cras ac enim ipsum. Etiam eu dolor feugiat, varius mauris in, malesuada est. In hac habitasse platea dictumst. ",
            img: cake
        },
        {
            id: 3,
            title: "Circus Tent",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec gravida dolor, porttitor rhoncus tortor. Donec iaculis elit at mi bibendum feugiat. Nam ac lobortis nulla. Aliquam pretium enim vel pharetra egestas. Donec iaculis, turpis vitae dictum congue, odio quam tincidunt arcu, et ultricies tellus nunc at dolor. Mauris ut felis non orci luctus congue. Quisque tempor, lectus vel sollicitudin molestie, erat tellus auctor purus, eu auctor nunc leo eu ex. Curabitur vel condimentum orci, eget semper magna. Fusce ut ligula ante. Praesent mattis malesuada diam vel consectetur. Ut nisi justo, commodo ac neque semper, congue fermentum sapien. Cras ac enim ipsum. Etiam eu dolor feugiat, varius mauris in, malesuada est. In hac habitasse platea dictumst. ",
            img: circus
        },
        {
            id: 4,
            title: "Controller",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec gravida dolor, porttitor rhoncus tortor. Donec iaculis elit at mi bibendum feugiat. Nam ac lobortis nulla. Aliquam pretium enim vel pharetra egestas. Donec iaculis, turpis vitae dictum congue, odio quam tincidunt arcu, et ultricies tellus nunc at dolor. Mauris ut felis non orci luctus congue. Quisque tempor, lectus vel sollicitudin molestie, erat tellus auctor purus, eu auctor nunc leo eu ex. Curabitur vel condimentum orci, eget semper magna. Fusce ut ligula ante. Praesent mattis malesuada diam vel consectetur. Ut nisi justo, commodo ac neque semper, congue fermentum sapien. Cras ac enim ipsum. Etiam eu dolor feugiat, varius mauris in, malesuada est. In hac habitasse platea dictumst. ",
            img: game
        },
        {
            id: 5,
            title: "Locked Safe",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec gravida dolor, porttitor rhoncus tortor. Donec iaculis elit at mi bibendum feugiat. Nam ac lobortis nulla. Aliquam pretium enim vel pharetra egestas. Donec iaculis, turpis vitae dictum congue, odio quam tincidunt arcu, et ultricies tellus nunc at dolor. Mauris ut felis non orci luctus congue. Quisque tempor, lectus vel sollicitudin molestie, erat tellus auctor purus, eu auctor nunc leo eu ex. Curabitur vel condimentum orci, eget semper magna. Fusce ut ligula ante. Praesent mattis malesuada diam vel consectetur. Ut nisi justo, commodo ac neque semper, congue fermentum sapien. Cras ac enim ipsum. Etiam eu dolor feugiat, varius mauris in, malesuada est. In hac habitasse platea dictumst. ",
            img: safe
        },
        {
            id: 6,
            title: "Submarine",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec gravida dolor, porttitor rhoncus tortor. Donec iaculis elit at mi bibendum feugiat. Nam ac lobortis nulla. Aliquam pretium enim vel pharetra egestas. Donec iaculis, turpis vitae dictum congue, odio quam tincidunt arcu, et ultricies tellus nunc at dolor. Mauris ut felis non orci luctus congue. Quisque tempor, lectus vel sollicitudin molestie, erat tellus auctor purus, eu auctor nunc leo eu ex. Curabitur vel condimentum orci, eget semper magna. Fusce ut ligula ante. Praesent mattis malesuada diam vel consectetur. Ut nisi justo, commodo ac neque semper, congue fermentum sapien. Cras ac enim ipsum. Etiam eu dolor feugiat, varius mauris in, malesuada est. In hac habitasse platea dictumst. ",
            img: submarine
        }
    ]

    return (
        <>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">

                        {/* A la constante data le hacemos un map, el cual renderizará el return () */}
                        {/* por cada Objeto que se encuentre en su interior */}
                        {
                            data.map(portfolio => (
                                <div className="col-md-6 col-lg-4 mb-5" key={portfolio.id}>

                                    {/* La estructura visible */}
                                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#portfolioModal" + portfolio.id}>
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img className="img-fluid" src={portfolio.img} alt={portfolio.title}/>
                                    </div>

                                    {/* Modal */}
                                    <div className="portfolio-modal modal fade" id={"portfolioModal" + portfolio.id} tabIndex="-1" role="dialog" aria-labelledby={"portfolioModal" + portfolio.id + "Label"} aria-hidden="true">
                                        <div className="modal-dialog modal-xl" role="document">
                                            <div className="modal-content">
                                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true"><i className="fas fa-times"></i></span>
                                                </button>
                                                <div className="modal-body text-center">
                                                    <div className="container">
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-8">
                                                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id={"portfolioModal" + portfolio.id + "Label"}>{portfolio.title}</h2>
                                                                <div className="divider-custom">
                                                                    <div className="divider-custom-line"></div>
                                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                                    <div className="divider-custom-line"></div>
                                                                </div>
                                                                <img className="img-fluid rounded mb-5" src={ portfolio.img } alt={portfolio.title} />
                                                                <p className="mb-5">{portfolio.desc}</p>
                                                                <button className="btn btn-primary" data-dismiss="modal">
                                                                    <i className="fas fa-times fa-fw"></i>
                                                                    Close Window
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            ))
                        }

                        
                    </div>
                </div>
            </section>

        </>
    )
}
