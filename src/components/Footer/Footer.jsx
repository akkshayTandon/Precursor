import { footerLinksArray } from "../../Data/footerdata";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-gray-400 bg-gray-900 mt-auto"
    >
      <div className="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:pl-0">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center lg:justify-center">
          {footerLinksArray.map((footerLink, id) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={id}>
                <h2 className="title-font font-medium text-white tracking-widest mb-3">
                  {footerLink.footerLinkHeading}
                </h2>
                <div className="list-none mb-10 flex flex-col gap-4">
                  {footerLink.footerLinks.map((link, id) => {
                    return (
                      <li key={id}>
                        <Link
                          to={link.footerLinksrc}
                          className="text-gray-400 hover:text-white"
                        >
                          {link.footerLinkName}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-2 flex flex-wrap justify-center items-center flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Copyright © 2024 Precursor Info Solutions — All rights reserved by
            <strong> Precursor Info Solutions Pvt. Ltd.</strong>
          </p>
        </div>
      </div>
      
    </footer>
  );
}

