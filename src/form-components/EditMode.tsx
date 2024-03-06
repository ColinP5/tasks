import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode-check"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </div>
            {editMode ? (
                //Displayed When editMode is true
                <div>
                    <Form.Group
                        controlId="EditMode - name"
                        as={Row}
                        className="justify-content-start"
                    >
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group
                        controlId="EditMode - student"
                        as={Row}
                        className="justify-content-start"
                    >
                        <Form.Label column sm={2}>
                            Is a Student:
                        </Form.Label>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                checked={isStudent}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setIsStudent(event.target.checked)}
                            />
                        </Col>
                    </Form.Group>
                </div>
            ) : (
                //Displayed when editMode is false
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            )}
        </div>
    );
}
