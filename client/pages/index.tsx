import Image from 'next/image';

export const logoSrc = 'https://static.octopuscdn.com/logos/logo.svg';

export default function Home() {
    return (
        <main>
            <div className="home">
                <figure>
                    <Image
                        loader={() => logoSrc}
                        src={logoSrc}
                        alt="Octopus Energy Logo"
                        width={470}
                        height={67}
                    />
                </figure>
                <h1>Welcome to the Octopus Energy Frontend code test!</h1>
                <p>
                    Get started by visiting the <code>/product</code> URL and editing{' '}
                    <code>client/pages/product.js</code>
                </p>
            </div>
        </main>
    );
}
