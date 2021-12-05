import React from 'react';
import BarcodeForm from './BarcodeForm'

import { Link, Heading, Paragraph } from 'src/components'

export const Home: React.FC = () => (
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-24 md:p-8">
    <div className="p-8 md:p-0">
      <Paragraph>
        In <Link href="https://blog.parkrun.com/uk/2021/11/22/scanning-from-mobile-devices/">November 2021</Link> parkrun HQ
        announced that virtual barcodes were now acceptable at their events, and that a physical barcode was no longer mandatory.
      </Paragraph>
      <Paragraph>
        As iPhones and Apple Watches have the <Link href="https://www.apple.com/wallet/">Apple Wallet</Link> feature that make ID passes and barcodes easily accessible,
        it seemed like a great fit!
      </Paragraph>
      <div className="flex flex-row justify-around my-4">
        <div className="w-64 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center mr-4">
          <div className="bg-black p-2 rounded-lg">
            <img className="object-cover" src="/iphone-screenshot.png" alt="The pass on an iPhone" />
          </div>
          <p className="pt-4">
            On an iPhone 📱
          </p>
        </div>
        <div className="w-64 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center ml-4">
          <div className="bg-black p-2 rounded-lg">
            <img className="object-cover" src="/watch-screenshot.png" alt="The pass on an Apple Watch" />
          </div>
          <p className="pt-4">
            On an Apple Watch ⌚
          </p>
        </div>
      </div>
      <Heading>
        Who made this?
      </Heading>
      <Paragraph>
        This tool was made by Robert Sargant (<Link href="https://www.parkrun.org.uk/parkrunner/208864/all/">A208864</Link>) in order to scratch a personal itch.
        It's open source, and you can <Link href="https://github.com/sargant/dfyb.run">find it on Github</Link>!
      </Paragraph>
      <Paragraph>
        If you'd like to give me any feedback, you can find me at <Link href="https://twitter.com/dfyb_run">@dfyb_run</Link> or <Link href="https://twitter.com/sargant">@sargant</Link> on Twitter.
      </Paragraph>
      <Paragraph>
        If you'd like to tip a little something to cover the costs of developing this, please go to <Link href="https://ko-fi.com/sargant">ko-fi.com/sargant</Link> 🙂
      </Paragraph>
    </div>
    <div>
      <BarcodeForm />
    </div>
  </div>
);
