import apt from "../assets/landing-bun.jpg";
export const backgroundStyle = {
  backgroundImage: `url(${apt})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  position: "relative",
};

export const imageStyle = {
  width: "60px",
  height: "60px",
  marginRight: "10px",
};

export const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 700,
  width: "50%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const textStyles = {
  color: "white",
  fontSize: "100px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0px",
  fontFamily: "Yeseva One, serif",
};

export const subtitleStyles = {
  color: "white",
  fontSize: "18px",
  margin: "2px",
  fontFamily: "Poppins, sans-seri",
  textAlign: "center",
  whiteSpace: "pre-line",
};

export const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "transparent",
};

export const sendIconStyle = {
  marginLeft: "10px",
  cursor: "pointer",
  color: "#E89E84",
  fontSize: "24px",
};

export const buttonContainerStyle = {
  display: "flex",
};

export const buttonLinkStyle = {
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  textDecoration: "none",

  fontSize: "18px",
  marginLeft: "130px",
  fontFamily: "Poppins, sans-seri",
};

export const inputContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
};

export const inputStyle = {
  flex: "1",
  backgroundColor: "transparent",
  border: "2px solid #E89E84",
  color: "white",
  fontFamily: "Poppins, sans-seri",
  fontSize: "18px",
  padding: "10px",
  borderRadius: "5px",
};

export const buttonStyle = {
  border: "2px solid #E89E84",
  fontFamily: "Poppins, sans-serif",
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "8px",
};
