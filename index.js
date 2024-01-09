let nome = prompt("Digite o nome do herói: ");
let contXp = parseInt(prompt("Digite a quantidade de experiência do herói"));
let nivel;

if (contXp <1000) {
    nivel = "Ferro";
    } else if (contXp >=1001 && contXp <=2000) {
        nivel = "Bronze";
    } else if (contXp >=2001 && contXp <=5000) {
        nivel = "Prata";
    } else if (contXp >=5001 && contXp <=7000) {
        nivel = "Ouro";
    } else if (contXp >=7001 && contXp <=8000) {
        nivel = "Platina";
    } else if (contXp >=8001 && contXp <=9000) {
        nivel = "Ascendente";
    } else if (contXp >=9001 && contXp <=10000) {
        nivel = "Imortal";
    } else { 
        nivel = "Radiante";
}
    alert(`O Herói ${nome} está no nível de ${nivel}`);