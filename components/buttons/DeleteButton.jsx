import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteButton(props) {
  return (
    <IconButton color="black" onClick={props.delete}>
      <DeleteIcon sx={{ fontSize: 16 }} />
    </IconButton>
  );
}
