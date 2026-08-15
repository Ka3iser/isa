function specialClick() {
    let loveText = document.querySelector('div#loveText');
    document.body.innerHTML = '';
    document.body.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 40px 20px;
            text-align: center;
            background: #c300ff;
            background: radial-gradient(circle, rgba(195, 0, 255, 1) 0%, rgba(93, 18, 222, 1) 100%);
        ">
            <h1 style="font-size: 48px; color: white; margin-bottom: 30px;">
                Oi amor ❤️
            </h1>
            <p style="font-size: 22px; color: white; line-height: 1.8; max-width: 800px;">
                Eu queria vir aqui e dizer que te amo um tantão, sei que o site não ta bonitão e tals, mas usei o meu conhecimento pra fazer isso especialmente pra você, e queria que vc o aceitasse com maior carinho do mundo, eu te amo muito e quero seu melhor, prometo de ajudar em tudo que eu puder e tiver ao meu alcance, prometo te ouvir quando você precisar (talvez nn de imediato pq precisaria ter tempo e me prepaarar um tico né kk), mas queria dizer que estou aqui com você!
            </p>
            <br><br>
            <h1>EU TE AMO!!!!!</h1>
            <br><br>
            <img src="https://i.pinimg.com/736x/7e/a4/7b/7ea47ba27ae0921c32e22ac522f1a619.jpg" alt="">`;
}