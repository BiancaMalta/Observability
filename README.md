# Observability
Durante a execução do exercício da última aula, alguns erros apareceram:

1. Ao executar o Docker Compose, o terminal me retornou a seguinte imagem:

![Captura de tela de 2024-03-22 10-29-23](https://github.com/BiancaMalta/Observability/assets/92928037/a17566bd-cd0f-451b-83fe-aa4b3aaba69e)

Tentei solucionar limpando o docker e subindo novamente o Docker Compose:
```
docker system prune
docker-compose up -d
```
 <img align="right" src="https://github.com/BiancaMalta/Observability/assets/92928037/2d0f2d92-932e-4c0d-b3f4-dc1beafdaca4" width="45%"/>

Entretanto, o erro persistiu. 
<br/>
Resolvi verificar cada página ativa, o me trouxe o seguinte feedback:

2. Grafana não havia logado, cheguei a criar uma conta, entretanto ele não aceitou. Como segunda medida, procurei no código um usuário e uma senha, encontrando `adatech` e `adatech@2233`o que permitiu o meu login. 
<br/>

**Meu questionamento é porque ele não entrou automaticamente, já que estava no código.**


3. A página de votação estava ativa, porém, ao tentar votar, ela me dava o seguinte resposta:

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/4188d002-c1bd-47e1-993d-0cdf1f7a98d6" width="70%"/>

Imaginei que o banco de dados não estava conectado e, ao averiguar os contêineres, notei que o postgresql e o prometheus estavam desconectados.

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/abd797c0-dc4a-4fde-b321-69ba5ac68a13" width="70%"/>

Tentei start eles novamente, ação que funcionou apenas com o banco de dados, possibilitando a votação.

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/8bf3b446-aafc-46c8-a925-8fcf3d2f7972" width="45%"/>

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/e9756ba0-2184-4346-8efe-1ab6a2308262" width="90%"/>

**O que me questiono é porque ele não subiu com todos os contêineres.**

4. Por fim, fui tentar fazer o dashboard solicitado e me deparei com outro erro:

![Captura de tela de 2024-03-22 14-32-32](https://github.com/BiancaMalta/Observability/assets/92928037/89185328-3c40-4297-90eb-45f0d28f40f2)

Aparentemente, os dados não estavam conectados justamente por falta do prometheus. Mesmo revendo à aula, não soube como solucionar isso.
