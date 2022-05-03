// Import Assets
import profile from '../assets/profile.JPG';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Nicholas Rabow" />

            <div className='header__content'>
                <h1 className="text-glow">Hi, I'm Nicholas Rabow </h1>
                <p className="text-glow">Blockchain Developer</p>
                <a href="mailto:rabownick123@gmail.com?subject=Portfolio Interest" className='button'>
                   Get In Touch
                </a>
            </div>
        </section>
    );
}

export default Header;