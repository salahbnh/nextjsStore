
import Container from "@/components/ui/container";

const Contact = () => {
  return (
    <Container>
      <div className="flex justify-between py-16">
        {/* Left Side - Contact Details */}
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-x-4">
            <span>123 Main Street, City, Country</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span>Monday - Friday: 9 AM - 5 PM</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span>(+123) 456-7890</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span>contact@example.com</span>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="flex flex-col w-1/2">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name">Nom et Prénom</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows={4} className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
