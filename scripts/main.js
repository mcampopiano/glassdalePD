
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import {CriminalList} from "./criminals/criminalList.js"
import { getNotes, useNotes } from "./notes/NoteDataProvider.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { OfficerList } from "./officers/officerList.js"
import { OfficerSelect } from "./officers/officerSelect.js"
CriminalList()
ConvictionSelect()
OfficerList()
OfficerSelect()
NoteForm()
NoteList()
