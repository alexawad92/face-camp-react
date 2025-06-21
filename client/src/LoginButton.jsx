// import axios from "axios";
// import { useAuth } from "./context/AuthContext";
import Button from "@mui/material/Button";

export default function LoginButton(props) {
  return (
    <Button variant="outlined" onClick={props.OnClick}>
      {props.text}
    </Button>
  );
}
