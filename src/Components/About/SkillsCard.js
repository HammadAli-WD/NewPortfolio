import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';

// skills
import SkillsData from "../../data/SkillsData";

//import "./skills.styles.css";

const SkillsCard = () => {
    return (
      <SkillsStyled>
    <div>
     {/* <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1> */}
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {
                                            SkillsData.frontend.map(({Title, skillsInfo}, i) => (
                                                <>
                                                    <h3>{Title}</h3>
                                                        {skillsInfo.map((p, j) => (
                                                            <span className="p-2" >
                                                    <a className="text-dark text-decoration-none" href={p.link} target="_blank" rel="noopener noreferrer">
                                                        <Image src={p.imgSrc} alt={p.imgAltText} rounded className="image-style m-1"></Image> {p.skillName}
                                                    </a>
                                                    </span>
                                                        )
                                                            )}
                                                    
                                                </>
                                            ))
                                            }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {SkillsData.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {SkillsData.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {SkillsData.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {SkillsData.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href={SkillsData.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                      <Image src={SkillsData.versionControl[0].imgSrc} alt={SkillsData.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {SkillsData.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
            </div>
            </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
    .focus {
  transition: transform 0.3s;
  background: var(--primary-color);
}

.focus:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 2em;
  font-weight: 700;
}

.image-style {
  width: 2em;
}

.font-details {
  font-size: 2em;
  font-weight: 500;
  color: white;
}
 

/* .font-details-b {
  font-size: 3em;
  font-weight: 500;
  color: #231d5af8;
} */
`;

export default SkillsCard;
