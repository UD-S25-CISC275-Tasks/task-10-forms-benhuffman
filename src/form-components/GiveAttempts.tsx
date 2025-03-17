import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    // State for tracking attempts left
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    // State for tracking user input (string for validation)
    const [requesting, setRequesting] = useState<string>("0");

    // Handles numeric input change
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequesting(event.target.value);
    }

    // Handles adding attempts
    function gainAttempts() {
        const amount = parseInt(requesting);
        if (!isNaN(amount) && amount > 0) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    // Handles using an attempt
    function useAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptsInput">
                <Form.Label>Number of Attempts Left: {attemptsLeft}</Form.Label>
                <Form.Control
                    type="number"
                    value={requesting}
                    onChange={updateRequest}
                />
            </Form.Group>
            <div className="mt-2">
                <Button onClick={gainAttempts} className="me-2">
                    Gain
                </Button>
                <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                    Use
                </Button>
            </div>
        </div>
    );
}