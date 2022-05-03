// Import Assets
// import cryptocasino-logo from "../assets/cryptocasino-logo.gif"
import token_swap_snip from "../assets/token_swap_snip.png"
import ocean_art_snip from "../assets/ocean_art_snip.png"
import coming_soon from "../assets/coming_soon.png"

const Projects = () => {
    return (
        <section className="projects">
            <h2 className="text-glow">My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                        <h3>Crypto Casino</h3>
                        <img src={coming_soon} alt="CryptoCasinoLogo-ani" />

                        <p>
                            Smart contract driven online casino. Users can stake for rewards and risk it all at the roulette wheel.
                        </p>
                        <div className="project__links">
                            <a href="" target="_blank" className="button">Demo</a>
                            <a href="https://github.com/RabowNicholas/Casino" target="_blank" className="button">Code</a>
                        </div>
                        <div className="hidden-content">
                            <h4> Key Takeaways </h4>
                            <ul>
                                <li> Writing secure smart contracts </li>
                                <li> Use oracle to provide verifiable random number </li>
                            </ul>
                        </div>
                </div>

                <div className="projects__card">
                        <h3>NFT Minting App</h3>
                        <img src={ocean_art_snip} alt="NFT-charity-app" />

                        <p>
                            Application to mint random NFT from art collection. Proceeds go to non-profit organization.
                        </p>
                        <div className="project__links">
                            <a href="https://www.loom.com/share/454b5f81bc83479a90d9b14393d6163e" target="_blank" className="button">Demo</a>
                            <a href="https://github.com/RabowNicholas/NFT-Charity-Minting-App" target="_blank" className="button">Code</a>
                        </div>
                        <div className="hidden-content">
                            <h4> Key Takeaways </h4>
                            <ul>
                                <li> Connect wallet to metamask </li>
                                <li> Explore ERC-721 standard </li>
                            </ul>
                        </div>
                </div>

                <div className="projects__card">
                        <h3>Token Swap App</h3>
                        <img src={token_swap_snip} alt="Token-swap-app" />

                        <p>
                            Users can connect wallet and exchange ETH for DAPP tokens and vice-versa.
                        </p>
                        <div className="project__links">
                            <a href="https://www.loom.com/share/32a3278379104a978ba9e53b7755c6e5" target="_blank" className="button">Demo</a>
                            <a href="https://github.com/RabowNicholas/Token-Swap-App" target="_blank" className="button">Code</a>
                        </div>
                        <div className="hidden-content">
                            <h4> Key Takeaways </h4>
                            <ul>
                                <li> Receiving real time price information via an oracle</li>
                                <li> Explore ERC-20 standard </li>
                            </ul>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;