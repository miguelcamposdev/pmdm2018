var today = new Date();
var currentYear = today.getFullYear();

document.addEventListener("DOMContentLoaded", function (event) {
    let yearContent = document.getElementById('currentYear');
    yearContent.innerHTML = currentYear;

    document.getElementById('submitAge').addEventListener("click", function (event) {
        let userBirthDate = new Date(document.getElementById('userBirthDate').value);
        let userAgeYear = currentYear - userBirthDate.getFullYear();
        let userBirthMonth = today.getMonth() - userBirthDate.getMonth();
        if (userBirthDate > today) {
            alert(`No puedes haber nacido más tarde que hoy: ${today}`);
        } else {
            if (userBirthMonth < 0 || userBirthMonth === 0 && today.getDate() < userBirthDate.getDate()) {
                userAgeYear--;
            }
            alert(`Su edad es de ${userAgeYear} años`);
        }
    });
});