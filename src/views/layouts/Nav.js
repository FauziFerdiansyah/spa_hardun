import React, { Component } from 'react';
import Image from "react-graceful-image";

class Nav extends Component {
  render(){
    return (
      <div className="container-fluid" id="nav">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 visible-lg">
            <div className="hidden-xs">
              <div className="dropdown dropdown-departement pull-right departement-li navCategoryToogle">
                <button className="btn btn-link-sbd" type="button" id="dropdownDepartement">
                  <i className="fa cart-hg fa-fw pull-left"></i>
                  <span className="fnt-small font-white">Shop by</span>
                  <br/>
                  <strong>
                    <span className="fnt-medium font-white">Department</span>
                  </strong>
                  <span className="caret font-white"></span>
                </button>
                <ul className="dropdown-menu departement" role="menu" aria-labelledby="dropdownDepartement"><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Electronics &amp; Computers</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-computers-and-tablets/159726">Computers And Tablets</a></li><li><a href="https://hargadunia.com/c/beli-cell-phones-and-accessories/132499">Cell Phones &amp; Accessories</a></li><li><a href="https://hargadunia.com/c/beli-tv-and-videos/141942">Tv &amp; Videos</a></li><li><a href="https://hargadunia.com/c/video-games/120058">Video Games</a></li><li><a href="https://hargadunia.com/c/mp3-players-and-accessories/172694">Mp3 Players &amp; Accessories</a></li><li><a href="https://hargadunia.com/c/computer-parts-and-components/155398">Computer Parts &amp; Components</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Books</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-books/143466">Books</a></li><li><a href="https://hargadunia.com/c/beli-audiobooks/149791">Audiobooks</a></li><li><a href="https://hargadunia.com/c/Magazines/150097">Magazines</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Home, Garden &amp; Tools</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-furniture-and-decor/141670">Furniture &amp; Decor</a></li><li><a href="https://hargadunia.com/c/beli-bedding-and-bath/189749">Bedding &amp; Bath</a></li><li><a href="https://hargadunia.com/c/beli-appliances/189030">Appliances</a></li><li><a href="https://hargadunia.com/c/beli-patio-lawn-and-garden/100305">Patio, Lawn &amp; Garden</a></li><li><a href="https://hargadunia.com/c/beli-fine-arts/170606">Fine Arts</a></li><li><a href="https://hargadunia.com/c/beli-arts-crafts-and-sewing/187672">Arts, Crafts &amp; Sewing</a></li><li><a href="https://hargadunia.com/c/beli-kitchen-and-dining/156797">Kitchen &amp; Dining</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Beauty, Health &amp; Grocery</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-grocery-and-gourmet-food/138191">Grocery &amp; Gourmet Food</a></li><li><a href="https://hargadunia.com/c/beli-natural-and-organic/170439">Natural &amp; Organic</a></li><li><a href="https://hargadunia.com/c/beli-wine/197534">Wine</a></li><li><a href="https://hargadunia.com/c/beli-all-beauty/141112">All Beauty</a></li><li><a href="https://hargadunia.com/c/Mens-Grooming/135645">Mens Grooming</a></li><li><a href="https://hargadunia.com/c/Health-and-personal-care/178096">Health &amp; Personal Care</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Toys, Kid &amp; Baby</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-toys-and-games/139224">Toys &amp; Games</a></li><li><a href="https://hargadunia.com/c/beli-kids-and-baby-clothing/156762">Kids &amp; Baby Clothing</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Clothing, Shoes &amp; Jewelry</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-clothing/153001">Clothing</a></li><li><a href="https://hargadunia.com/c/beli-shoes/127257">Shoes</a></li><li><a href="https://hargadunia.com/c/beli-jewelry/185618">Jewelry</a></li><li><a href="https://hargadunia.com/c/beli-watches/167939">Watches</a></li><li><a href="https://hargadunia.com/c/beli-accessories/122028">Accessories</a></li><li><a href="https://hargadunia.com/c/handbags/140210">Handbags</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Sports &amp; Outdoors</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-golf/191036">Golf</a></li><li><a href="https://hargadunia.com/c/beli-outdoor-recreation/136981">Outdoor Recreation</a></li><li><a href="https://hargadunia.com/c/beli-cycling/124428">Cycling</a></li><li><a href="https://hargadunia.com/c/exercise-and-fitness/157039">Exercise &amp; Fitness</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Automotive &amp; Industrial</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/beli-automative-parts-and-accessories/105520">Automative Parts &amp; Accessories</a></li><li><a href="https://hargadunia.com/c/beli-automotive-tools-and-equipement/131857">Automotive Tools &amp; Equipement</a></li><li><a href="https://hargadunia.com/c/beli-car-electronics-and-gps/143182">Car Electronics &amp; GPS</a></li><li><a href="https://hargadunia.com/c/tires-and-wheels/109332">Tires &amp; Wheels</a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Sexual Wellness</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/Safer-Sex/132250">Safer Sex</a></li><li><a href="https://hargadunia.com/c/Adult-Toys-and-Games/156043">Adult Toys &amp; Games</a></li><li><a href="https://hargadunia.com/c/Sexual-Enhancers-/132071">Sexual Enhancers </a></li></ul></li><li className="dropdown-submenu"><a role="menuitem" tabIndex="-1" href="#">Luggage &amp; Travel Gear</a><ul className="dropdown-menu"><li><a href="https://hargadunia.com/c/Backpacks/161032">Backpacks</a></li></ul></li></ul>        </div>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12 form-search">
            <div className="hidden left-mobile-sticky-header pull-left">
              <a href="#menu"><i className="fa fa-bars"></i></a>
            </div>
            <form className="form-horizontal" id="formSearch" action="#">
              <div className="input-group input-group-search">
                <span className="input-group-btn">
                  <button className="btn btn-all dropdown-toggle btn-category" type="button" id="dropdownMenu1" data-toggle="dropdown">
                    All <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu menuCategory" role="menu" aria-labelledby="dropdownMenu1">
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="All">All</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="10">Automotive &amp; Industrial</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="6">Beauty, Health &amp; Grocery</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="2">Books</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="8">Clothing, Shoes &amp; Jewelry</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="1">Electronics &amp; Computers</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="5">Home, Garden &amp; Tools</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="4">Kindle</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="12">Luggage &amp; Travel Gear</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="3">Movies, Music &amp; Games</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="11">Sexual Wellness</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="9">Sports &amp; Outdoors</a></li><li role="presentation"><a role="menuitem" tabIndex="-1" href="#" data-value="7">Toys, Kid &amp; Baby</a></li>            </ul>
                </span>
                <input type="hidden" value="" name="category" className="txt-category"/>
                <input type="text" className="form-control ui-autocomplete-input" name="txtSearch" id="keyWords"  value="" placeholder="Cari produk, merk, atau masukkan link Amazon, eBay, Best Buy, atau Walmart disini..." autoComplete="off"/>
                <input type="hidden" value="" name="path"/>
                <span className="input-group-btn search-reset">
                  <button type="reset" className="close hidden" id="resetSearch">×</button>
                </span>
                <span className="input-group-btn">
                  <a className="btn btn-danger" type="button">Go</a>
                </span>
              </div>
            </form>
            <div className="nav-shop mt-5 mb-5">
              <ul className="list-inline mb-0 text-center" style={{"width": "645px"}}>
                <li>
                  <a href="https://hargadunia.com/promo">
                    <strong>All Promo</strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/discount-products">
                    <strong>Sale</strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/free-international-shipping">
                    <strong>Free International Shipping</strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/ready-stock">
                    <strong>Ready Stock</strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/new-products">
                    <strong>New Products</strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/sd/under-100k-49">
                    <strong>Under 100K</strong>
                  </a>
                </li>
                <li className="hidden">
                  <input type="hidden" id="validateStickyHeader" value="showFSI"/>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12 text-right visible-lg">
            <div className="collapse navbar-collapse" id="hd-main-menu">
              <ul className="nav navbar-nav navbar-left">
                <li className="user-li">
                  <button className="btn btn-link-sbd dropdown-toggle" type="button" id="dropdownAccount" data-toggle="dropdown">
                    <span className="fnt-small">
                                    Sign in
                                  </span>
                    <br/>
                    <strong>
                      Account&nbsp;<span className="caret"></span>
                    </strong>
                  </button>
                  <ul className="dropdown-menu user-dropdown" role="menu" aria-labelledby="dropdownAccount">
                                  <li role="presentation">
                      <div className="user-log">
                        <button href="https://hargadunia.com/auth/signin" className="btn btn-block btn-danger sign-in" onClick={() => { window.location='https://hargadunia.com/auth/signin' }}>
                          Sign in
                        </button>
                        <span>New Customer?</span>
                        <a href="https://hargadunia.com/registration">Sign Up</a>
                      </div>
                    </li>
                    <li role="presentation" className="divider"></li>
                                  <li>
                      <a href="https://hargadunia.com/customer">My Account</a>
                    </li>
                    <li>
                      <a href="https://hargadunia.com/cart/editCart">Your Cart</a>
                    </li>
                                    {/* <li className="divider"></li>
                    <li><a href="https://hargadunia.com/incentive">Incentive</a></li> */}
                                                  </ul>
                </li>

                <li className="cart-li">
                  <a className="btn btn-link-sbd" href="https://hargadunia.com/cart/editCart">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="fnt-small">
                                        0
                                    </span>
                    <br/>
                    <strong>
                      Cart&nbsp;<span className="caret"></span>
                    </strong>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right cart-dropdown pt-0" role="menu">
                    <div className="table-responsive">
                      <table className="table-striped table-condensed">
                        <tbody>
                                                <tr>
                              <td className="text-center"><strong>Your Cart</strong></td>
                            </tr>
                            <tr><td className="text-center" style={{"minWidth": "290px"}}>
                              <Image
                                src="https://d3ol8ih1xbmzso.cloudfront.net/asset/09_2017/imgsd_59c219aeee564_imgsld.png"
                                alt=""
                                width="100"
                                className="no-margin cart-image"
                              />
                              <strong>Belum ada barang di keranjang belanja Anda</strong><br/>
                              Pilih produk yang Anda inginkan, dan rasakan kemudahan belanja barang luar negeri sekarang juga!<br/><a className="btn btn-danger btn-sm" href="https://hargadunia.com/" style={{"marginTop": "8px", "borderRadius": "3px", "MozBorderRadius": "3px", "WebkitBorderRadius": "3px", "MozBoxSizing": "border-box", "WebkitBoxSizing": "border-box", "boxSizing": "border-box"}}>Belanja Sekarang!</a>
                            </td>
                                            </tr></tbody>
                      </table>
                    </div>
                  </ul>
                </li>
                            <li>
                    <a className="btn btn-link-sbd" href="https://hargadunia.com/wishlist">
                      <i className="fa fa-heart"></i>
                      <span className="fnt-small">
                      <label id="showTotalWishlistInNav">0</label>
                      <input type="hidden" value="0" id="txtWishlist"/>
                    </span>
                      <br/>
                      <strong>
                      Wishlist
                    </strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/product/Orange-Membership/316701" className="btn btn-link-sbd">
                    <span className="fnt-small">Orange</span>
                    <br/>
                    <strong>
                      Membership
                    </strong>
                  </a>
                </li>
                <li>
                  <a href="https://hargadunia.com/reseller" className="btn btn-link-sbd">
                    <span className="fnt-small">Jadi</span>
                    <br/>
                    <strong>
                      Boss
                    </strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;
