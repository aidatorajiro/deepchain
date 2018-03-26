import Web3 from 'web3'

let web3

if (window.web3 === 'undefined') {
  web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'))
} else {
  web3 = window.web3
}

export default web3