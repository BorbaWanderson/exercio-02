let students = [
  {
    name: "Julia",
    firstNote: 6,
    secondNote: 7,
  },
  {
    name: "Pedro",
    firstNote: 5,
    secondNote: 4,
  },
  {
    name: "Alex",
    firstNote: 8,
    secondNote: 8,
  },
  {
    name: "Sara",
    firstNote: 3,
    secondNote: 4,
  },
  {
    name: "Roger",
    firstNote: 10,
    secondNote: 9,
  },
];

function noteMedia(student) {
  let media = (student.firstNote + student.secondNote) / 2;
  if (media >= 7) {
    return `A média do(a) aluno(a) ${student.name} é de: ${media}
    Parabéns ${student.name}! Você foi aprovado(a) no concurso.`;
  } else {
    return `A média do(a) aluno(a) ${student.name} é de: ${media}
    Não foi dessa vez ${student.name}! Tente novamente!`;
  }
}

for (let student of students) {
  let media = noteMedia(student);
  alert(media);
}
