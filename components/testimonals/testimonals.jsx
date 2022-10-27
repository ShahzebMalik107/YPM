import Head from "next/head";
import React from "react";
import Slider from "react-slick";


const Testimonals = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <h2 className="testimonals-heading heading"> Testimonials </h2>
      <Slider {...settings}>
        <div>
          <div className="slider-inner-s">
            <img src="/testimonals/Huub-Van-Der-Mark.png" />
            <div>
              <h3>Huub Van Der Mark</h3>
              <h4 className="testimonal-subheading">HuubVlogs</h4>
              <p className="paragraph">
                Hey guys, I am Huub Van Der Mark from Huub Vlogs. I am a
                YouTuber and I work with YourProductMatters. They help me with
                management, design, web development and promoting social media.
                They are very good in keeping me up to date about everything
                that is going on, you should try them for yourself.
              </p>
              {/* <div className="social-media">
                <a
                  href="https://www.youtube.com/c/HuubVlogs"
                  className="btn-social-media"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  href="https://www.instagram.com/huubvlogs/?hl=en"
                  className="btn-social-media"
                  target="_blank"
                >
                  Instagram
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="slider-inner-s">
            <img src="/testimonals/Alexander-Volberding.png" />
            <div>
              <h3>Alexander Volberding</h3>
              <h4 className="testimonal-subheading">CollegeFreeUSA</h4>
              <p className="paragraph">
                Hey, so my name is Alexander. I doing the Vlog College Free and
                I just want to say that YourProductMatters has been super
                important to my success just because they were able to promote
                the heck out of all of my content and it's really because of
                them that my views are so high and literally went to like the
                absolute roof. So I want to say that I can absolutely absolutely
                vouch for all of the work that they have done in the social
                media and the marketing and all of that stuff. So like it's been
                absolutely absolutely massive. So I absolutely do recommend
                YourProductMatters.
              </p>
              {/* <div className="social-media">
                <a
                  href="https://www.youtube.com/c/CollegeFreeUSA"
                  className="btn-social-media"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  href="https://www.instagram.com/alexander.video/"
                  className="btn-social-media"
                  target="_blank"
                >
                  Instagram
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="slider-inner-s">
            <img src="/testimonals/Sara-Farooqi.png" />
            <div>
              <h3>Sara Farooqi</h3>
              <h4 className="testimonal-subheading">CEO- Kidsplate</h4>
              <p className="paragraph">
                My name is Sarah Farooqi and I'm the CEO of Kidsplate, we sell
                edible items that are suitable for kids and are approved by a
                nutritionist. I collaborated with YourProductMatters to develop
                my online store and manage social media marketing and they're
                pretty awesome. You should try them yourself.
              </p>
              {/* <div className="social-media">
                <a
                  href="https://www.instagram.com/kidsplatepk/"
                  className="btn-social-media"
                  target="_blank"
                >
                  Instagram
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="slider-inner-s">
            <img src="/testimonals/amil.png" />
            <div>
              <h3>Amel</h3>
              <h4 className="testimonal-subheading">Amel Yoga</h4>
              <p className="paragraph">
                Hello, my name is Amel. I come from France. I am a yoga teacher
                and I am trying to enhance my online presence. I decided to let
                YourProductMatters handle my social media presence. So my
                YouTube my Instagram and my Facebook and they did an amazing
                job. So we have been working together for six months, the team
                at YourProductMatters is very professional, they do everything
                very good. They tell you everything beforehand, they explain you
                things very well so that you don't have any bad surprise or
                anything and I had amazing results and I'm so happy I found them
                and we are still working together and we are going to create
                amazing things together. Thank you so much, I wish the best for
                them and really don't hesitate go with YourProductMatters.
              </p>
              {/* <div className="social-media">
                <a
                  href="https://www.youtube.com/channel/UCQEqSFdW2RC9NJmm6oimTYw?view_as=subscriber"
                  className="btn-social-media"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  href="https://www.instagram.com/itsamelyoga/?hl=en"
                  className="btn-social-media"
                  target="_blank"
                >
                  Instagram
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="slider-inner-s">
            <img src="/testimonals/marsha.png" />
            <div>
              <h3>Jordan</h3>
              <h4 className="testimonal-subheading">Marsha Jean</h4>
              <p className="paragraph">
                I'm Jordan and here's a special Yay for YourProductMatters my
                social media managing team who have kept me covered throughout
                my travels. They have done a phenomenal job of helping me stay
                connected. They're so good at Social Media Marketing, special
                hug for the team at YourProductMatters. I cannot thank you
                enough. You guys really made me shine and if you too are looking
                for outreach I cannot recommend them enough.
              </p>
           
              {/* <div className="social-media">
                <a
                  href="https://www.youtube.com/c/MarshaJean"
                  className="btn-social-media"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  href="https://www.instagram.com/themarshajean/"
                  className="btn-social-media"
                  target="_blank"
                >
                  Instagram
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonals;
