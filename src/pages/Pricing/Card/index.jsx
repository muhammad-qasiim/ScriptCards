import { AiOutlineHome } from "react-icons/ai";

const PricingCard = ({ item }) => {

    return (

        <div className="my-18 px-14 w-full md:w-1/2 lg:my-24 lg:px-14 lg:w-1/3">
            <article className="py-26 px-20 rounded-lg custom-shadow cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-14 block lg:text-18 font-bold text-black">Standard Plan</h3>
                    <AiOutlineHome className="text-gray-500 text-24" />
                </div>
                <h6 className="text-left text-sm text-gray-800"> White Labelled for you </h6>

                <h3 className="text-left text-48 lg:text-32 xl:text-60 font-semibold text-black mt-26">$69.99 <sub className='text-16 text-gray-600 font-normal relative bottom-2'>/Month</sub> </h3>

                <ul className='relative circled-list text-left text-gray-800 mt-26'>
                    <li>Unlimited printing</li>
                    <li>Pharmacy branding</li>
                    <li>GST included</li>
                </ul>

                <button className="bg-gray-800 text-white w-full px-32 py-10 rounded-full transition-all mt-32 hover:bg-gray-900 relative top-0 hover:top-px" >Get Started</button>
            </article>
        </div>

    )
}

export default PricingCard;