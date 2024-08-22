const Contact = () => {
  return (
    <div className="container py-24 sm:py-32 h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>
      <div className="bg-muted border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Perspective Engineering Consulting PLLC</h2>
        <p className="text-lg mb-2">8 High Tor Rd,</p>
        <p className="text-lg mb-2">New City, NY 10956</p>
        <p className="text-lg mb-2">Phone: +1 (845) 459-9467</p>
        <p className="text-lg mb-2">
          Email: <a href="mailto:peter@PEC-MEP.com" className="text-primary hover:underline">peter@PEC-MEP.com</a>
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/profile.php?id=61560803636778"
              target="_blank"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/peterashayapepmp/"
              target="_blank"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;