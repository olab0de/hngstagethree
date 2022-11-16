import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeicon.png'
import metaIcon from '../images/metaicon.png'
import Nft from '../components/nft';
import ConnectBtn from '../components/connectWallet';
import '../placetostay.css'
import facebook from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import metabnb from '../images/meta.png'
import locicon from '../images/locicon.png'
import threegrid  from '../images/three grid.png'
import cancel from '../images/x.png'
import chevron from '../images/chevron.png'
import metawallet from '../images/memask.png'
import connectwallet from '../images/walletconnect.png'
import nft1 from '../images/nft1.png'
import nft2 from '../images/nft2.png'
import nft3 from '../images/nft3.png'
import nft4 from '../images/nft4.png'
import nft5 from '../images/nft5.png'
import nft6 from '../images/nft6.png'
import nft7 from '../images/nft7.png'
import nft8 from '../images/nft8.png'
import nft9 from '../images/nft9.png'
import nft10 from '../images/nft10.png'
import nft11 from '../images/nft11.png'
import nft12 from '../images/nft12.png'
import nft13 from '../images/nft13.png'
import nft14 from '../images/nft14.png'
import nft15 from '../images/nft15.png'
import nft16 from '../images/nft16.png'


function PlaceToStay() {

    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open)
    }

    const [modalOpen, setModalOpen] = useState(false);

    const connectClick = () => {
        setModalOpen(true)
        setOpen(false)
    }
    const closeModal = () => {
        setModalOpen(false)
    }


    return (
        <div className='placepage'>
            <header>

                <div className='logos'>
                    <img className="homeicon" src={homeIcon} alt="home icon" />
                    <img className="metaicon" src={metaIcon} alt="meta Icon" />
                </div>

                <div className={open ? 'headerright' : 'headerright headernone'}>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><Link to='/placetostay' style={{textDecoration: 'none', color:'inherit'}}>Place to stay</Link></li>
                            <li><a>NFTs</a></li>
                            <li><a>Community</a></li>
                        </ul>
                    </nav>

                    <ConnectBtn handleClick={connectClick}/>
                </div>



                <div onClick={handleModal} className='mobilenav'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>

            <div className='placelist'>
                <div className='placeleft'>

                    <p>Resturant</p>
                    <p>Cottage</p>



                    <p>Castle</p>
                    <p>Fantast city</p>



                    <p>beach</p>
                    <p>Carbins</p>



                    <p>off-grid</p>
                    <p>Farm</p>





                </div>

                <button className='location'>
                    <span className='cnt'>
                        <span>Location</span>
                        <img src={locicon} />
                    </span>

                </button>

            </div>


            <div className={modalOpen ? 'modaldiv' : 'modaldiv modalclose'}>
                <div className='modal'>
                    <div className='modaltop'>
                        <div className='topcnt'>
                            <p>Connect wallet</p>
                            <img src={cancel} alt='cancel' onClick={closeModal} />
                        </div>
                    </div>

                    <div className='modalbottom'>
                        <div className='bottomcnt'>
                            <p>Choose your preferred wallet:</p>
                            <div className='metawallet'>
                                <button>
                                    <span className='btn-cnt'>
                                        <img src={metawallet} className='meta-img' />
                                        <span className='btn-txt'>
                                            Metamask
                                        </span>

                                        <img src={chevron} className='chev' />

                                    </span>
                                </button>
                            </div>
                            <div className='walletconnect'>
                                <button>
                                    <span className='btn-cnt'>
                                        <img src={connectwallet} className='meta-img' />
                                        <span className='btn-txt'>
                                            Walletconnect
                                        </span>

                                        <img src={chevron} className='chev' />

                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            




                <section className='bottomSect'>


                    <div className='bottomSectNfts'>
                        <Nft src={nft1}/>
                        <Nft  src={nft2}/>
                        <Nft  src={nft3}/>
                        <Nft  src={nft4}/>
                        <Nft  src={nft5}/>
                        <Nft  src={nft6}/>
                        <Nft  src={nft7}/>
                        <Nft  src={nft8}/>
                        <Nft  src={nft9}/>
                        <Nft  src={nft10}/>
                        <Nft  src={nft11}/>
                        <Nft  src={nft12}/>
                        <Nft  src={nft13}/>
                        <Nft  src={nft14}/>
                        <Nft  src={nft15}/>
                        <Nft  src={nft16}/>

                    </div>

                </section>



                <footer>
                    <div className='footercontent'>
                        <div className='footertop'>
                            <div className='footerleft'>
                                <img src={metabnb} alt="metabnb logo" />
                                <div className='socials'>
                                    <img src={facebook} alt='facebook logo' />
                                    <img src={insta} alt='instagram logo' />
                                    <img src={twitter} alt='twitter logo' />
                                </div>



                            </div>

                            <div className='footerright'>
                                <div className='rightone'>
                                    <h3>Community</h3>
                                    <p >NFT</p>
                                    <p>Tokens</p>
                                    <p>Landlords</p>
                                    <p >Discord</p>
                                </div>

                                <div className='righttwo'>
                                    <h3>Places</h3>
                                    <p >Castle</p>
                                    <p>Farms</p>
                                    <p>Beach</p>
                                    <p>Learn more</p>
                                </div>

                                <div className='rightthree'>
                                    <h3>About us</h3>
                                    <p>Road map</p>
                                    <p>Creators</p>
                                    <p>Career</p>
                                    <p>Contact us</p>
                                </div>

                            </div>
                        </div>
                        <div className='footerbottom'><p className='copyright'>&copy; 2022 Metabnb</p></div>
                    </div>
                </footer>








        </div>
    )
}

export default PlaceToStay