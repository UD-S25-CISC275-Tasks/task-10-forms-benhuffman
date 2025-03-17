import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    // Define at least 8 colors
    const colors = [
        "red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"
    ];

    // State to track the selected color
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            
            {/* Generate radio buttons dynamically */}
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="color-options"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={(e) => {setSelectedColor(e.target.value)}}
                        inline
                        style={{ color }} // Color the text of the radio button
                    />
                ))}
            </Form>

            {/* Box displaying selected color */}
            <div 
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "20px",
                    marginTop: "10px",
                    textAlign: "center",
                    borderRadius: "5px",
                    fontWeight: "bold",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}