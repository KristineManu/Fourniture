import React from 'react'
import './footer.css'
import { FaApplePay } from "react-icons/fa6"
import { RiBankCardFill } from "react-icons/ri"
import { RiVisaLine } from "react-icons/ri"
import { BsPaypal } from "react-icons/bs"
import { FaCcMastercard } from "react-icons/fa6"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoLockOpenSharp } from "react-icons/io5"
import { RiArrowGoBackLine } from "react-icons/ri"
import { LuStore } from "react-icons/lu"
import { FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (

    <footer>
      <div className="footer">
        <div className="footer-first">
          <div className="footer-first_container">
            <div className="bloc">
              <BsFillTelephoneFill size={30} />
              <p>Conseil et vente
                09 70 01 89 89</p>
            </div>
            <div className="bloc">
              <IoLockOpenSharp size={30} />
              <p>Paiement sécurisé  en plusieurs fois</p>
            </div>
            <div className="bloc">
              <RiArrowGoBackLine size={30} />
              <p>Retours gratuits pendant 30jours</p>
            </div>
            <div className="bloc">
              <LuStore size={30} />
              <p>Retraits gratuit en magasin</p>
            </div>
          </div>
        </div>
        <div className="footer-secound">
          <div className="social">
          <FaFacebook /> </div>
          <div className="footer-secound_container">
            <div className="items"><FaCcMastercard size={35} /></div>
            <div className="items"><BsPaypal size={25} /></div>
            <div className="items"><RiVisaLine size={40} /></div>
            <div className="items"><RiBankCardFill size={25} /></div>
            <div className="items"><FaApplePay size={40} /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;