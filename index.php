<?php
include($_SERVER['DOCUMENT_ROOT'] ."/inc/header.inc.php");
include($_SERVER['DOCUMENT_ROOT'] . "/inc/dbh.inc.php");
include($_SERVER['DOCUMENT_ROOT'] . "/inc/news_card.inc.php");
?>
<!-- Header end -->
<main>

  <!--
    Carousel
  -->

      <div class="carousel">
        <div class="caro-item" >
          <div class="txt-btn-container">
            <div id="caro1" class="text-button">
              <div class="caro-box">
                <div class="caro-text">
                  <h1 class="caro-title">Web Design</h1>
                  <p class="caro-p">
                    For businesses looking to make a strong<br>
                    and effective first impression.
                  </p>
                </div>
                <a href="#">
                  <div class="caro-link" id="caro-link1">
                    <span>Find out more</span>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="caro-item">
          <div id="caro2" class="text-button">
            <div class="caro-box">
              <div class="caro-text">
                <h1 class="caro-title">IT Support</h1>
                <p class="caro-p">
                  Fast and cost-effective IT support<br>
                  services for your business.
                </p>
              </div>
              <a href="#">
                <div class="caro-link" id="caro-link2">
                  <span>Find out more</span>
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="caro-item">
          <div id="caro3" class="text-button">
            <div class="caro-box">
              <div class="caro-text">
                <h1 class="caro-title">Telecoms Services</h1>
                <p class="caro-p">
                  A new approach to connectivity, see how<br>
                  we can help your business.
                </p>
              </div>
              <a href="#">
                <div class="caro-link" id="caro-link3">
                  <span>Find out more</span>
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="caro-item">
          <div id="caro4" class="text-button">
            <div class="caro-box">
              <div class="caro-text">
                <h1 class="caro-title">Bespoke Software</h1>
                <p class="caro-p">
                  Bring your business together<br>
                  with solutions that grow with you.
                </p>
              </div>
              <a href="#">
                <div class="caro-link" id="caro-link4">
                  <span>Find out more</span>
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="caro-item">
          <div id="caro5" class="text-button">
            <div class="caro-box">
              <div class="caro-text">
                <h1 class="caro-title">Digital Marketing</h1>
                <p class="caro-p">
                  Generating you business through<br>
                  results-driven marketing activities.
                </p>
              </div>
              <a href="#">
                <div class="caro-link" id="caro-link5">
                  <span>See how we can help you</span>
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="caro-item">
          <div id="caro6" class="text-button">
            <div class="caro-box">
              <div class="caro-text">
                <h1 class="caro-title">Cyber Security</h1>
                <p class="caro-p">
                  Keeping businesses and their customers<br>
                  sensitive information protected.
                </p>
              </div>
              <a href="#">
                <div class="caro-link" id="caro-link6">
                  <span>Find out more</span>
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

  <!--
    Info Box
  -->

    <div class="info-wrapper">
      <div class="info-boxes">

        <div class="anchor-wrapper" id="bespoke-anchor">
          <a class="info-anchor" href="#">
           <div class="info-box three-flex">
             <div class="info-icon" id="info-icon1">
               <i class="fas fa-th"></i>
             </div>
             <h2 class="info-title">Bespoke Software</h2>
             <div class="rule"></div>
             <span class="text-span">
               Tailored software solutions to improve business productivity and
               online profits. Our expert team will ensure a software solution.
             </span>
             <div class="read-more" id="read-more1">
               <div class="read-text">
                 Read more
               </div>
             </div>
           </div>
          </a>
        </div>

        <div class="anchor-wrapper" id="it-anchor">
          <a class="info-anchor" href="#">
            <div class="info-box three-flex">
              <div class="info-icon" id="info-icon2">
                <i class="fas fa-desktop"></i>
              </div>
              <h2 class="info-title">IT Support</h2>
              <div class="rule"></div>
              <span class="text-span">
                Remotely managed IT services that is catered to your businesses
                needs, adds value and reduces costs.
              </span>
              <div class="read-more" id="read-more2">
                <div class="read-text">
                  Read more
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="anchor-wrapper" id="marketing-anchor">
          <a class="info-anchor" href="#">
            <div class="info-box three-flex">
              <div class="info-icon" id="info-icon3">
                <i class="far fa-chart-bar"></i>
              </div>
              <h2 class="info-title">Digital Marketing</h2>
              <div class="rule"></div>
              <span class="text-span">
                Driving brand awareness and ROI through creative digital marketing
                campaigns. We review and monitor online performances.
              </span>
              <div class="read-more" id="read-more3">
                <div class="read-text">
                  Read more
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="flex-break"></div>

        <div class="anchor-wrapper" id="tele-anchor">
          <a class="info-anchor" href="#">
            <div class="info-box four-flex">
              <div class="info-icon" id="info-icon4">
                <i class="fas fa-phone"></i>
              </div>
              <h2 class="info-title">Telecoms Services</h2>
              <div class="rule"></div>
              <span class="text-span">
                Stay connected with bespoke telecoms solutions when you need it
                most.
              </span>
              <div class="read-more" id="read-more4">
                <div class="read-text">
                  Read more
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="anchor-wrapper purple-anchor" id="web-anchor">
          <a class="info-anchor" href="#">
            <div class="info-box four-flex">
              <div class="info-icon" id="info-icon5">
                <i class="fas fa-code"></i>
              </div>
              <h2 class="info-title">Web Design</h2>
              <div class="rule"></div>
              <span class="text-span">
                User-centric design for businesses looking to make a lasting first
                impression.
              </span>
              <div class="read-more" id="read-more5">
                <div class="read-text">
                  Read more
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="anchor-wrapper" id="cyber-anchor">
          <a class="info-anchor" href="#">
            <div class="info-box four-flex">
              <div class="info-icon" id="info-icon6">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h2 class="info-title">Cyber Security</h2>
              <div class="rule"></div>
              <span class="text-span">
                Ensuring your online business stays secure 24/7, 365 days of the
                year.
              </span>
              <div class="read-more" id="read-more6">
                <div class="read-text">
                  Read more
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="anchor-wrapper purple-anchor" id="developer-anchor">
          <a class="info-anchor" href="#">
            <div class="info-box four-flex">
              <div class="info-icon" id="info-icon7">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h2 class="info-title">Developer Training</h2>
              <div class="rule"></div>
              <span class="text-span">
                Have you considered a career in web development but you aren’t
                sure where to start?
              </span>
              <div class="read-more" id="read-more7">
                <div class="read-text">
                  Read more
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

  <!--
    About Section
   -->

    <aside class="about-wrapper ab-wrapper--mod">
      <div class="about-flex">
        <div class="about-child about-child-1 about--mod">
          <div>
            <h2 class="about--title">NETMATTERS</h2>
          </div>
          <div>
            <p class="about--p">
              <strong class="about--strong">
                Netmatters Ltd is a leading web design, IT support and digital
                marketing agency based in Wymondham, Norfolk.
              </strong>
            </p>
          </div>
          <div>
            <p class="about--p">
              Founded in 2008, we work with businesses from a variety of industries
              to gain new prospects, nurture existing leads and further grow their sales.
            </p>
          </div>
          <div>
            <p class="about--p">
              We provide cost effective, reliable solutions to a range of services;
              from bespoke cloud-based management systems, workflow and IT solutions
              through to creative website development and integrated digital campaigning.
            </p>
          </div>
          <a href="#">
            <div class="culture">
              <span>Our culture</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>

        <div class="about-child">
        </div>
      </div>
    </aside>

  <!--
    News Section
  -->

    <section>

        <div class="span-line-container">
          <div class="span-n-line">
            <div class="latest-block">
              <div class="latest">
                <h3>
                  Latest
                </h3>
              </div>
            </div>
          </div>
        </div>

      <div class="news box--shadow-news">


        <div class="card-container">
          <?php foreach($cards as $card){ ?>
          <div class="news-containers">
            <div class="news-blocks">
              <div class="background1">
                <img src=
                "
                <?php echo $card['image_url']; ?>
                "
                alt=
                "
                <?php echo $card['image_name']; ?>
                "
                class="news-image grow">
                <a href="#">
                  <div class="news-tag"
                  style="background-color:<?php echo $card['card_color']; ?>"
                  ><?php echo $card['card_category']; ?></div>
                </a>
              </div>
              <div class="info-date">
                <div class="news-info">
                  <div>
                    <a href="#" id="news-link-style-1">
                      <h3 style="color:<?php echo $card['card_color']; ?>"
                      class="news-title"
                      >
                        <?php echo $card['card_title']; ?>
                      </h3>
                    </a>
                  </div>
                <div class="news-p">
                  <?php echo $card['card_content']; ?>
                </div>
                <a href="#">
                  <div style=
                  "
                  background-color:<?php echo $card['card_color']; ?>
                  "
                  class="read-more read1 btn-drkn">
                    Read more
                  </div>
                </a>
              </div>

                <div class="footer-wrapper">
                  <div class="news-footer">
                    <div class="mini-logo">
                      <img src=
                      "
                      <?php echo $card['icon_url']; ?>
                      "
                      alt=
                      "
                      <?php echo $card['icon_name']; ?>
                      "
                      style="border-radius:100%;">
                    </div>
                    <div class="news-foot-txt">
                      <div class="posted">
                        <h4>
                            Posted by <?php echo $card['card_author']; ?>
                        </h4>
                      </div>
                      <div class="break"></div>
                      <div class="date">
                        <span><?php echo $card['date']; ?></span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <?php } ?>

        </div>
      </div>
    </section>

  <!--
    Client Badge Bar
   -->

      <div class="client-bar box--shadow-client">
        <div class="client-parent-wrapper">
          <div class="client-parent">
            <div class="client-img">
              <a href="#">
                <div class="arrow-box arrow-box2">
                  <h3>Busseys</h3>
                  <div class="tt-line"></div>
                  <p>
                    One of the UK's leading Ford dealerships
                  </p>
                </div>
                <div class="arrow arrow2">
                </div>
                <div>
                  <img src="img/client/busseys-bw.jpg" alt="" class="bw-img busseys">
                  <img src="img/client/busseys.png" alt="" class="colour-img busseys">
                </div>
              </a>
            </div>

            <div class="client-img">
              <a href="#">
                <div class="arrow-box">
                  <h3>Crane Garden Builders</h3>
                  <div class="tt-line"></div>
                  <p>
                    Leading manufacturer and supplier of high-end garden rooms,
                    summerhouses, workshops and sheds in the UK.
                  </p>
                </div>
                <div class="arrow">
                </div>
                <div>
                  <img src="img/client/crane-bw.jpg" alt="" class="bw-img crane">
                  <img src="img/client/crane.png" alt="" class="colour-img crane">
                </div>
              </a>
            </div>

            <div class="client-img">
              <a href="#">
                <div class="arrow-box arrow-box2">
                  <h3>Beat</h3>
                  <div class="tt-line"></div>
                  <p>
                    The UK's eating disorder charity founded in 1989.
                  </p>
                </div>
                <div class="arrow arrow2">
                </div>
                <div>
                  <img src="img/client/beat-bw.jpg" alt="" class="bw-img beat">
                  <img src="img/client/beat.png" alt="" class="colour-img beat">
                </div>
              </a>
            </div>

            <div class="client-img">
              <a href="#">
                <div class="arrow-box">
                  <h3>Northern Diver</h3>
                  <div class="tt-line"></div>
                  <p>
                    Global water based equipment manufacturers for sport, military,
                    commercial and rescue businesses.
                  </p>
                </div>
                <div class="arrow">
                </div>
                <div>
                  <img src="img/client/northern-diver-bw.jpg" alt="" class="bw-img
                  northern-d">
                  <img src="img/client/northern-diver.png" alt="" class="colour-img
                  northern-d">
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

  <!--
    Sign Up Section
   -->

    <section class="sign-up-section">
      <div class="sign-up">
        <div>
          <div class="input-head">
            <h3 class="input-header">Email Newsletter Sign-Up</h3>
          </div>
          <div class="input-container">
          <div class="input-name">
            <div class="input-label">
              <label>Your Name</label>
            </div>
            <div class="break"></div>
            <input type="text" name="name" class="input-field input-field1">
          </div>
          <div class="input-email">
            <div class="input-label your-email">
              <label>Your Email</label>
            </div>
            <div class="break"></div>
            <input type="email" name="email" class="input-field input-field2">
          </div>
          </div>

          <form class="form-group">
            <p class="form-elements">
              <input type="checkbox" class="checkbox" checked="checked" name="check">
              <label class="label">
                  Please tick this box if you wish to receive marketing from us.
                  please see our <a href="#" id="privacy-link">Privacy Policy</a> for more information
                  on how we use your data.
              </label>
            </p>
          </form>
          <div class="break">
          </div>
          <button name="submit" class="read-more btn btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </section>

<?php include($_SERVER['DOCUMENT_ROOT'] ."/inc/footer.inc.php"); ?>
