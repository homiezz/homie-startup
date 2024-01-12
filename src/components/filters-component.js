import "bootstrap/dist/css/bootstrap.min.css";
import "./FiltersComponent.css"; // Import your MyComponent styles
import * as React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmailModal from "./dialog-component";

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
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

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
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export default function FiltersComponent(props) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownSelect = (value) => {
    setSelectedValue(value);
  };
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="containerWithRectangle">
      <div className="exploreRentalsTitle"> Explorează imobilele</div>
      <div className="selectCity">
        <div className="dropdownRectangle">
          <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              {selectedValue || "Selectează orașul..."}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
              <Dropdown.Item eventKey="Bucuresti">București</Dropdown.Item>
              <Dropdown.Item eventKey="Cluj">Cluj</Dropdown.Item>
              <Dropdown.Item eventKey="Iasi">Iași</Dropdown.Item>
              <Dropdown.Item eventKey="Timisoara">Timișoara</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="buttonContainerHome">
          <Link to={`/posts?search=${searchValue}`}>
            <Button variant="primary" className="btn-search">
              Caută
            </Button>
          </Link>
        </div>
      </div>

      <div className="selectCity">
        <div className="searchContainer">
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto cozy-search-bar"
            placeholder="Caută proprietar/chirias..."
            onChange={handleSearchChange}
            value={searchValue}
          />
        </div>
        <div className="inputContainerStyle">
          <Button
            variant="primary"
            onClick={handleOpenModal}
            className="btn-send-email"
          >
            Arată-mi recenzii
          </Button>

          <EmailModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
}
