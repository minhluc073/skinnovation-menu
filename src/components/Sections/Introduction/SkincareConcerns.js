import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import SectionTitleOne from '../SectionTitle/SectionTitleOne';
import LazyLoad from 'react-lazyload';

export default function SkincareConcerns({ title, concerns }) {
  return concerns && concerns.length > 0 ? (
    <div className='introduction-six'>
      <div className='container'>
        <SectionTitleOne align='center'>{title}</SectionTitleOne>
        <div className='introduction-six__wrapper'>
          <div className='row'>
            {concerns.map((concern, index) => (
              <ConcernItem key={index} {...(concern || {})} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

const ConcernItem = ({ name, description, icon }) => {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='introduction-six__wrapper__item'>
        <div className='introduction-six__wrapper__item__image'>
          <LazyLoad height={150} offset={100}>
            <img
              src={icon ? `${icon}?w=150` : '/shop/assets/images/concern.png'}
              alt={name}
            />
          </LazyLoad>
        </div>
        <div className='introduction-six__wrapper__item__content'>
          <Link href={'#'}>
            <a>{name}</a>
          </Link>
          {description && <BlockContent blocks={description} />}
        </div>
      </div>
    </div>
  );
};
