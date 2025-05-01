import Head from 'next/head';
import WalletProvider from '../assets/WalletProvider';
import TopMenu from '../assets/TopMenu';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <WalletProvider>
        {({ provider, account, connectWallet, disconnectWallet }) => (
          <>
            <TopMenu
              account={account}
              connectWallet={connectWallet}
              disconnectWallet={disconnectWallet}
            />

            <Head>
              <title>How It Works | Polygon Token Tool</title>
              <meta
                name="description"
                content="Step-by-step guide to launching your Polygon token – no coding required, secure, fast, and affordable."
              />
              <meta property="og:title" content="How It Works - Polygon Token Creator" />
              <meta
                property="og:description"
                content="Create your Polygon token with no code. Launch your coin on blockchain securely and instantly."
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="/how-it-works" />
            </Head>

            <div className="container mx-auto p-6 max-w-3xl bg-background text-black">
              <h1 className="text-3xl md:text-4xl font-bold font-sans text-center mb-8 animate-fadeIn">
                How It Works
              </h1>

              {/* Step-by-Step Guide */}
              <section className="mb-12 p-6 bg-muted rounded-xl animate-fadeIn">
                <h2 className="text-xl md:text-2xl font-bold font-sans mb-4 relative">
                  Step-by-Step Guide to Launch Your Token
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-green-800 animate-fadeIn"></span>
                </h2>
                <p className="text-black font-sans mb-4">
                  Follow these simple steps to create and launch your token on the Polygon blockchain with Us:
                </p>
                <ol className="list-decimal list-inside space-y-4 text-black font-sans">
                  <li>
                    <span className="font-bold">Connect Your Wallet:</span> Click the "Connect Wallet" button in the top right corner to link your MetaMask wallet securely.
                  </li>
                  <li>
                    <span className="font-bold">Switch to Polygon Network:</span> Ensure your MetaMask wallet is set to the Polygon network. If it’s not listed, add it as a custom network using details from{' '}
                    <a
                      href="https://chainlist.org/chain/1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      chainlist.org/chain/1
                    </a>.
                  </li>
                  <li>
                    <span className="font-bold">Fill in Token Details:</span> Navigate to the "Create Coin" page, and enter your token’s name, symbol, and initial supply. Optionally, enable features like minting, burning, or unlimited supply.
                  </li>
                  <li>
                    <span className="font-bold">Pay the Platform Fee:</span> Approve a small platform fee via MetaMask to initiate the token creation process.
                  </li>
                  <li>
                    <span className="font-bold">Deploy Your Token:</span> After the fee is paid, approve the second transaction to deploy your token contract on Polygon. This takes just a few seconds!
                  </li>
                  <li>
                    <span className="font-bold">View Your Token:</span> Once deployed, you’ll receive a link to view your token on Blockchain, confirming its creation on the blockchain.
                  </li>
                  <li>
                    <span className="font-bold">Manage Your Token:</span> Add your token to MetaMask using the contract address, and start managing your new token as its owner!
                  </li>
                </ol>
              </section>

              {/* Benefits Section */}
              <section className="p-6 bg-muted rounded-xl animate-fadeIn">
                <h2 className="text-xl md:text-2xl font-bold font-sans mb-4 relative">
                  Why Choose Us?
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-green-800 animate-fadeIn"></span>
                </h2>
                <ul className="list-disc list-inside space-y-4 text-black font-sans">
                  <li>
                    <span className="font-bold">No Coding Required:</span> Create a token without any technical expertise—just fill out a simple form.
                  </li>
                  <li>
                    <span className="font-bold">Lightning Fast:</span> Launch your token in under 60 seconds with our streamlined process.
                  </li>
                  <li>
                    <span className="font-bold">Secure and Decentralized:</span> Built on the Polygon blockchain for maximum security and transparency.
                  </li>
                  <li>
                    <span className="font-bold">Affordable:</span> Minimal fees to get started to deploy your token.
                  </li>
                  <li>
                    <span className="font-bold">User-Friendly:</span> Designed for beginners and experts alike, with clear steps and support.
                  </li>
                </ul>
              </section>
            </div>
          </>
        )}
      </WalletProvider>
    </div>
  );
}
