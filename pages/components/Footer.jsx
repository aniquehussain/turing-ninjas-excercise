import styles from '../../styles/Home.module.css';

const Footer = () => {
    return (

        <footer className={styles.footer} id="contact">

            <p className="font-semibold px-2">&lt; / &gt;</p>
            <a
                href="https://syedanique.herokuapp.com"
                target="_blank"
                className="font-bold text-red-500"
            >
                Syed Anique</a>
        </footer>

    );
}

export default Footer;