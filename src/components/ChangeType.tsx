import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type_, setType] = useState<QuestionType>("short_answer_question");

    function changeType_(): void {
        setType(
            type_ == "multiple_choice_question"
                ? "short_answer_question"
                : type_ == "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={changeType_}>Change Type</Button>
            {type_ == "multiple_choice_question" && <div>Multiple Choice</div>}
            {type_ == "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
