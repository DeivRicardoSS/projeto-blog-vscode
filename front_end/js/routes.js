function getHome(){
    App.main.style.padding = '20px';

    App.nav.home.classList.add('active');
    App.nav.explore.classList.remove('active');
    App.nav.search.classList.remove('active');
    App.nav.user.classList.remove('active');

    App.main.innerHTML = `
    <h3>Posts Recentes</h3>
        <section class="top-news">
            <article class="top1">

            </article>
            <div>
                <article class="top2">

                </article>
    
                <article class="top3">
    
                </article>
            </div>
            
        </section>
        <h3>Inscrições</h3>
        <section class="perfis">
            <img src="../back_end/images/profile/default.png" alt="">
            <img src="../back_end/images/profile/default.png" alt="">
            <img src="../back_end/images/profile/default.png" alt="">
            <img src="../back_end/images/profile/default.png" alt="">
            <img src="../back_end/images/profile/default.png" alt="">
            <img src="../back_end/images/profile/default.png" alt="">
        </section>
        <h3>Top Assutos</h3>
        <section class="top-news">
            <article class="top1">

            </article>
            <div>
                <article class="top2">

                </article>
    
                <article class="top3">
    
                </article>
            </div>
            
        </section>
    `;
}

function getExplore(){
    App.main.style.padding = '20px';

    App.nav.home.classList.remove('active');
    App.nav.explore.classList.add('active');
    App.nav.search.classList.remove('active');
    App.nav.user.classList.remove('active');

    App.main.innerHTML = `
    <h3>Explorar Temas</h3>
    `
}

function getUser(){
    App.main.style.padding = '0';

    App.nav.home.classList.remove('active');
    App.nav.explore.classList.remove('active');
    App.nav.search.classList.remove('active');
    App.nav.user.classList.add('active');

    App.main.innerHTML = `
    
    <section class="user-profile">
        <img src="../back_end/images/profile/default.png" class="profile-img" alt="imagem de usuario"/>
        <div>
            <h3>Nome de Perfil</h3>
            <p>email@email.com</p>
        </div>
        
    </section>

    <section class="user-bio">
        <h4>Bio:</h4>
        <p>Descricao do Perfil</p>
    </section>
    
    `
}
App.loadNav();
getUser();