import { FunctionComponent } from "react";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {

  return (
    <div
      className={`w-full max-w-4xl mx-auto py-8 text-center items-center justify-center  ${className} `}
      data-scroll-to="contactContainer"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/store.svg" alt="Company Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Company Information</h3>
          <p className="text-gray-500 text-sm">
            Dinesh Singh CGA, CPA
            <br /> Dinesh Professional Corporation
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/mappin.svg" alt="Address Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Address</h3>
          <p className="text-gray-500 text-sm">
            2985 Drew Rd Suite 216
            <br /> Mississauga, ON L4T 0A7
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/phone.svg" alt="Contact Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Contact Us</h3>
          {/* Phone for .ca website */}
          {/* <p className="text-gray-500 text-sm">+1 613 480 0184</p> */}
          {/* Phone for .com website */}
          <p className="text-gray-500 text-sm m-2">1-855-DINESH-1</p>
          <p className="text-gray-500 text-sm m-2">(1-855-346-3741)</p>
          <p className="text-gray-500 text-sm m-2">1-613-480-0184</p>
          <p className="text-gray-500 text-sm m-2">
            Email us for general queries, including marketing and partnerships.
            <b className="block mt-2 text-green-600"> info@dineshcpa.ca</b>
          </p>
        </div>
      </div>

      {/* <ContactForm /> */}
    </div>
  );
};

export default Contact;
