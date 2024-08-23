import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container py-24 sm:py-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>
      <div className="bg-muted/80 border rounded-lg p-8">
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

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="mt-8 bg-muted border rounded-lg p-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="message">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </div>
  );
};

export default Contact;