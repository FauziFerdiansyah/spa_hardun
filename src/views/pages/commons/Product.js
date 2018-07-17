import React, { Component } from 'react';
import Image from "react-graceful-image";

class Product extends Component {
  render(){
    return (
      <div className="col-xs-6 col-md-4 col-lg-3 product">
        <div className="product-item">
          <div className="all-badge hidden-sm hidden-xs">
          </div>
          
          <a href="https://hargadunia.com/product/lego-minecraft-the-village-21105/122" className="prod-image">
            <Image
              src={this.props.product.image}
              alt={this.props.product.name}
              className="img-responsive text-center d-block"
            />
          </a>
          <div className="prod-title" title={this.props.product.name}>
            <a href="https://hargadunia.com/product/lego-minecraft-the-village-21105/122">
              {this.props.product.name}
            </a>
          </div>
          <div className="prod-price">
            <div className="real-price">
              {this.props.product.price}         
            </div>
            <a id="tooglepop" className="dark-hg popup" data-container="body" data-toggle="popover" data-placement="top" data-content="Harga sudah termasuk biaya pengiriman internasional, pajak, penanganan, dan Hargadunia fee Rp 14.000. Belum termasuk biaya pengiriman lokal melalui JNE/REX. Lowest Price Guarantee* Silahkan hubungi Whatsapp 0815-1994-6044 untuk harga yang tidak sesuai dan kami akan sesuaikan." data-original-title="" title="">
              <i className="fa fa-info-circle blue-hg"></i>
            </a>
          </div>
          <div className="rate">
            <span className="review-total">
              <a href="https://hargadunia.com/review/reviewProduct/122">
                (2 reviews)
              </a>
            </span>
            <p className="orange-hg">
              Produk ini dikirim dari Los Angeles, USA 
              <a id="tooglepop" className="dark-hg popup cursor pointer" data-container="body" data-toggle="popover" data-placement="top" data-content="Dikarenakan kebijakan baru dari Kepabean Indonesia mengenai impor barang, maka Pengiriman Regular (Regular Shipment) ditiadakan untuk sementara ini dan seluruh pengiriman di Hargadunia.com hanya menggunakan metode Air Shipment. (estimasi 15-30 hari kerja*)." data-original-title="" title="">
                <i className="fa fa-info-circle blue-hg"></i>
              </a> <br/>
              <span className="fa flag-icon flag-icon-us"></span>
              Amazon              
              <a id="tooglepop" className="dark-hg popup cursor pointer" data-container="body" data-toggle="popover" data-placement="top" data-content="Nama Penjual" data-original-title="" title="">
                <i className="fa fa-info-circle blue-hg"></i>
              </a>
            </p>
          </div>
          <div className="all-badge hidden-xs tablet-product">
          </div>
          <div className="all-badge visible-sm visible-xs">
          </div>
        </div>
      </div>
    )
  }
}

export default Product;