import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useAuth } from "./context/AuthContext";
export default function DeleteCampgroundButton({ campground }) {
  const { auth } = useAuth();
  const isOwner = auth.user != null && campground.author._id === auth.user.id;

  return (
    <>
      {isOwner ? (
        <Button variant="text" disabled={!isOwner} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      ) : null}
    </>
  );
}
