import React from 'react'
import "./Hello.css"
import LanguageIcon from '@mui/icons-material/Language';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import v1 from '../../images/1.svg'


function hello() {
  return (
    <>
    <div className='sideall'>

    <div className='text-white h5 head1'>
      Airnow
    </div>

<div className='brdr'></div>
<div className='cntnt'>
      Manage
    </div>
    
    <div className='list'>
      <ul>
        <li> <SettingsInputAntennaIcon></SettingsInputAntennaIcon> <span></span>Proxy</li>
        <li><AccountBalanceWalletIcon></AccountBalanceWalletIcon> <span></span>Balance</li>
        <li><LanguageIcon></LanguageIcon><span></span> Online Check   </li>
        <li><AddLinkIcon></AddLinkIcon> <span></span>Affiliate system  </li>

      </ul>
    </div>


    <div className='cntnt'>
      Support
    </div>
    
    <div className='list'>
      <ul>
        <li> <SettingsInputAntennaIcon></SettingsInputAntennaIcon><span></span> Ticket</li>
        <li><AccountBalanceWalletIcon></AccountBalanceWalletIcon> <span></span>FAQ</li>

      </ul>
    </div>


    <div className='contact'>
<div className='box2'> 

<div className='text-white hc'>
  Help Center
  </div>
  <div className='vhc'>
    Visit our help center
  </div>

  <div className='btn text-white bg-primary star'>
start
  </div>

  <div>
  <img src={v1} width='140'/>
  </div>
</div>
    </div>
    
    </div>
    </>
  )
}

export default hello;