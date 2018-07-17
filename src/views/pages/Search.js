import React, { Component } from 'react';
import Product from "./commons/Product";

class Search extends Component {
    render() {
      const product = [{
        name: "Anker SoundCore Bluetooth Speaker with 24-Hour Playtime, 66-Foot Bluetooth Range & Built-in Mic, Dual-Driver Portable Wireless Speaker with Low Harmonic Distortion and Superior Sound - Black",
        price: "Rp. 589.000",
        pdisc: "Rp. 328.000",
        disc: "40%",
        country: "AU",
        prdfrom: "Jakarta, Indonesia",
        store: "Ebay",
        image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0Fua2VyX1NvdW5kMTY6MzE6NDg_160.jpg",
        id: 1
      }, {
        name: "Google - Google Home - White/Slate fabric",
        price: "Rp. 2.284.000",
        pdisc: "",
        disc: "",
        country: "US",
        prdfrom: "Los Angeles, USA",
        store: "Amazon Echo Chochodot Aus",
        image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0dvb2dsZV8tX0dvMDQ6MTU6NTE_160.jpg",
        id: 2
      }, {
        name: "Amazon - Echo Dot - White",
        price: "Rp. 871.000",
        pdisc: "",
        disc: "",
        country: "SG",
        prdfrom: "Singapore",
        store: "Ishopchangi",
        image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0FtYXpvbl8tX0VjMTU6NDQ6MjQ_160.jpg",
        id: 3
      }, {
        name: "Elmer's Washable No-Run School Glue, 4 oz, 1 Count",
        price: "Rp. 60.000",
        pdisc: "",
        disc: "",
        country: "SG",
        prdfrom: "Singapore",
        store: "Ishopchangi",
        image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0VsbWVyJ3NfV2FzMTQ6MzM6MjI_160.jpg",
        id: 4
      }, {
        name: "Barbie TommyXGigi Doll",
        price: "Rp. 864.000",
        pdisc: "",
        disc: "",
        country: "SG",
        prdfrom: "Singapore",
        store: "Ishopchangi",
        image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0JhcmJpZV9Ub21tMDk6MzA6MzE_160.jpg",
        id: 5
      }, {
        name: "Certified Refurbished Kindle Paperwhite E-reader - Black, 6'' High-Resolution Display (300 ppi) with Built-in Light, Wi-Fi - Includes Special Offers",
        price: "Rp. 1.745.000",
        pdisc: "",
        disc: "",
        country: "SG",
        prdfrom: "Singapore",
        store: "Ishopchangi",
        image: "https://images-na.ssl-images-amazon.com/images/I/51nk%2BaSvOFL.jpg_AA160_.jpg",
        id: 6
      }, {
        name: "OGX Thick & Full Biotin & Collagen Shampoo, 13 Oz",
        price: "Rp. 277.000",
        pdisc: "",
        disc: "",
        country: "SG",
        prdfrom: "Singapore",
        store: "Ishopchangi",
        image: "https://i5.walmartimages.com/asr/8a52a1a0-9d73-40f8-92d7-3becf289a2c9_1.8f2a6667c6fb90f77d1076003c9d2362.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        id: 7
      }];

      return (
        <section>
          <div className="widget">
            <div className="widget-heading grey">
              <div className="row">
                <form className="search" method="get" id="search-filter" action="https://hargadunia.com/search/q">
                  <label className="col-xs-12 col-sm-4">
                    <p className="text-left">
                      1 - 60								of over
                      1908 results for
                      Lego							</p>
                  </label>
                  
                  <div className="col-xs-12 col-sm-4">
                    <div className="row">
                      <label className="col-xs-12 col-md-2">Filter:</label>
                      <div className="col-xs-12 col-md-10">
                                          <div className="radio">
                          <label>
                            <input type="radio" name="fltr" value="free-international-shipping"/>
                            Free International Shipping
                          </label>
                          <a id="tooglepop" className="dark-hg popup" data-container="body" data-toggle="popover" data-placement="top" data-content="Gratis ongkos kirim pengiriman dari Amerika ke Indonesia" data-original-title="" title="">
                          <i className="fa fa-info-circle blue-hg"></i>
                          </a>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="fltr" value="ready-stock"/>
                            Ready Stock
                          </label>
                          <a id="tooglepop" className="dark-hg popup" data-container="body" data-toggle="popover" data-placement="top" data-content="Produk tersedia di gudang Indonesia" data-original-title="" title="">
                          <i className="fa fa-info-circle blue-hg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">	
                      <label className="col-xs-12 col-md-2">Origin:</label>
                      <div className="col-xs-12 col-md-10">
                        <div className="radio">
                          <label>
                            <input type="radio" name="origin" value="226"/>
                            USA
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="origin" value="192"/>
                            Singapore
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="origin" value="13"/>
                            Australia
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <label className="col-xs-12 col-sm-1">Urutkan:</label>
                  <div className="col-xs-12 col-sm-3">
                    <select name="srt" className="form-control input-sm">
                      <option value="">Terpopuler</option>
                      <option value="newest">Terbaru</option>
                      <option value="cheapest">Termurah</option>
                      <option value="most_expensive">Termahal</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {product.map((prd_data) => 
              <Product product={prd_data} key={prd_data.id}/>
            )}
          </div>
        </section>
      );
    }
  }
  
  export default Search;