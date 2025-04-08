import { FunctionComponent, useCallback } from "react";
// import Button from "./Button"; // Removed
import { useNavigate } from "react-router-dom";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const scrollToSection = useCallback((target: string) => {
    const anchor = document.querySelector(`[data-scroll-to='${target}']`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const navigate = useNavigate();

  const handleLearnMoreClick = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <footer
      className={`bg-green-800 text-white border-t border-green-800 w-full py-10 ${className}`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* CTA Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Let's work together</h2>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            {/* <Button buttonText="Receive News" showButtonText propBackgroundColor="#fff" propColor="#111928" /> */}
            <h3
              className="text-17xl font-semibold uppercase cursor-pointer"
              onClick={() => scrollToSection("contactContainer")}
            >
              Contact
            </h3>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-center md:text-left">
          <div>
            <h3
              className="text-lg font-semibold uppercase cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </h3>
            <ul className="mt-2 text-sm space-y-2">
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("aboutUsContainer")}
              >
                About Us
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("servicesContainer")}
              >
                Services
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("blog")}
              >
                Blog
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("contactContainer")}
              >
                Contact Us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase">Services</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li className="cursor-pointer" onClick={() => scrollToSection("PersonalIncomeTaxPreparation")}>Personal Income Tax</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("AccountingPayrollandTaxes")}>Accounting, payroll and Taxes Services for Buisnesses</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("BusinessServices")}>Buisnesses Services</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("FinancialYearEnd")}>Financial Year End and Audit Readiness</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("BusinessPlanning")}>Business Planning & Advisory</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("LegacyPlanning")}>Legacy Planning and Business Valuations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase">Blog</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li
                className="cursor-pointer"
                onClick={() => handleLearnMoreClick("1")}
              >
                Smart Tax Strategies
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleLearnMoreClick("2")}
              >
                Optimize Your Business
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleLearnMoreClick("3")}
              >
                Latest Tax Changes
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold uppercase">Contact</h3>
            <p className="mt-2 text-sm">Email: info@dineshcpa.ca</p>
            <p className="text-sm">1-855-DINESH-1</p>
            <p className="text-sm">(1-855-346-3741)</p>
            <p className="text-sm">1-613-480-0184</p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full border-t border-gray-400 my-6"></div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" alt="Logo" src="/logo1.svg" />
            <span className="font-semibold">
              Dinesh Professional Corporation
            </span>
          </div>
          <p className="text-center md:text-left">
            &copy; 2025 Dinesh Professional Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {/* <img className="w-6 h-4" alt="Flag" src="/flags--ca.svg" /> */}
            <img
              className="w-6 h-4"
              alt="Flag"
              src="https://flagicons.lipis.dev/flags/4x3/ca.svg"
            />
            <span>English (Canada)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
