let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info['recorrente'] = 'Sim';

let infoDois = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O Último McPatinhas",
  recorrente: "Sim",
}

for (const key in info) {
  if (
    info[key] === info.recorrente &&
    info[key] === "Sim" &&
    infoDois[key] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + infoDois[key]);
  }  
}

