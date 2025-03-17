import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>('');
    const [correctText, setText] = useState<string>('/❌/i');


     function changeText(input: string){
        setText(input)
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>){
        setAnswer(event.target.value)
        if (event.target.value === expectedAnswer){
            changeText('✔️')
        }
        else changeText('/❌/i')         
    }

   

    return <div>
    <Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
        value={answer}
        onChange={updateAnswer} />
    </Form.Group>
    <div>
      The movie is {answer}.
      <p>correct: {correctText}</p>
    </div>
  </div>;
}
