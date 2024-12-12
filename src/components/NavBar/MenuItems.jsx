const MenuItems = () => {

    return (
        <>
            <section className="logo">
                <img className="logo-image" src="./assets/images/logo.svg" alt="Logo"/>
                <span className="logo-title">Logo</span>
            </section>
            <ul>
                <li>
                    <a className="menu-item" href="#">Workcases</a>
                </li>
                <li>
                    <a className="menu-item" href="#">Careers</a>
                </li>
                <li>
                    <a className="menu-item" href="#">About</a>
                </li>
                <li className="last-item">
                    <button className="contact-btn">
                        <a className="menu-item menu-button" href="#">Contact</a>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default MenuItems;