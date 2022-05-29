import { useState } from 'react';
import Accordion from '../../components/common/Accordion'
import PricingCard from './Card'

function Pricing() {

  const PricingCards = [{title: "Standard Plan", price: '$69.99', package_time: '/Month'}, {title: "Premium Plan", price: '$89.99', package_time: '/Month'}, {title: "Enterprise Plan", price: 'Get in touch.'}]

  return (
    <>
      <main className="container mx-auto px-24 lg:px-99 pb-99 my-99">
        <section className="w-full 2xl:w-2/3 mx-auto text-center">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Pricing Plans</h3>
          <p className="mt-4 text-18 text-gray-500">ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.</p>
        </section>

        <div className="text-center mt-99">

          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {
              PricingCards?.map(item => (
                <PricingCard item={item} />
              ))
            }
          </div>

          <p className="mt-4 text-left text-14 px-14 text-gray-600">* Requires a ZEBRA Thermal Transfer Printer with a roll of cards and a genuine zebra ribbon to be purchased separately in addition to the monthly subscription. Current pricing is introductory and subject to change without notice for new subscribers.</p>

          <hr className="w-240 mx-auto mt-99" />
        </div>

        <div className="mt-99">
          <h3 className="text-38 lg:text-56 font-semibold mb-42 text-black leading-44 lg:leading-58 text-center">Frequently Asked Questions</h3>
          <p className="mt-4 text-18 text-gray-500 mb-62 px-0 md:px-24 lg:px-99 text-center">ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.</p>

          <Accordion>
            ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.          </Accordion>
          <Accordion>
            ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.          </Accordion>
          <Accordion>
            ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.          </Accordion>
          <Accordion>
            ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.          </Accordion>
        </div>
      </main>
    </>
  );
}

export default Pricing;