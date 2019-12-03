const express = require("express");
const path = require("path");
const fs = require("fs");
const savedData = fs.readFileSync("./db/db.json", "UTF-8");
let notes;
if (savedData) {
    const savedNotes = JSON.parse(savedData);
    notes = savedNotes;
    IDNum();
}

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "db/db.json"))
});

app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    notes.push(newNote);
    IDNum();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err
    });
});

app.delete("/api/notes/:id", function (req, res) {
    const deletedNoteID = req.params.id;
    notes.splice(deletedNoteID, 1);
    IDNum();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
        if (err) throw err
    });
});

//Listening at PORT 3000 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

function IDNum() {
    for (i = 0; i < notes.length; i++) {
        notes[i].id = i;
    }
}