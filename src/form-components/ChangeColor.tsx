import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "white",
    "cyan"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor() {}

    return (
        <>
            <div>
                <h3>Change Color</h3>
            </div>
            <div>
                <Form.Group controlId="Color Options">
                    {COLORS.map((colorOption, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            name="colorOptions"
                            data-testid="colored-box"
                            label={colorOption}
                            value={colorOption}
                            checked={color === colorOption}
                            onChange={updateColor}
                            className={`color-${colorOption}`}
                        />
                    ))}
                </Form.Group>
            </div>
        </>
    );
}
