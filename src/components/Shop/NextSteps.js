import { useState } from 'react';
import SectionTitleOne from '../Sections/SectionTitle/SectionTitleOne';

function NextStepsTitle({ style }) {
  return (
    <div className='next-steps-header' style={style}>
      <div className='container'>
        <SectionTitleOne showSubTitle align='center'>
          Next steps?
        </SectionTitleOne>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'Step 1: we are sending you the invoice',
    description:
      'we are confirming the order and will be emailing you the invoice shortly.',
  },
  {
    name: 'Step 2: you pay the invoice',
    description:
      'the invoice can be paid with your preferred payment method online.',
  },
  {
    name: 'Step 3: we ship your order',
    description:
      'once we receive the payment, we will ship your order and send you a confirmation.',
  },
];

export default function NextSteps({ style }) {
  const [currentChoose, setCurrentChoose] = useState(data[0].name);
  return (
    <>
      <NextStepsTitle />
      <div className='next-steps-list-container' style={style}>
        {/* <VideoFrame poster={currentVideoImg} height={500} src={currentVideoSrc} /> */}
        <div className='next-steps-list-container__content'>
          <div className='container'>
            {data.map((item, index) => (
              <div
                onMouseOver={() => {
                  setCurrentChoose(item.name);
                }}
                key={index}
                className={`introduction-two__content__item ${
                  currentChoose === item.name ? 'active' : ''
                }`}
              >
                {!item.description && <span>0{index + 1}.</span>}
                <a href={'#'} onClick={(e) => e.preventDefault()}>
                  {item.name}
                </a>
                <p>{item.description && item.description}</p>
              </div>
            ))}
            <div className={`introduction-two__content__item`}>
              <h3>
                Some products can only be purchased by the existing customers of
                the Skinnovation Clinic.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
