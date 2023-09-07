import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import Button from "../../Control/Button";
import classNames from "classnames";

export default function ServiceItem(props) {
  const {
    bigImgSrc,
    smallImgSrc,
    title,
    description,
    order,
    reverse,
    ctaLink,
    ctaTitle,
  } = props;
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
  const renderListStyle = (content) => {
    if (reverse) {
      return (
        <>
          {content}{" "}
          <i className="fas fa-check" style={{ marginLeft: 5 / 15 + "em" }} />
        </>
      );
    }
    return (
      <>
        <i className="fas fa-check" style={{ marginRight: 5 / 15 + "em" }} />{" "}
        {content}
      </>
    );
  };
  return (
    <div className={`services__item ${classNames({ "-reverse": reverse })}`}>
      <div className="container">
        <div className="row">
          <div
            className={`col-12 col-md-6 ${classNames({
              "order-md-2": reverse,
            })}`}
          >
            <div className="services__item__image">
              <div className="services__item__image__background">
                <img
                  src="/shop/assets/images/introduction/IntroductionThree/bg.png"
                  alt="background"
                />
              </div>

              <div className="services__item__image__detail">
                <div className="image__item">
                  {bigImgSrc && (
                    <div ref={bg1} className="wrapper">
                      <img data-depth="0.3" src={bigImgSrc} alt="image" />
                    </div>
                  )}
                </div>

                <div className="image__item">
                  <div ref={bg2} className="wrapper">
                    {smallImgSrc && (
                      <img
                        data-depth="0.2"
                        data-invert-x
                        data-invert-y
                        src={smallImgSrc}
                        alt="image"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 ${classNames({
              "order-md-1": reverse,
            })}`}
          >
            <div className="services__item__content">
              <div className="services__item__order">
                {reverse ? <h3>.{order}</h3> : <h3>{order}.</h3>}
              </div>
              <h2 className="services__item__title">{title}</h2>
              <p className="services__item__description">{description}</p>
              {/* <ul>
                <li>
                  {renderListStyle("Lorem ipsum dolor sit amet, consectetur.")}
                </li>
                <li>
                  {renderListStyle("Adipiscing elit, sed do eiusmod tempor.")}
                </li>
                <li>
                  {renderListStyle(
                    "Incididunt ut labore et dolore magna aliqua."
                  )}
                </li>
                <li>
                  {renderListStyle("Quis ipsum suspendisse ultrices gravida.")}
                </li>
              </ul> */}
              {ctaLink && ctaTitle && (
                <Button color="white" action={ctaLink} content={ctaTitle} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
