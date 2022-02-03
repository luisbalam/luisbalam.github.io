import React from 'react';

import { Container, Col, Row, Image } from 'react-bootstrap';
import { FaGithub, FaLink } from "react-icons/fa";

import classes from './index.module.css';

const Projects = ({ title, projects }) => (
  <section id='projects' className={classes.Projects}>
    <Container>
      <h3 className={classes.Title}>{title}</h3>
      <Row>
        {projects.map(project => {
          return <Col key={project.id} sm='12' lg='6' className='d-flex justify-content-center align-items-center mt-3 mb-3'>
            <div className={`${classes.FlipCard}`}>
              <div className={`${classes.FlipCardInner}`}>
                <div className={classes.FlipCardFront} style={{background: `url(${project.image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
                  { <Image src={project.image} alt={`${project.name}-image`} fluid /> }
                </div>
                <div className={classes.FlipCardBack}>
                  <h2>{project.name}</h2>
                  <h4>{project.description}</h4>
                  <Row>
                    <div className={classes.LinksDiv}>
                      <a className={classes.Link} href={project.url} target='_self' rel='noreferrer'><FaGithub className='my-auto' /> Pagina Web</a>
                      <a className={classes.Link} href={project.repo} target='_blank' rel='noreferrer'><FaLink className='my-auto' /> Repositorio</a>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        })}
      </Row>
    </Container>
  </section>
);

export default Projects;