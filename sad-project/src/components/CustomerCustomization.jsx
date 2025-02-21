import React, { useState } from "react";

function CustomerCustomization() {
    const [isEditable, setIsEditable] = useState(false);
    const [email, setEmail] = useState("johndoe@example.com");

    const handleEdit = () => setIsEditable(true);

    return (
        <div>
            <h2>Customize Your Tour</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    readOnly={!isEditable}
                    onClick={handleEdit}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
        </div>
    );
}

export default CustomerCustomization;
