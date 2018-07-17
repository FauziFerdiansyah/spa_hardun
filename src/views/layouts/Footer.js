import React, { Component } from 'react';
import Image from "react-graceful-image";

class Footer extends Component {
  render(){
    return (
      <div>
        <footer className="footer">
          <div className="container-fluid body-wrap">
            <div className="row">
                    <div className="col-xs-12 mt-20">
                <div className="row">
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                    <h6 className="title-footer orange-hg">ABOUT HARGADUNIA</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a href="https://hargadunia.com/about-us">
                          <i className="fa fa-info-circle"></i> About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/terms-conditions">
                          <i className="fa fa-info-circle"></i> Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/testimonial">
                          <i className="fa fa-volume-up"></i> Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/ready-stock">
                          <i className="fa fa-th-large"></i> Ready Stock in Indonesia
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                    <h6 className="title-footer orange-hg">LET US HELP YOU</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a href="https://hargadunia.com/shoppingCart">
                          <i className="fa fa-shopping-cart"></i> Shopping Cart
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/customer">
                          <i className="fa fa-user"></i> Your Account
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/contact-us">
                          <i className="fa fa-envelope-o"></i> Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/faq">
                          <i className="fa fa-question-circle"></i> FAQs
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/how-to-order">
                          <i className="fa fa-eye"></i> How To Order
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.com/sitemap.xml">
                          <i className="fa fa-globe"></i> Sitemap
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-xs-12" id="nws_hg">
                    <h6 className="title-footer orange-hg">NEWSLETTER</h6>
                    <form className="form-horizontal" action="#" id="subscribe-newsletter">
                      <div className="row">
                        <div className="col-lg-12 col-xs-12">
                          <input type="email" name="txtEmail" placeholder="Your Email" className="form-control"/>
                        </div>
                        <div className="col-lg-12 col-xs-12 mb-10">
                          <label className="radio-inline">
                              <input type="radio" name="gender" id="inlineRadio1" value="male"/> Pria
                            </label>
                          <label className="radio-inline">
                              <input type="radio" name="gender" id="inlineRadio2" value="female"/> Wanita
                            </label>
                        </div>
                        <div className="col-lg-12 col-xs-12">
                          <button type="button" name="button" className="btn btn btn-default btn-block">Subscribe</button>
                          <div className="alert hidden mt-10">

                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <h6 className="title-footer orange-hg">PAYMENT METHOD</h6>
                    <ul className="list-inline partner-logo">
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Visa Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Mastercard Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/JCB Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/American Express Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/ATM Bersama Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Mandiri Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/BCA Klikpay Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/CIMB Clicks Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Sakuku Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Doku Wallet Logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Akulaku Logo.png" className="text-center d-inline" /></li>
                    </ul>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <h6 className="title-footer orange-hg">SECURE PAYMENT</h6>
                    <ul className="list-inline partner-logo">
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Verified by Visa.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Secure Code.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/J Secure.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/payment-method/Safe Secure.png" className="text-center d-inline" /></li>
                    </ul>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <h6 className="title-footer orange-hg">FOLLOW US</h6>
                    <ul className="list-unstyled list-inline">
                      <li>
                        <a href="https://facebook.com/hargadunia" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-facebook.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/hargadunia.id" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-instagram.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/hargadunia" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-twitter2.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCRuKjMks63Fi893DUA_vJfQ" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-youtube.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <a href="https://plus.google.com/105099208149266065645" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-google-plus.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company-beta/16209420/" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-linkedin.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <a href="https://hargadunia.blogspot.co.id/" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-blog.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                    </ul>
                    <h6 className="title-footer orange-hg">CHAT WITH US</h6>
                    <ul className="list-unstyled list-inline">
                      <li>
                        <a href="https://line.me/R/ti/p/%40hargadunia" target="_blank" rel="noopener">
                          <Image src="https://hargadunia.com/resources/img/icon-line.png" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                      <li>
                        <Image src="https://s3-ap-southeast-1.amazonaws.com/hargadunia/images/social-media/blackberry.svg" className="text-center d-inline" width="26" height="26" />
                      </li>
                      <li>
                        <a href="https://api.whatsapp.com/send?phone=628990011115&amp;text=Hai Customer Service Hargadunia, Saya butuh bantuan.">
                          <Image src="https://s3-ap-southeast-1.amazonaws.com/hargadunia/images/social-media/whatsapp.svg" className="text-center d-inline" width="26" height="26" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <h6 className="title-footer orange-hg">LOGISTIC PARTNER</h6>
                    <ul className="list-inline partner-logo">
                      <li><Image src="https://hargadunia.com/resources/img/jne-logo.png" className="text-center d-inline" /></li>
                      <li><Image src="https://hargadunia.com/resources/img/rex-logo.png" className="text-center d-inline" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="container-fluid body-wrap text-center mt-20 mb-20">
          © Copyright
          Hargadunia.com - Hobi belanja barang-barang branded murah? Gak usah jauh-jauh ke Amerika. Pilih barang yang kamu suka dan Hargadunia belikan untuk kamu dengan biaya $1 Dollar saja. <br/> Powered by
            <a href="http://kenjalo.com" target="_blank" rel="noopener"><u>Kenjalo Technology</u></a>. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Footer;