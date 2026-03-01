import { Box } from "@mui/material";
import "../assets/css/spinner.css";

const Spinner = ({ size = 40, color = '#1976d2' }) => {
  const style = {
    width: size,
    height: size,
    border: `${size * 0.1}px solid #e5e7eb`,
    borderTop: `${size * 0.1}px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: 'auto',
  };

  return (
    <>
      <Box sx={style}></Box>
    </>
  );
}

export default Spinner;