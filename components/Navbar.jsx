function Navbar() {
  return (
    <header>
      <div className="profile">
        <img src="/image/icons8-profile-48.png" alt="profile" />
        <h1 className="logo">Yonatan.</h1>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
