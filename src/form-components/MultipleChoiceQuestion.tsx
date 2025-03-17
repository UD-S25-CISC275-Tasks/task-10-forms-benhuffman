import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track selected answer, initialized to the first option
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    // Determines if the selected answer is correct
    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Select an Answer:</Form.Label>
                <Form.Select
                    value={selectedAnswer}
                    onChange={(event) => {setSelectedAnswer(event.target.value)}}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>
                {isCorrect ? "✔️ Correct!" : "❌ Incorrect"}
            </p>
        </div>
    );
}