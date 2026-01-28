import express from 'express';
import protect from "../middleware/authMiddleware.js";
import { createNote, getAllNotes, updateNote, deleteNote, getAllNoteById} from '../controllers/notesController.js';
const router = express.Router();

router.use(protect); // Apply authentication middleware to all routes below





router.get("/", getAllNotes);
router.get("/:id", getAllNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you got 5 notes");
// });
// app.post("/api/notes", (req, res) => {
//     res.status(201).json({ message: "Note created successfully" });
// });
// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "Note updated successfully" });
// });
// app.delete("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "Notes deleted successfully" });
// });

export default router;