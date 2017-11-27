class DnaTranscriber {
  constructor() {
  }

  toRna(dna) {
    return dna.split("").map((nucleotide) => {
      switch(nucleotide) {
        case "A":
          return "U";
        case "T":
          return "A";
        case "G":
          return "C";
        case "C":
          return "G";
        default:
          throw new Error("Invalid input");
      }
    }).join(""); 
  }
}

module.exports = DnaTranscriber;
