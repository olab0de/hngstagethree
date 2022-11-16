import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Nft from './components/nft';
import ConnectBtn from './components/connectWallet';
import homeIcon from './images/homeicon.png'
import metaIcon from './images/metaicon.png'
import fourgrid from './images/fourgrid.png'
import opensea from './images/opensea.png'
import metamask from './images/metamask.png'
import mbtoken from './images/mbtoken.png'
import threegrid  from './images/three grid.png'
import facebook  from './images/facebook.png'
import insta  from './images/instagram.png'
import twitter  from './images/twitter.png'
import metabnb  from './images/meta.png'
import cancel from './images/x.png'
import chevron from './images/chevron.png'
import metawallet from './images/memask.png'
import connectwallet from './images/walletconnect.png'
import nft1 from './images/Frame 151.png'
import nft2 from './images/Frame 151 (1).png'
import nft3 from './images/Frame 151 (2).png'
import nft4 from './images/Frame 151 (3).png'
import nft5 from './images/Frame 151 (4).png'
import nft6 from './images/Frame 151 (5).png'
import nft7 from './images/Frame 151 (6).png'
import nft8 from './images/Frame 151 (7).png'



function App() {

  const [open,setOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const connectClick = ()=> {
    setModalOpen(true)
    setOpen(false)
  }
 const closeModal = ()=> {
    setModalOpen(false)
 }
  const handleModal = ()=> {
    setOpen(!open)
    
  }

  console.log(open)
  return (
    <div className="App">
       <header>

          <div className='logos'>
            <img className="homeicon" src={homeIcon} alt="home icon"/>
            <img className="metaicon" src={metaIcon} alt="meta Icon"/>
          </div>

          <div className={open ? 'headerright': 'headerright headernone'}>
            <nav>
               <ul>
                  <li><Link to='/' style={{textDecoration:'none', color:'inherit'}}>Home</Link></li>
                  <li><Link to='/placetostay' style={{textDecoration: 'none', color:'inherit'}}>Place to stay</Link></li>
                  <li><a>NFTs</a></li>
                  <li><a>Community</a></li>
               </ul>
            </nav>

            <ConnectBtn handleClick={connectClick}/>
          </div>

          

          <div onClick = {handleModal} className='mobilenav'>
            <div></div>
            <div></div>
            <div></div>
          </div>
       </header>

       <section className='hometopsect'>
          <div className='sectLeft'>
              <h1>
                  Rent a <span className='highlighted'>Place</span> away from <span className='highlighted'>Home</span> in the <span className='highlighted'>Metaverse</span>
              </h1>

              <p>
                   we provide you access to luxury and affordable houses in the metaverse, 
                   get a chance to turn your imagination to reality at your comfort zone
              </p>

              <form className='homeform'>
                <input type='text' placeholder='search for location'/>
                <button>Search</button>
              </form>

           </div>

           <div className='sectRight'>
              <img src={fourgrid} alt='four grid images'/>
           </div>

       </section>

       <div className='brands'>
         <div className='brand-images'>
            <img src={mbtoken} alt='mbtoken logo'/>
            <img src={metamask} alt='metamask logo' />
            <img src={opensea}  alt='opensea logo'/>
         </div>

       </div>

       <section className='bottomSect'>
            <h1>Inspiration for your next adventure</h1>

            <div className='bottomSectNfts'>
              <Nft src={nft1}/>
              <Nft src={nft2}/>
              <Nft src={nft3}/>
              <Nft src={nft4}/>
              <Nft src={nft5}/>
              <Nft src={nft6}/>
              <Nft src={nft7}/>
              <Nft src={nft8}/>

            </div>

       </section>

      <div className={modalOpen? 'modaldiv' : 'modaldiv modalclose'}>
          <div className='modal'>
            <div className='modaltop'>
              <div className='topcnt'>
                <p>Connect wallet</p>
                <img src={cancel} alt='cancel' onClick={closeModal}/>
              </div>
            </div>

            <div className='modalbottom'>
                <div className='bottomcnt'>
                   <p>Choose your preferred wallet:</p>
                   <div className='metawallet'>
                      <button>
                         <span className='btn-cnt'>
                            <img src={metawallet} className='meta-img'/>
                            <span className='btn-txt'>
                              Metamask
                            </span>

                            <img src={chevron} className='chev'/>
                           
                         </span>
                      </button>
                   </div>
                   <div className='walletconnect'>
                   <button>
                         <span className='btn-cnt'>
                            <img src={connectwallet} className='meta-img'/>
                            <span className='btn-txt'>
                              Walletconnect
                            </span>

                            <img src={chevron} className='chev'/>
                           
                         </span>
                      </button>
                   </div>

                </div>
            </div>

          </div>
      </div>

       <section className='beforeFooter'>
         <div className='beforecontent'>

             <div className='beforeleft'>
                 <h1>Metabnb NFTs</h1>

                 <p>
                   Discover our NFT gift cards collection. 
                   Loyal customers gets amazing gift cards which are traded as NFTs.
                   These NFTs gives our cutomer access to loads of our exclusive services.
                 </p>

                 <button>Learn more</button>

              </div>

            <div className='beforeright'>
              <img src={threegrid} alt='threegrid'/>

            </div>

         </div>
          

       </section>

       <footer>
          <div className='footercontent'>
           <div className='footertop'>
            <div className='footerleft'>
              <img src={metabnb} alt ="metabnb logo"/>
              <div className='socials'>
                <img src={facebook} alt='facebook logo'/>
                <img src={insta} alt='instagram logo'/>
                <img src={twitter} alt='twitter logo'/>
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
  );
}

export default App;
