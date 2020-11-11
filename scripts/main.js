
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { AlibiListener } from "./criminals/AlibiList.js"
import {CriminalList} from "./criminals/criminalList.js"
import { getCriminalFacilities, useCriminalFacilities } from "./facility/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "./facility/FacilityProvider.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { OfficerList } from "./officers/officerList.js"
import { OfficerSelect } from "./officers/officerSelect.js"
import "./witnesses/witnessList.js"

CriminalList()
ConvictionSelect()
OfficerList()
OfficerSelect()
NoteForm()
NoteList()
AlibiListener()