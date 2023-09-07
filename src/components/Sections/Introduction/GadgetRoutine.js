import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import BlockContent from "@sanity/block-content-to-react";

export default function GadgetRoutine({
  name,
  thumbImage,
  routine,
  routineDescription,
}) {
  const [currentAccordionIndex, setCurrentAccordionIndex] = useState(1);

  if(!routine || !Array.isArray(routine) || routine.lenght <= 0){
    return null;
  }

  return (
    <div className="introduction-seven">
      <div className="introduction-seven__wrapper -bottom">
        <div className="introduction-seven__wrapper__image">
          {thumbImage && <img src={thumbImage} alt={name} />}
        </div>
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6 ml-auto">
                <div className="introduction-seven__wrapper__content__detail">
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Gadget routine
                  </SectionTitleOne>
                  {routineDescription && (
                    <BlockContent
                      className="routine-description"
                      blocks={routineDescription}
                    />
                  )}
                  <Accordion
                    defaultActiveKey={1}
                    onSelect={(i) => {
                      console.log({ i });
                      setCurrentAccordionIndex(i + 1);
                    }}
                  >
                    {routine &&
                      Array.isArray(routine) &&
                      routine
                        .filter((i) => i.level === 1)
                        .map((item, index) => (
                          <Card key={index}>
                            <Accordion.Toggle as={Card.Header} eventKey={index + 1}>
                              {item.children[0]?.text}
                              <i
                                className={`fa fa-angle-${
                                  currentAccordionIndex === index
                                    ? "up"
                                    : "down"
                                }`}
                              />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index + 1}>
                              <Card.Body>
                                <RoutineSteps index={index} routine={routine} />
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RoutineSteps = ({ routine, index }) => {
  if (!routine || !Array.isArray(routine)) {
    return null;
  }
  const allLevelTwoItems = routine.filter((i) => i.level === 2);
  if (!allLevelTwoItems || allLevelTwoItems.length <= 0) {
    return null;
  }

  const levelTwoItems = allLevelTwoItems[index];
  if (!levelTwoItems) {
    return null;
  }

  return (
    <div className="routine-steps">
      <BlockContent blocks={levelTwoItems} />
    </div>
  );
};
