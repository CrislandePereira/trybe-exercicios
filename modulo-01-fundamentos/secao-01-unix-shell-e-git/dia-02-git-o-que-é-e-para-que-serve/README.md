# DIA 2

Meu primeiro repositório git!!

O objetivo dos exercícios desse dia foi colocar em prática o que haviamos aprendido sobre Git, sobre controle de versões e sobre versionamento de arquivos.

O primeiro passo é ter uma pasta versionada e criar uma estrutura inicial, e fazemos isso utilizando o comando git init.

O segundo passo é criar uma branch nova com o comando git branch nome-da-branch ou git checkout -b nome-da-branch.

O terceiro passo é visualizar os status dos arquivos que sofreram alterações sempre utilizando o comando git status.

O quarto passo é após fazer as alterações no arquivo sempre utilizarmos o comando git add nome-do-arquivo ou git add . para adicionar as alterações feitas em staging.

O quinto passo é quando adicionamos os arquivos em stage criamos checkpoints e esses arquivos estão prontos para serem comitados. Para realizar o commit dos arquivos usamos sempre o comando git commit -m "frase sucinta sobre a alteração realizada no arquivo".

Por fim, após fazermos as alterações na branch criada e validarmos as alterações e ter certeza que estão funcionando, podemos fazer a mesclagem com a Branch main (principal). Para isso retornamos para branch Main usando o comando git checkout main e usamos o comando git merge nome-da-branch (onde fizemos as alterações). Dessa forma as alterações feitas serão mescladas com as informações da branch main.

Quando queremos saber em qual branch estamos ou quantas branch tem o nosso repositório podemos usar o comando git branch.
