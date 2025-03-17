import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // State variables
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // Handlers
    const toggleEditMode = () => {setEditMode(!editMode)};
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {setUserName(event.target.value)};
    const handleStudentChange = (event: React.ChangeEvent<HTMLInputElement>) => {setIsStudent(event.target.checked)};

    return (
        <div>
            {/* Toggle switch for edit mode */}
            <Form.Check 
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            />

            {editMode ? (
                // Editable form when in edit mode
                <div>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                </div>
            ) : (
                // Static text when not in edit mode
                <p>{userName} {isStudent ? "is a student" : "is not a student"}.</p>
            )}
        </div>
    );
}