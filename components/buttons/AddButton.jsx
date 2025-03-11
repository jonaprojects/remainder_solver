import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton(props) {
  return (
    <IconButton color="black" onClick={props.add}>
      <AddIcon sx={{ fontSize: 16 }} />
    </IconButton>
  );
}
