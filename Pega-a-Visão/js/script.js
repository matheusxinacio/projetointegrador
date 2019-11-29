		   site = 
		   [
		   	["perfilLeo.html", "Leonardo da Vinci","Leonardo da Vinci é lembrado por ser um dos maiores gênios da história da humanidade. As suas contribuições ultrapassaram o ramo das artes e suas obras, como A Última Ceia e Mona Lisa, são algumas das pinturas mais famosas e reproduzidas de todos os tempos."],

		   	["perfilMj.html", "Michael Jackson","Michael Jackson foi um cantor, compositor, dançarino, produtor musical (1958-2009).Chamado de “Rei do Pop”, o cantor e compositor Michael Jackson nasceu em Gary, Indiana, nos EUA, em 29 de agosto de 1958. Quando criança, foi o cantor principal do Jackson 5, o grupo de sua família. Com sua carreira solo, Michael se tornou uma das maiores estrelas pop de todos os tempos. Em 2009, sua morte gerou controvérsia e foi, posteriormente, considerada homicídio por parte de seu médico."],
		   	["perfilRiri.html", "Rihanna", "Rihanna (1988) é uma cantora, produtora musical, atriz, dançarina e designer de moda, nascida em Barbados, que obteve grande sucesso nas paradas musicais norte-americanas e inglesas com canções como “Umbrella”, “SOS”, “Disturbia”, “Don’t Stop the Music” e “Shut Up And Drive”.Rihanna (1988) nasceu em Barbados, uma ilha do Caribe, na América Central, no dia 20 de fevereiro de 1988. Com 09 anos começou a cantar entre amigos e familiares. Foi aluna da Charles F. Broome Memorial School, em seguida ingressou na escola Combermere. Em 2003 formou um trio musical com duas colegas de classe. Em 2004, ganhou um concurso de Miss Combermere. Nesse mesmo ano, foi descoberta pelo produtor musical Evan Rogers, que em 2005, junto com Carl Sturken, a levou para os Estados Unidos. Depois de assinar com a Def Jam Records, começou a gravar seu álbum de estreia. Nesse período, fez uma participação no quarto álbum do rapper Memphis Bleek."]

		   ];
		    function buscarSite() {
		        document.getElementById("resultado").innerHTML = "";
		        let busca = document.getElementById("busca").value;
		        let buscaRegex = new RegExp(busca, "i");
		        for (let i = 0; i < site.length; i++) {
		            if (site[i][2].search(buscaRegex) !== -1) {
		                //document.getElementById("resultado").innerHTML += "<br>" + site[i][1] + "<br>";
		                document.getElementById("resultado").innerHTML += '<br><a href="' + site[i][0] +  '">' + site[i][1] + '</a><br>';

		            }
		        }
		        if (document.getElementById("resultado").innerText == "") {
		            document.getElementById("resultado").innerHTML = "Não existem páginas no PegaAVisão com tal palavra-chave.";
		        }
		    }