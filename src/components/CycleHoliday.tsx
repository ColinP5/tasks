import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Holidays - Christmas, Halloween, Thanksgiving, Easter, July4th
const Alphabet_Holiday: Record<string, string> = {
    "🎅": "🥚",
    "🎃": "🎆",
    "🦃": "🎅",
    "🥚": "🎃",
    "🎆": "🦃"
};
const Time_Holiday: Record<string, string> = {
    "🥚": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎅",
    "🎅": "🥚"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎅");

    function changeHolidayA(): void {
        const newHoliday = Alphabet_Holiday[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayT(): void {
        const newHoliday = Time_Holiday[holiday];
        setHoliday(newHoliday);
    }

    return (
        <>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={changeHolidayA}>Alphabet</Button>
            </div>
            <div>
                <Button onClick={changeHolidayT}>Year</Button>
            </div>
        </>
    );
}
