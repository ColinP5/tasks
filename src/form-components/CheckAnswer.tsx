import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //State
    const [answer, setAnswer] = useState<string>("");

    //Control
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }

    //View
    return (
        <>
            <div>
                <h3>Check Answer</h3>
            </div>
            <div>
                <Form.Group controlId="shortAnswerInput">
                    <Form.Label>Input Answer:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={answer}
                        onChange={updateAnswer}
                    />
                </Form.Group>
            </div>
            <div>Result: {answer == expectedAnswer ? "✔️" : "❌"}</div>
        </>
    );
}
