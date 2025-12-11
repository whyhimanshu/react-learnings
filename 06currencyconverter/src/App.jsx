import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import bgImage from '/Users/himanshumac/Documents/Documents/WebD/react-learnings/06currencyconverter/aerial-view-tokyo-cityscape-with-fuji-mountain-japan.jpg'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return  (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <h4 className="text-center text-black drop-shadow-md text-xl sm:text-xl font-semibold tracking-wide mb-4">
                      Currency Converter <span className="text-black">by Himanshu</span>
                    </h4>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1 text-black">
                            <InputBox
                                label="From"
                                currency={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setAmount(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 text-black">
                            <InputBox
                                label="To"
                                currency={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {
                              from.toUpperCase() 
                            }
                            {" "} 
                            to
                            {" "} 
 
                            {
                              to.toUpperCase()
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )

}
export default App
