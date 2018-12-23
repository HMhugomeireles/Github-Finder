//init gihub
const github = new Github;

const ui = new UI;

const seachUser = document.getElementById("seachUser");


seachUser.addEventListener("keyup", (e) => {

    const userText = e.target.value;

    if(userText !== ''){
        
        github.getUser(userText)
        .then(data =>{
            console.log(data)
            if(data.profile.message === 'Not Found'){
                //mostra erro
                ui.showAlert('User não encontrado.', 'alert alert-danger');

            }else {
                //mostra profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
            }

        })
    }else {
        //limpa profile
        ui.clearProfile();
    }

});