



module.exports = [
  { "file": "./studentlife-data/grades.csv" },
  { "file": "./studentlife-data/LonelinessScale.csv",
    "choice": [ "Never", "Rarely", "Sometimes", "Often" ],
    "ignore": [ "type" ] },
  { "file": "./studentlife-data/PerceivedStressScale.csv",
    "choice": ["Never", "Almost never", "Sometime",
                 "Fairly often", "Very often"],
    "ignore": [ "type" ] },
  { "file": "./studentlife-data/piazza.csv" }
];



