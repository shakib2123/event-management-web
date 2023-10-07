const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/ZzDHxHL/Banner.jpg)",
      }}
      className="bg-no-repeat bg-cover bg-center"
    >
      <footer className="footer p-10  bg-transparent max-w-7xl mx-auto text-white">
        <aside>
          <p className="text-center">
            <span className="text-4xl font-medium">TECH WISE Ltd.</span>
            <br />
            <span className="text-lg font-semibold">
              Providing reliable tech since 1992
            </span>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <p className="text-gray-200 text-center pb-4">
        Copyright © 2023 - All right reserved by TECH WISE Ltd
      </p>
    </div>
  );
};

export default Footer;
