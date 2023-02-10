# DIA 3

Criando conta e repositório no GitHub!!!

O Git é um sistema de versionamento distribuído (DVCS), o que significa dizer que o repositório fica acessível tanto em sua máquina quanto remotamente. O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão.

Nesse exercício aprendemos á criar um repositório no GitHub, e também a clonar um repositório em nosso computador.

O ideal é criar um repositório no GitHub e utilizar o comando git clone ou git remote add origin url-do-repositorio.

Após git clone, o fluxo básico é:

- Criar sua branch dentro do repositório clonado
- Fazer checkout em sua branch
- Criar seu primeiro commit

Aprendemos á enviar as alterações realizadas local para o Github através do git push.

O comando git push -u origin main enviará suas alterações diretamente para a branch main de seu repositório. O -u é uma sintaxe mais curta para --set-upstream.

Aprendemos que fazer alterações diretamente na branch main não é uma boa prática e para isso criamos branch para realizar as alterações necessárias.

Aprendemos á criar pull request, que é uma solicitação para realizar o merge entre duas branches. Utilizando o comando git pull origin main. Ele traz as informações da branch main remota para a sua branch main local.
