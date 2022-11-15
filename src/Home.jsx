function Home({whatsappDDSLink}) {

  const getLinkToImage  = (imgUrl) => {
    const text = `Hola Dulce Detalle de Susan! Me interesó mucho este producto! Me podrías compartir más detalles y un costo aproximado? Gracias! ${imgUrl}`;
    return `${whatsappDDSLink}&text=${text}`;
  }

  const imageList = [
    "https://i.imgur.com/1xQore8.jpg",
    "https://i.imgur.com/guPkNaa.jpg",
    "https://i.imgur.com/HglEwwP.jpg",
    "https://i.imgur.com/CAgJuNW.jpg",
    "https://i.imgur.com/Zvx1vQj.jpg"
  ]

  return (
    <div className="home-main">
          <div class="main-banner" id="top">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="left-content">
                              <div class="thumb">
                                  <div class="inner-content">
                                      <h4>Dulce Detalle de Susan</h4>
                                      <span>Personalizdos!</span>
                                      <div class="main-border-button">
                                          <a href={getLinkToImage(imageList[4])}>Comprar ahora</a>
                                      </div>
                                  </div>
                                  <img src={imageList[4]} alt="" />
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="right-content">
                              <div class="row">
                                  <div class="col-lg-6">
                                      <div class="right-first-image">
                                          <div class="thumb">
                                              <div class="inner-content">
                                                  <h4>Personalizados</h4>
                                                  <span>Torta personalizada</span>
                                              </div>
                                              <div class="hover-content">
                                                  <div class="inner">                                                      
                                                    <div class="main-border-button">
                                                        <a href={getLinkToImage(imageList[3])}>Consulta aqui</a>
                                                    </div>
                                                  </div>
                                              </div>
                                              <img src={imageList[3]} />
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="right-first-image">
                                          <div class="thumb">
                                              <div class="inner-content">
                                                  <h4>Personalizados</h4>
                                                  <span>Tortas Personalizadas</span>
                                              </div>
                                              <div class="hover-content">
                                                  <div class="inner">                                                      
                                                    <div class="main-border-button">
                                                        <a href={getLinkToImage(imageList[1])}>Consulta aqui</a>
                                                    </div>
                                                  </div>
                                              </div>
                                              <img src={imageList[1]} />
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="right-first-image">
                                          <div class="thumb">
                                              <div class="inner-content">
                                                  <h4>Personalizados</h4>
                                                  <span>Tortas Personalizadas</span>
                                              </div>
                                              <div class="hover-content">
                                                  <div class="inner">                                                      
                                                    <div class="main-border-button">
                                                        <a href={getLinkToImage(imageList[2])}>Consulta aqui</a>
                                                    </div>
                                                  </div>
                                              </div>
                                              <img src={imageList[2]} />
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="right-first-image">
                                          <div class="thumb">
                                              <div class="inner-content">
                                              <h4>Personalizados</h4>
                                                  <span>Tortas Personalizadas</span>
                                              </div>
                                              <div class="hover-content">
                                                  <div class="inner">                                                      
                                                    <div class="main-border-button">
                                                        <a href={getLinkToImage(imageList[0])}>Consulta aqui</a>
                                                    </div>
                                                  </div>
                                              </div>
                                              <img src={imageList[0]} />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
{/*          
          <section class="section" id="men">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Men's Latest</h2>
                              <span>Details to details is what makes Therichpost different from the other themes.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="men-item-carousel">
                              <div class="owl-men-item owl-carousel">
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/men-01.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Classic Spring</h4>
                                          <span>$120.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/men-02.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Air Force 1 X</h4>
                                          <span>$90.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/men-03.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Love Nana ‘20</h4>
                                          <span>$150.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/men-01.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Classic Spring</h4>
                                          <span>$120.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        
          <section class="section" id="women">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Women's Latest</h2>
                              <span>Details to details is what makes Therichpost different from the other themes.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="women-item-carousel">
                              <div class="owl-women-item owl-carousel">
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/women-01.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>New Green Jacket</h4>
                                          <span>$75.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/women-02.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Classic Dress</h4>
                                          <span>$45.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/women-03.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Spring Collection</h4>
                                          <span>$130.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/women-01.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Classic Spring</h4>
                                          <span>$120.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        
          <section class="section" id="kids">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Kid's Latest</h2>
                              <span>Details to details is what makes Therichpost different from the other themes.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="kid-item-carousel">
                              <div class="owl-kid-item owl-carousel">
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/kid-01.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>School Collection</h4>
                                          <span>$80.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/kid-02.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Summer Cap</h4>
                                          <span>$12.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/kid-03.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Classic Kid</h4>
                                          <span>$30.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="item">
                                      <div class="thumb">
                                          <div class="hover-content">
                                              <ul>
                                                  <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                  <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="assets/images/kid-01.jpg" alt="" />
                                      </div>
                                      <div class="down-content">
                                          <h4>Classic Spring</h4>
                                          <span>$120.00</span>
                                          <ul class="stars">
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                              <li><i class="fa fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
       
          <section class="section" id="explore">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="left-content">
                              <h2>Explore Our Products</h2>
                              <span>You are allowed to use this Therichpost HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</span>
                              <div class="quote">
                                  <i class="fa fa-quote-left"></i><p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                              </div>
                              <p>There are 5 pages included in this Therichpost Template and we are providing it to you for absolutely free of charge at our therichpost website. There are web development costs for us.</p>
                              <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/therichpost" target="_blank">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                              <div class="main-border-button">
                                  <a href="products.html">Discover More</a>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="right-content">
                              <div class="row">
                                  <div class="col-lg-6">
                                      <div class="leather">
                                          <h4>Leather Bags</h4>
                                          <span>Latest Collection</span>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="first-image">
                                          <img src="assets/images/explore-image-01.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="second-image">
                                          <img src="assets/images/explore-image-02.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="types">
                                          <h4>Different Types</h4>
                                          <span>Over 304 Products</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
       
          <section class="section" id="social">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="section-heading">
                              <h2>Social Media</h2>
                              <span>Details to details is what makes Therichpost different from the other themes.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row images">
                      <div class="col-2">
                          <div class="thumb">
                              <div class="icon">
                                  <a href="http://instagram.com">
                                      <h6>Fashion</h6>
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="assets/images/instagram-01.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-2">
                          <div class="thumb">
                              <div class="icon">
                                  <a href="http://instagram.com">
                                      <h6>New</h6>
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="assets/images/instagram-02.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-2">
                          <div class="thumb">
                              <div class="icon">
                                  <a href="http://instagram.com">
                                      <h6>Brand</h6>
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="assets/images/instagram-03.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-2">
                          <div class="thumb">
                              <div class="icon">
                                  <a href="http://instagram.com">
                                      <h6>Makeup</h6>
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="assets/images/instagram-04.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-2">
                          <div class="thumb">
                              <div class="icon">
                                  <a href="http://instagram.com">
                                      <h6>Leather</h6>
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="assets/images/instagram-05.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-2">
                          <div class="thumb">
                              <div class="icon">
                                  <a href="http://instagram.com">
                                      <h6>Bag</h6>
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="assets/images/instagram-06.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
      
          <div class="subscribe">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-8">
                          <div class="section-heading">
                              <h2>Contactanos a nuestro Whatsapp para hacer tu pedido delivery</h2>
                              <span></span>
                          </div>
                          {/* <form id="subscribe" action="" method="get">
                              <div class="row">
                              <div class="col-lg-5">
                                  <fieldset>
                                  <input name="name" type="text" id="name" placeholder="Your Name" required="" />
                                  </fieldset>
                              </div>
                              <div class="col-lg-5">
                                  <fieldset>
                                  <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required="" />
                                  </fieldset>
                              </div>
                              <div class="col-lg-2">
                                  <fieldset>
                                  <button id="form-submit" class="main-dark-button">

                                  <a href={whatsappDDSLink}></a>

                                    <i class="fa fa-paper-plane"></i>
                                </button>
                                  </fieldset>
                              </div>
                              </div>
                          </form> */}
                      </div>
                      <div class="col-lg-4">
                          <div class="row">
                              <div class="col-6">
                                  <ul>
                                      <li>Ubicación:<br /><span>VMT</span></li>
                                  </ul>
                              </div>
                              <div class="col-6">
                                  <ul>
                                      <li>Horas de trabajo:<br /><span>07:30 AM - 9:30 PM Diariamente</span></li>
                                      <li>Social Media:<br />                                      <span>
                                        <a href="https://www.instagram.com/dulcedetalledesusan/">Instagram</a>, 
                                        <a href={whatsappDDSLink}>Whatsapp</a>
                                        </span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Home;