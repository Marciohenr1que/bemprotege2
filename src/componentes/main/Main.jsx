import "./styleMain.css"
import React from 'react';

import './styleMain.css';

function Main() {
    return (
        <div className="main-container">
            <div className="main">
                <div className="content">
                    <h2>ESSENCIAL É ESTAR SEGURO</h2>
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam eu nulla urna.Aenean laoreet sapien
                        vitae libero dapibus, eget condimentum ante accumsan. Morbi tincidunt mauris et egestas molestie.
                    </h6>
                    <button>CONHEÇA AS SOLUÇÕES</button>
                </div>
                <img src="/gustavolima.png" alt="" />
            </div>
            <div className="custom-line"></div>
            <div className="content2">
                <img className="mulherpensando" src="/mulherpensando.png" alt="" />
                <div>
                    <h1>Sua proteção em primeiro lugar sempre</h1>
                    <div className="container">
                        <div className="square">
                            <h3>solução 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a className="text-white" href="www.bemprotege.com">
                                Saiba mais
                            </a>
                        </div>
                        <div className="square">
                            <h3>solução 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a className="text-white" href="www.bemprotege.com">
                                Saiba mais
                            </a>
                        </div>
                        <div className="square">
                            <h3>solução 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a className="text-white" href="www.bemprotege.com">
                                Saiba mais
                            </a>
                        </div>
                        <div className="square">
                            <h3>solução 4</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a className="text-white" href="www.bemprotege.com">
                                Saiba mais
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-line"></div>
        </div>
    );
}

export default Main;
