import React, { useRef, useEffect } from 'react';
import Parallax from 'parallax-js';

import Button from '../../Control/Button';
import SectionTitleOne from '../SectionTitle/SectionTitleOne';

export default function MainHero({ data }) {
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  useEffect(() => {
    let parallax1 = new Parallax(bg1.current);
    let parallax2 = new Parallax(bg2.current);
    return () => {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);

  if (!data) {
    console.warn("IntroductionOne can't render, data is undefined");
  }
  const { title, subTitle, description, btn, image1, image2, background1, background2 } = data || {};

  return (
    <div className='introduction-one'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6'>
            <div className='introduction-one__image'>
              <div className='introduction-one__image__detail'>
                {image1 && image1.src && (
                  <img src={image1?.src} alt={image1?.alt} />
                )}
                {image2 && image2.src && (
                  <img src={image2?.src} alt={image2?.alt} />
                )}
              </div>
              <div className='wrapper'>
                <div className='introduction-one__image__background'>
                  {background1 && background1.src && (
                    <div className='background__item'>
                      <div ref={bg1} className='wrapper'>
                        <img
                          data-depth='0.5'
                          src={background1?.src}
                          alt={background1?.alt}
                        />
                      </div>
                    </div>
                  )}
                  {background2 && background2.src && (
                    <div className='background__item'>
                      <div ref={bg2} className='wrapper'>
                        <img
                          data-depth='0.3'
                          data-invert-x
                          data-invert-y
                          src={background2?.src}
                          alt={background2?.alt}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='introduction-one__content'>
              {data && (
                <h5>
                  {subTitle.main} <span>{subTitle.span}</span>
                </h5>
              )}
              {title && (
                <SectionTitleOne spaceBottom='1.875em'>
                  {title.main}
                  <br />
                  {title.span}
                </SectionTitleOne>
              )}
              {description && <p>{description}</p>}
              {btn && <Button {...btn} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
