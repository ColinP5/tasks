import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//Done
export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("");

    function updateAttemptsDec() {
        setAttempts(attempts - 1);
    }
    function updateAttemptsInc() {
        if (parseInt(attemptsReq)) {
            setAttempts(attempts + parseInt(attemptsReq));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts Remaining: {attempts}</div>
            <Form.Group controlId="formAttemptsIncrease">
                <Form.Label>Request Number of Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsReq(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={updateAttemptsDec} disabled={attempts == 0}>
                    use
                </Button>
                <Button onClick={updateAttemptsInc}>gain</Button>
            </div>
        </div>
    );
}
