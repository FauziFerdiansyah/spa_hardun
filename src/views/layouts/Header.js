import React, { Component } from 'react';
import Image from "react-graceful-image";

class Header extends Component {
  render(){
    return (
        <div>
          <div id="divTopText" className="hidden-xs text-center bold">
            <a href="https://hargadunia.com/registration" className="font-black">
              GABUNG DI HARGADUNIA.COM. DAPATKAN VOUCHER <span className="orange-hg">Rp. 50.000</span> SEKARANG JUGA!
            </a>
          </div>
          <nav id="header-hd" className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="row">
                <div className="hidden-lg col-xs-12">
                  <div className="left-mobile-top">
                    <a href="#menu"><i className="fa fa-bars"></i></a>
                  </div>
                  <center>
                    <a rel="home" href="https://hargadunia.com/">
                      <Image
                        src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-logo-5af3b8b39c9d7"
                        alt=""
                        className="img-responsive mt-10 mobile-hd-logos"
                      />
                    </a>
                  </center>
                  <div className="right-mobile-top">
                    <a href="https://hargadunia.com/cart/editCart">
                      <i className="fa fa-shopping-cart orang-hg"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 visible-lg">
                  <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="17000">
                    <div className="carousel-inner" style={{"height": "74px"}}>
                      <div className="item active">
                        <a className="navbar-brand" rel="home" href="https://hargadunia.com/">
                          <Image
                            src="https://d3ol8ih1xbmzso.cloudfront.net/asset/07-2018/banner/img-logo-5b4c975d6dece"
                            alt=""
                            width="100%"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="item">
                        <a className="navbar-brand" rel="home" href="https://hargadunia.com/">
                          <Image
                            src="https://d3ol8ih1xbmzso.cloudfront.net/img/hd_mascot.png"
                            alt=""
                            width="100%"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="visible-lg col-lg-6 mt-10">
                  <div className="row text-center">
                    <div className="col-lg-4">
                      <h5 className="text-right">Product Origin</h5>
                    </div>
                    <div className="col-lg-2">
                      <a href="https://hargadunia.com/usa" className="header-flag">
                        <Image
                          src="https://d3ol8ih1xbmzso.cloudfront.net/asset/07-2018/banner/img-united-states-5b4c7586a096b"
                          alt=""
                          width="53"
                          height="40"
                          className="flag-icon"
                        /> <br/>
                        <span className="bold">USA</span>
                      </a>
                    </div>
                    <div className="col-lg-2">
                      <a href="https://hargadunia.com/singapore" className="header-flag">
                        <Image
                          src="https://d3ol8ih1xbmzso.cloudfront.net/asset/07-2018/banner/img-singapore-5b4c75773c3bc"
                          alt=""
                          width="53"
                          height="40"
                          className="flag-icon"
                        /> <br/>
                        <span className="bold">Singapore</span>
                      </a>
                    </div>
                    <div className="col-lg-2">
                      <a href="https://hargadunia.com/australia" className="header-flag">
                        <Image
                          src="https://d3ol8ih1xbmzso.cloudfront.net/asset/07-2018/banner/img-australia-5b4c7901a38d9"
                          alt=""
                          width="53"
                          height="40"
                          className="flag-icon"
                        /> <br/>
                        <span className="bold">Australia</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 visible-lg navCarousel no-margin no-padding">
                  <div className="row head-webstore no-margin">
                    <div className="col-lg-3">
                      <a href="https://amazon.com" target="_blank" rel="noopener" className="pull-left">
                        <Image
                          src="https://hargadunia.com/resources/img/webstore/hargadunia-amazon-logo.png"
                          alt=""
                          width="100%"
                          className="text-center img-responsive d-block"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href="https://ebay.com" target="_blank" rel="noopener" className="pull-left">
                        <Image
                          src="https://hargadunia.com/resources/img/webstore/hargadunia-ebay-logo.png"
                          alt=""
                          width="100%"
                          className="text-center img-responsive d-block"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href="https://www.bestbuy.com/" target="_blank" rel="noopener" className="pull-left">
                        <Image
                          src="https://hargadunia.com/resources/img/webstore/hargadunia-bestbuy-logo.png"
                          alt=""
                          width="100%"
                          className="text-center img-responsive d-block"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href="https://www.walmart.com/" target="_blank" rel="noopener" className="pull-left">
                        <Image
                          src="https://hargadunia.com/resources/img/webstore/hargadunia-walmart-logo.png"
                          alt=""
                          width="100%"
                          className="text-center img-responsive d-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
  }
}

export default Header;