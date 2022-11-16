import  React from 'react'

function ConnectBtn({handleClick}) {

    return (
        <button className='btnWallet' onClick={handleClick}>
            Connect wallet
        </button>
    )
}

export default ConnectBtn;