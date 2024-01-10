import "bootstrap/dist/css/bootstrap.min.css";
import "./FiltersComponent.css"; // Import your MyComponent styles
import * as React from "react";
import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="custom-toggle" // Apply the custom-toggle class
    >
        {children}
        &#x25bc;
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Filtrează..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

export default function FiltersComponent(props) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownSelect = (value) => {
        setSelectedValue(value);
    };

    return (
        <div className="containerWithRectangle">

            <div className="exploreRentalsTitle"> Explorează imobilele</div>
            <Dropdown onSelect={handleDropdownSelect}>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    {selectedValue || 'Selectează orașul...'}
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="Bucuresti">București</Dropdown.Item>
                    <Dropdown.Item eventKey="Cluj">Cluj</Dropdown.Item>
                    <Dropdown.Item eventKey="Iasi">Iași</Dropdown.Item>
                    <Dropdown.Item eventKey="Timisoara">Timișoara</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className="inputContainerStyle">
                <Link to={`/posts?${selectedValue}`}>
                    <Button
                        variant="primary"
                        className="btn-send-email"
                    >
                        Caută
                    </Button>
                </Link>
            </div>
        </div>
    );
}