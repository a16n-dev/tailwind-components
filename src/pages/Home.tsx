import React from 'react';
import Card from '../components/atom/Card';
import Col from '../components/atom/Col';
import Container from '../components/atom/Container';
import Page from '../components/atom/Page';
import Row from '../components/atom/Row';

const Home: React.FC = () => (
  <Container>
    <Page.Title>Tailwind Experimental UI</Page.Title>
    <Row>
      <Col>
      <Card variant='secondary' gradient>
        <Card.Body>
          <Card.Title>Tailwind Component Library</Card.Title>
          <Card.Text>This is still a work in progress!!</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    <Row>
      <Col>
    <div className={'text-2xl text-gray-800 font-semibold'}>Explore Components</div></Col>
    </Row>
    <Row>
      <Col className={'md:w-4/12'}>
        <Card>
          <Card.Body>
            <Card.Title>Buttons</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className={'md:w-4/12'}>
        <Card>
          <Card.Body>
            <Card.Title>Cards</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className={'md:w-4/12'}>
        <Card>
          <Card.Body>
            <Card.Title>Layout Utilities</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <Card.Body>
          <h2 className={'text-lg my-2'}>Primary</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-primary-${e} h-12`}/>
      )}
    </Row>
    <h2 className={'text-lg my-2'}>Secondary</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-secondary-${e} h-12`}/>
      )}
    </Row>
    <h2 className={'text-lg my-2'}>Success</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-success-${e} h-12`}/>
      )}
    </Row>
    <h2 className={'text-lg my-2'}>Danger</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-danger-${e} h-12`}/>
      )}
    </Row>
    <h2 className={'text-lg my-2'}>Warning</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-warning-${e} h-12`}/>
      )}
    </Row>
    <h2 className={'text-lg my-2'}>Info</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-info-${e} h-12`}/>
      )}
    </Row>
    <h2 className={'text-lg my-2'}>Grays</h2>
    <Row>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((e, i) =>
        <Col className={`rounded-lg bg-gray-${e} h-12`}/>
      )}
    </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <div className={'h-12'}></div>
  </Container>
);

export default Home;
