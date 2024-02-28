import React from "react";
import image from "./Images/vaporwave_moped_banner.jpg";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";

console.log(image);
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript -- Colin Parsons
            </header>
<<<<<<< HEAD
            <h1>My First Site</h1>
            <img src={image} alt="A Vaporwave banner I like" />
            <p></p>
            <ul className="App-list">
                <li>Guitar</li>
                <li>Cats</li>
                <li>Books</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <p id="rcorners1"></p>
            <Container>
                <Row>
                    <Col>
                        <div className="column"></div>
                    </Col>
                    <Col>
                        <div className="column"></div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
