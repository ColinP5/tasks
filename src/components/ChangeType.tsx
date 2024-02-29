import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
//Done
export function ChangeType(): JSX.Element {
    const [type_, setType] = useState<QuestionType>("short_answer_question");

    function changeType_(): void {
        let newType: QuestionType;
        if (type_ === "multiple_choice_question") {
            newType = "short_answer_question";
        } else if (type_ === "short_answer_question") {
            newType = "multiple_choice_question";
        } else {
            newType = "short_answer_question";
        }
        setType(newType);
    }

    return (
        <div>
            <Button onClick={changeType_}>Change Type</Button>
            {type_ == "multiple_choice_question" && <div>Multiple Choice</div>}
            {type_ == "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
