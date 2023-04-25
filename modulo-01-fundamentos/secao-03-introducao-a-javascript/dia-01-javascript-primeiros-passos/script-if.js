// if - se
// else - senao

let scoreCandidate = 90;

if (scoreCandidate >= 80) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (scoreCandidate < 80 && scoreCandidate >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Infelizmente, você reprovou.");
}
