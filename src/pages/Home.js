import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import logo from '../assets/logo/apeblack.png'
import logo1 from '../assets/logo/apewhite.png'
import ps from '../assets/icons/pancakeswap-cake-logo.svg'
import cmc from '../assets/images/CMC-02-300x55-1.png'
import coin from '../assets/images/CoinGecko_logo_PNG3-2048x640.png'
import binance from '../assets/images/binance-smart-chain-e1619982959201.png'
import buyBinance from '../assets/images/bnb-bnb-logo-1536x1536.png'
import metaMask from '../assets/images/MetaMask_Fox.svg.png'
import pankswap from '../assets/images/color-black-1024x159-1-1024x159.png'
import dext from '../assets/images/dext.png'
import moneybag from '../assets/images/Sans-titre-2022-09-08T111117.614.png'
import heart from '../assets/icons/red-heart-11121.svg'
import check from '../assets/icons/icons8-check-64.png'
import telegram from '../assets/icons/telegram-svgrepo-com.svg'
import twitter from '../assets/icons/icons8-twitter-48.png'
import fire from '../assets/images/icons8-fire-48.png'


export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='container m-auto px-6 font-Poppins text-white' >
        <div className='felx items-center justify-center mb-16' >
          <div className='font-bold md:mt-[-20px] flex md:flex-row flex-col items-center md:space-y-3 space-y-6'>  
          <img src={logo} alt="no-img" width={500} height={500} className='md:w-2/5 md:mr-20 '/>
          <div className='md:text-left text-center' >
            <h1 className='typewriter lg:text-[3rem] text-[2rem] ' > Welcome to Nano Ape ! </h1>
            <p className='mb-10 w-auto font-medium' >We invite you to join our movement, Nano Ape, and be a part of changing the world. Our commitment to transparency in this industry is unwavering, backed by a team of exceptional professionals who will stop at nothing to take us to the top. Our nonstop growth and resilience is a testament to our genuine use case and dedicated ecosystem. Let's work together and show the world our true colors.</p>
            <div className="flex items-center justify-center  lg:flex-row flex-col lg:space-x-8">
              <a href="https://t.me/nanoapebsc" className='flex md:w-4/6 font-medium items-center justify-center cursor-pointer mb-5 text-center text-white border-2 bg-blue-600 md:p-4 p-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out'>Join Our Telegram<img src={telegram} alt="no-img" className='w-6 ml-4 border-2 rounded-full' /></a>   
              <a href="https://twitter.com/NanoApeBSC" className='flex md:w-4/6 font-medium items-center justify-center cursor-pointer mb-5 text-center border-2 border-blue-500 bg-white text-blue-500 md:p-4 p-3 px-8 rounded-xl shadow-lg hover:bg-blue-200 hover:opacity-600 transition-all duration-300 ease-in-out'>Join Our Twitter<img src={twitter} alt="no-img" className='w-6 ml-4 rounded-full ' /></a>   
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='bg-black py-8'>
        <div className='container m-auto px-6 font-Poppins text-white' >
          <div className='felx items-center justify-center mb-16 space-y-6'  >
              <h2 id='home' className='text-[2rem] font-bold text-center'>About Nano Ape</h2>
              <p className='text-[20px] mb-2 font-medium flex'>HELPING APES IN NEED <img src={heart} alt="no-img" className='w-5 ml-2'/></p>
              <p className='text-[16px] text mb-5'>We're excited to announce our new philanthropy program, where we'll be donating a portion of our tax collection quarterly to a community-voted Ape foundation. Supporting endangered animal species is critical to improving our planet, and we're honored to have the opportunity to make a difference. Our goal is to inspire others to use technology for the greater good of all living beings on Earth. Join us on our mission to create a better world for every living creature, and let's make a positive impact together!</p>
              <span className='flex mb-3 items-center font-medium'><img src={check} alt="no-img" className='w-6 mr-2'/>BASED DEV FROM USA 🇺🇸</span>
              <span className='flex mb-3 items-center font-medium'><img src={check} alt="no-img" className='w-6 mr-2'/>50% Burned with a 2% Auto burn from all buy and sell tax 🔥</span>
              <span className='flex mb-10 items-center font-medium'><img src={check} alt="no-img" className='w-6 mr-2'/>Philanthropy: Quarterly donations to ape sanctuary’s around the world. 🦍</span>
            <div className='flex items-center md:flex-row flex-col justify-center'>
              <a href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x2D09f330DFfd40FC1B49F0b6Deb5fA1C3f763226" className='md:mr-4 flex items-center justify-center cursor-pointer mb-5 text-center border-2 border-[#D1884F] bg-[#FFB800] text-white md:p-4 p-3 px-8 rounded-xl shadow-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out'>Buy on Pancakeswap<img src={ps} alt="no-img" className='w-5 ml-4' /></a>        
              <a href="https://www.geckoterminal.com/bsc/pools/0xa3c3e75fa9879920e650a0d2891013b79a3e957a" className='flex items-center justify-center cursor-pointer mb-5 text-center text-[#825C3C] border-2 border-[#825C3C] md:p-4 p-3 px-8 rounded-xl shadow-lg hover:text-white hover:bg-yellow-700 transition-all duration-300 ease-in-out'>NANOA Chart</a>   
            </div>
            <div class="bg-white rounded-xl p-4 md:px-8">
              <div class="grid grid-cols-3 md:grid-cols-5 md:gap-8 gap-8 items-center ">
                <div class="md:col-span-1 col-span-3">
                <img src={binance} alt="no-img" width={500} height={500} className='w-full'/>
                </div>
                <div class="md:col-span-1 col-span-3">
                <img src={dext} alt="no-img" width={500} height={500} className='w-full'/>
                </div>
                <div class="md:col-span-1 col-span-3">
                <img src={pankswap} alt="no-img" width={500} height={500} className='w-full'/>
                </div>
                <div class="md:col-span-1 col-span-3">
                <img src={coin} alt="no-img" width={500} height={500} className='w-full'/>
                </div>
                <div class="md:col-span-1 col-span-3">
                <img src={cmc} alt="no-img" width={500} height={500} className='w-full'/>     
                </div>
              </div>
            </div>
            <div id='taxes' class="text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-32 pt-20  ">
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
              <span className='text-[2rem]' >Tax Breakdown</span>
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
            </div> 
            <div className='flex items-center justify-center' >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-36">
                <div className="md:col-span-1 col-span-3 ">
                  <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center p-5 md:h-72 h-64'>
                    <img src={buyBinance} alt="no-img" width={500} height={500} className='w-32 relative mt-[-5rem] hover:-translate-y-1 animate-bounce'/>
                    <h2 className='font-bold text-3xl '>Liquidity</h2>
                    <p className='text-center mt-[1rem] px-4 max-w-md text-[16px]'>2% auto liquidly tax on every transaction, liquidity is locked. The auto liquidity will be burned</p>
                  </div>
                </div>
                <div className="md:col-span-1 col-span-3 ">
                  <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center p-5 md:h-72 h-64'>
                    <img src={moneybag} alt="no-img" width={500} height={500} className='w-32 relative mt-[-5rem] hover:-translate-y-1 animate-bounce'/>
                    <h2 className='font-bold text-3xl '>Marketing</h2>
                    <p className='text-center mt-[1rem] px-4 max-w-md text-[16px]'>2% marketing tax on every transaction to help fund our project</p>
                  </div>
                </div>
                <div className="md:col-span-1 col-span-3 ">
                  <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center p-5 md:h-72 h-64'>
                    <img src={logo1} alt="no-img" width={500} height={500} className='w-32 relative  mt-[-5rem] hover:-translate-y-1 animate-bounce'/>
                    <h2 className='font-bold text-3xl '>Philanthropy</h2>
                    <p className='text-center mt-[1rem] px-4 max-w-md text-[16px]'>3% philanthropy tax on every transaction to help apes in need by donation to our future sponsors and partners</p>
                  </div>
                </div>
                <div className="md:col-span-1 col-span-3 ">
                  <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center p-5 md:h-72 h-64'>
                    <img src={fire} alt="no-img" width={500} height={500} className='w-32 relative mt-[-5rem] hover:-translate-y-1 animate-bounce'/>
                    <h2 className='font-bold text-3xl '>Auto Burn</h2>
                    <p className='text-center mt-[1rem] px-4 max-w-md text-[16px]'>2% tax auto burn on every transaction to decrease the circulating supply as we progress</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div  class="text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-20 pt-20  ">
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
              <span id='roadmap' className='text-[2rem]' >Road Map</span>
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
            </div> 
            <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 text-white">
              <div class="relative">
                <div class="hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div>
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 rounded md:mb-0 mb-12">
                        <ol className='list-disc'>
                          <li>Stealth Launch</li>
                          <li>Website</li>
                          <li>Social Media Push</li>
                          <li>Influencers & Youtubers</li>
                          <li>White Paper</li>
                          <li>Auditing</li>
                          <li>First Donation</li>
                          </ol>                    
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full md:mt-0 mt-[-2rem]  bg-yellow-500 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">1</div>
                  </div>
                </div>
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 rounded md:mb-0 mb-12">
                        <ol className='list-disc'>
                          <li>Listed on Coinmarketcap</li>
                          <li>Listed on Coingecko</li>
                          <li>Partnership with Million Market cap Names</li>
                          <li>American, Asia, Europe Marketing</li>
                          <li>Treasury Reserves</li>
                        </ol>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full md:mt-0 mt-[-2rem]  bg-yellow-500 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">2</div>
                  </div>
                </div>
                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 rounded ">
                        <ol className='list-disc'>
                          <li>CEX Listings</li>
                          <li>NANO APE-Ape Debit Card</li>
                          <li>Staking Platform</li>
                          <li>NANO APE NFTs Launch</li>
                          <li>Community Voting DAO</li>
                          <li>Global Campaigns</li>
                          </ol>                    
                          </div>
                      </div>
                    </div>
                    <div class="rounded-full md:mt-0 mt-[-2rem]  bg-yellow-500 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">3</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-20 pt-20  ">
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
              <span id='tokenomics' className='text-[2rem]' >Tokenomics</span>
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
            </div> 
            <div class=" bg-white text-black rounded-xl p-4 mb-20">
              <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6 text-center ">
                <div class="md:col-span-1 col-span-3">
                <h2 className='text-[2rem] font-bold'>10 septillion</h2>
                <h3>Total supply</h3>
                </div>
                <div class="md:col-span-1 col-span-3">
                <h2 className='text-[2rem] font-bold'>50%</h2>
                <h3>Burned</h3>
                </div>
                <div class="md:col-span-1 col-span-3">
                <h2 className='text-[2rem] font-bold'>5 Septillion</h2>
                <h3>Circulating Supply</h3>
                <h5 className="text-[12px]">(Constantly Decreasing)</h5>
                </div>
                <div class="md:col-span-1 col-span-3">
                <h2 className='text-[2rem] font-bold'>9%</h2>
                <h3>Buy & Sell Taxes</h3>
                </div>
              </div>
            </div>
            <div class="text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-20 pt-10  ">
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
              <span id='buy' className='text-[2rem]' >How to buy?</span>
              <hr class="border border-white md:w-[9rem] w-[3rem]"/>
            </div> 
            <div className='mb-10 '>
            <div className="grid lg:grid-cols-2 grid-col-1 gap-6 text-center">
              <div className="col-span-1">
                <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto'>
                  <img src={metaMask} alt="no-img" width={500} height={500} className='w-28'/>
                  <h2 className='font-bold text-2xl mt-[1.5rem]'>Step 1 - Create <br /> MetaMask wallet</h2>
                  <p className='text-center mt-[1rem] px-4 max-w-md text-[14px]'>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive NANOA</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto'>
                  <img src={buyBinance} alt="no-img" width={500} height={500} className='w-28'/>
                  <h2 className='font-bold text-2xl mt-[1.5rem]'>Step 2 - Send BNB to your wallet</h2>
                  <p className='text-center mt-[1rem] px-4 max-w-md text-[14px]'>You can transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the BEP-20 network when transferring BNB.</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto'>
                  <img src={ps} alt="no-img" width={500} height={500} className='w-28'/>
                  <h2 className='font-bold text-2xl mt-[1.5rem]'>Step 3 - Connect your <br /> wallet to Pancakeswap</h2>
                  <p className='text-center mt-[1rem] px-4 max-w-md text-[14px]'>Access your wallet to Pancakeswap by clicking ‘Connect Wallet’ and selecting MetaMask.</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className='bg-blue-400 rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto'>
                  <img src={logo} alt="no-img" width={500} height={500} className='w-28'/>
                  <h2 className='font-bold text-2xl mt-[1.5rem]'>Step 4 - Swap BNB for NANOA</h2>
                  <p className='text-center mt-[1rem] px-4 max-w-md text-[14px]'>You can start swapping as soon as you have BNB available! Press ‘Select a currency’ and enter the NANOA token address : <a href="https://bscscan.com/token/0x2d09f330dffd40fc1b49f0b6deb5fa1c3f763226" className='hover:underline'>0x2D09f330DFf.......</a> </p>
                </div>
              </div>
              </div>
              </div>
        </div>
      </div>
      <Footer/>
    </>
  ) 
}
