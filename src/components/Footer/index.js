import currency from "../../images/Language.png"
import social from "../../images/Frame 28.png"
import pay from "../../images/Frame 136278.png"
import { MdCopyright } from "react-icons/md";

import "./index.css"

const Footer = () => (
    <div className="footer-bg">
        <div className="footer-con">
            <div className="footer-top">
                <div>
                    <h1 className="footer-head">BE THE FIRST TO KNOW</h1>
                    <p className="footer-para">Sign up for the updates from metta muse</p>
                    <div>
                        <input type="text" className="input-box" />
                        <button type="button" className="btn">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="contact-sec">
                    <h1 className="footer-head">CONTACT US</h1>
                    <p className="footer-para">+44 221 133 5360</p>
                    <p className="footer-para">cutsomercare@mettamuse.com</p>
                    <h1 className="footer-head">CURRENCY</h1>
                    <img src={currency} alt="currency" />
                    <p className="footer-para">Transactions will be completed in Euros and a currency reference is available on hour</p>
                </div>
                <hr className="hr-small" />
                <div className="contact-sec-small">
                    <h1 className="footer-head">CALL US</h1>
                    <p className="footer-para">+44 221 133 5360</p>
                    <p className="footer-para">cutsomercare@mettamuse.com</p>

                </div>
                <hr className="hr-small" />
                <div className="contact-sec-small">
                    <h1 className="footer-head">Currency</h1>
                    <img src={currency} alt="currency" />

                </div>

                <hr className="hr-small" />
                <div className="contact-sec-small">
                    <select className="selection footer-head">
                        <option className="opt">metta muse</option>
                        <option className="opt">About us</option>
                        <option className="opt">Stories</option>
                        <option className="opt">Artisans</option>
                        <option className="opt">Boutiques</option>
                        <option className="opt">Contact us</option>
                        <option className="opt">EU Compliancs Docs</option>
                    </select>

                </div>
                <hr className="hr-small" />
                <div className="contact-sec-small">
                    <select className="selection footer-head">
                        <option className="opt">QUICK LINKS</option>
                        <option className="opt">Orders & Shipping</option>
                        <option className="opt">Join/Login as a Seller</option>
                        <option className="opt">Payment & Pricing</option>
                        <option className="opt">Return & Refunds</option>
                        <option className="opt">FAQs</option>
                        <option className="opt">Privacy Policy</option>
                        <option className="opt">Terms & Conditions</option>
                    </select>

                </div>
                <hr className="hr-small" />
                <div className="contact-sec-small">
                    <select className="selection footer-head">
                        <option className="opt">FOLLOW US</option>
                        <option className="opt">Instagram</option>
                        <option className="opt">LinkedIn</option>

                    </select>

                </div>
            </div>
            <hr className="hr-small" />
            <div className="contact-sec-small">

                <h1 className="footer-head">metta muse Accepts</h1>
                <img src={pay} alt="payment" />
            </div>

        </div>
        <hr className="hr-removed-in-small"/>
        <div className="footer-bottom">
            <div className="fb-1">
                <h1 className="footer-head">metta muse</h1>
                <p className="footer-para">About Us</p>
                <p className="footer-para">Srories</p>
                <p className="footer-para">Artisians</p>
                <p className="footer-para">Boutiques</p>
                <p className="footer-para">Contact Us</p>
                <p className="footer-para">EU Compliance Docs</p>
            </div>
            <div className="fb-2">
                <h1 className="footer-head">QUICK LINKS</h1>
                <p className="footer-para">Orders & Shipping</p>
                <p className="footer-para">Join/Login as a Seller</p>
                <p className="footer-para">Payment & Pricing</p>
                <p className="footer-para">Return & Refunds</p>
                <p className="footer-para">Privacy Policy</p>
                <p className="footer-para">Terms & Conditions</p>
            </div>
            <div className="fb-3">
                <h1 className="footer-head">FOLLOW US</h1>
                <img src={social} alt="social" />
                <div className="fb-3-1">
                    <h1 className="footer-head">metta muse Accepts</h1>
                    <img src={pay} alt="payment" />
                </div>
            </div>
        </div>
        <p className="footer-para-cr">Copyright <span className="cr-icon"><MdCopyright size={20} /></span> 2023 mettamuse. All rights reserved.</p>
    </div >
)
export default Footer