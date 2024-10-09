import { create } from 'zustand';
import axios from 'axios';

async function getCryptops() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    console.log(Data)
}

export const useCryptoStore = create(() => ({
    fetchCryptos: () => {
        console.log('fetching cryptos')
    }
}))