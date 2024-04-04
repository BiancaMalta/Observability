# Observability
Durante o quinto módulo do programa de capacitação DevOps da B3 em parceria com a Ada Tech, desenvolvemos algumas atividades de Observability. Nesse diretório, organizei em pastas os arquivos de cada atividade e abaixo deixei uma breve explicação sobre o tema.
[Capacitação DevOps](https://ada.tech/sou-aluno/programas/b3-deva) </br>

<details>
  <summary> O que é Observabilidade? </summary>
    
Observabilidade é a capacidade de entender o comportamento interno de um sistema com base em suas saídas, garantindo a tomada de decisões com confiança e possibilitando construir arquiteturas mais distribuídas, resilientes e tolerante a falhas.
### A jornada
Para iniciar, devemos seguir três etapas.

**1. Avalie onde você está na curva de maturidade da observabilidade da aplicação**

<img align="left" src="https://github.com/BiancaMalta/Observability/assets/92928037/0dcb6212-7630-4f48-9fdf-d9017b1d98fe" >

**2. Colete os dados**

##### Dependências
Uma avaliação de como cada componente da aplicação depende de outros componentes, aplicações e recursos de TI.
##### Monitoramento
Monitoramento é a prática de observar um sistema para garantir que ele esteja funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o sistema esteja funcionando corretamente.

##### Rastreamento(tracing)
Rastreamento é a prática de observar o comportamento de um sistema ao longo do tempo. Um registro de ponta a ponta, mostrando cada solicitação de usuário, conforme as transações passam de um serviço para outro.

##### Logs
Logs são registros de eventos que ocorrem em um sistema, com carimbo de data/hora, completos e imutáveis de eventos de aplicações em seu sistema.

##### Verificações de integridade
Pesquisas periódicas de serviços específicos. Se uma verificação de integridade falhar, ela se transformará em um problema.

##### Alertas 
Notificações acionadas quando limites específicos predeterminados são ultrapassados.

##### Dashboards
Perspectivas de aplicações que fornecem apresentações visuais, interativas e compreensíveis sobre métricas específicas e predeterminadas.

##### Métricas
Métricas são medidas quantitativas que podem ser usadas para avaliar numericamente o desempenho da aplicação, da utilização de recursos e da saúde geral do sistema em um determinado período de tempo. 

**3. Implemente práticas e princípios essenciais**

Será necessário um otimização sistemática, a observabilidade mapeia e contextualiza as interações entre todos os recursos existentes na arquitetura. Disso, é de fundamental importância a contextualização completa, toda unidade de dados deve ser fornecida com um contexto completo, entrando em cena grandes ferramentas.
</details>
<details>
  <summary> Ferramentas de Observabilidade </summary> 

![image](https://github.com/BiancaMalta/Observability/assets/92928037/7560757f-adc0-492b-9ee8-3dce86c8b3d2)

### Gerenciamento e centralização de logs
- Elastic Stack;
- Splunk;
- Graylog.
### Monitoramento de infraestrutura
- Grafana;
- Zabbix;
- Nagios;
- Prometheus.
### Monitoramento de performance de aplicação
- New Relic;
- Data Dog;
- App Dynamics;
- Elastic APM.

Nesse diretório abordaremos apenas o Prometheus, o Grafana, o Elastic Stack e o Graylog.
</details>
<details>
  <summary> Prometheus e Grafana </summary> 

Prometheus é um sistema de monitoramento e alerta de código aberto. Ele coleta métricas de alvos configurados por meio de um modelo de coleta e armazenamento de séries temporais com um poderoso mecanismo de consulta.

**Documentações Importantes**

- [Instrumentação](https://prometheus.io/docs/instrumenting/clientlibs/)
- [Queries](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [Operadores](https://prometheus.io/docs/prometheus/latest/querying/operators/)
- [Funções](https://prometheus.io/docs/prometheus/latest/querying/functions/)
- [Grafana Exemplos](https://play.grafana.org/d/000000012/grafana-play-home?orgId=1)  
- [Grafana Dashboards](https://grafana.com/grafana/dashboards/)
- [Loading Test Grafana k6](https://grafana.com/docs/k6/latest/get-started/installation/)

### Tipos de métricas
- Contadores
- Histogramas
- Sumários
- Temporais

#### Contadores
Contadores são métricas que representam um valor que pode aumentar ou diminuir ao longo do tempo. Eles são usados para medir coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Histogramas
Histogramas são métricas que representam a distribuição de valores em um conjunto de dados. Eles são usados para medir coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Sumários
Sumários são métricas que representam a distribuição de valores em um conjunto de dados. Eles são usados para medir coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Temporais
Métricas temporais são métricas que representam um valor que muda ao longo do tempo. Elas são usadas para medir coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

 
### Tipos de alvos(Targets)
- Servidores
- Bancos de dados
- Aplicações
- Serviços

#### Servidores
Servidores são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o servidor esteja funcionando corretamente.

#### Bancos de dados
Bancos de dados são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o banco de dados esteja funcionando corretamente.

#### Aplicações
Aplicações são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que a aplicação esteja funcionando corretamente.

#### Serviços
Serviços são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o serviço esteja funcionando corretamente.

### Tipos de alertas

- Alertas de limiar
- Alertas de anomalia
- Alertas de tendência
- Alertas de correlação


#### Alertas de limiar
Alertas de limiar são alertas que são acionados quando uma métrica ultrapassa um determinado limite. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

#### Alertas de anomalia
Alertas de anomalia são alertas que são acionados quando uma métrica se desvia significativamente de seu comportamento normal. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

#### Alertas de tendência
Alertas de tendência são alertas que são acionados quando uma métrica mostra uma tendência significativa ao longo do tempo. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

#### Alertas de correlação
Alertas de correlação são alertas que são acionados quando duas ou mais métricas mostram um comportamento correlacionado. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

### Tipos de consultas
- Consultas de agregação
- Consultas de filtro
- Consultas de projeção
- Consultas de transformação

#### Consultas de agregação
Consultas de agregação são consultas que são usadas para calcular estatísticas sobre um conjunto de dados. Elas são usadas para calcular coisas como a média, a mediana e o desvio padrão de um conjunto de dados.

#### Consultas de filtro
Consultas de filtro são consultas que são usadas para filtrar um conjunto de dados com base em um critério específico. Elas são usadas para filtrar coisas como solicitações de um determinado tipo ou erros de um determinado tipo.

#### Consultas de projeção
Consultas de projeção são consultas que são usadas para selecionar um subconjunto de colunas de um conjunto de dados. Elas são usadas para selecionar coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Consultas de transformação
Consultas de transformação são consultas que são usadas para transformar um conjunto de dados em um formato diferente. Elas são usadas para transformar coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

### Tipos de visualizações

- Gráficos de linha
- Gráficos de barras
- Gráficos de pizza
- Gráficos de dispersão

#### Gráficos de linha
Gráficos de linha são gráficos que são usados para mostrar a mudança de uma métrica ao longo do tempo. Eles são usados para mostrar coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Gráficos de barras
Gráficos de barras são gráficos que são usados para mostrar a distribuição de uma métrica em um conjunto de dados. Eles são usados para mostrar coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Gráficos de pizza
Gráficos de pizza são gráficos que são usados para mostrar a distribuição de uma métrica em um conjunto de dados. Eles são usados para mostrar coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Gráficos de dispersão
Gráficos de dispersão são gráficos que são usados para mostrar a relação entre duas métricas em um conjunto de dados. Eles são usados para mostrar coisas como a relação entre o tempo de resposta de um servidor e a utilização de recursos de um sistema.

### Tipos de métricas
- Métricas de contagem
- Métricas de tempo
- Métricas de porcentagem
- Métricas de proporção


#### Métricas de contagem
Métricas de contagem são métricas que representam a contagem de algo. Elas são usadas para medir coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Métricas de tempo
Métricas de tempo são métricas que representam a duração de algo. Elas são usadas para medir coisas como o tempo de resposta de um servidor ou o tempo que um sistema leva para processar uma solicitação.

#### Métricas de porcentagem
Métricas de porcentagem são métricas que representam a proporção de algo em relação a um todo. Elas são usadas para medir coisas como a utilização de recursos de um sistema ou a taxa de erro de um sistema.

#### Métricas de proporção
Métricas de proporção são métricas que representam a relação entre duas métricas. Elas são usadas para medir coisas como a relação entre o tempo de resposta de um servidor e a utilização de recursos de um sistema.

### Tipos de logs
- Logs de aplicativos
- Logs de infraestrutura
- Logs de segurança
- Logs de auditoria
</details>
<details>
  <summary>Dúvidas</summary>  
Durante a execução do exercício da última aula, alguns erros apareceram:

1. Ao executar o Docker Compose, o terminal me retornou a seguinte imagem:

![Captura de tela de 2024-03-22 10-29-23](https://github.com/BiancaMalta/Observability/assets/92928037/a17566bd-cd0f-451b-83fe-aa4b3aaba69e)

Tentei solucionar limpando o docker e subindo novamente o Docker Compose:
```
docker system prune
docker-compose up -d
```
Entretanto, o erro persistiu. Visto isso, aumentei o valor do timeout configurando a variável de ambiente: 
```
export COMPOSE_HTTP_TIMEOUT=120
docker-compose up -d
```
No entanto, o erro continuou.

<img align="right" src="https://github.com/BiancaMalta/Observability/assets/92928037/2d0f2d92-932e-4c0d-b3f4-dc1beafdaca4" width="45%"/>
Resolvi verificar cada página ativa, o me trouxe o seguinte feedback:

2. Grafana não havia logado, cheguei a criar uma conta, entretanto ele não aceitou. Como segunda medida, procurei no código um usuário e uma senha, encontrando `adatech` e `adatech@2233`o que permitiu o meu login. 

**Meu questionamento é porque ele não entrou automaticamente, já que estava no código.**


3. A página de votação estava ativa, porém, ao tentar votar, ela me dava a resposta abaixo:

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/4188d002-c1bd-47e1-993d-0cdf1f7a98d6" width="70%"/>

Imaginei que o banco de dados não estava conectado e, ao averiguar os contêineres, notei que o redis e o prometheus estavam desconectados.

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/abd797c0-dc4a-4fde-b321-69ba5ac68a13" width="70%"/>

Tentei start eles novamente, ação que funcionou apenas com o armazenamento de estrutura de dados em memória, possibilitando a votação.

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/8bf3b446-aafc-46c8-a925-8fcf3d2f7972" width="45%"/>

<img src="https://github.com/BiancaMalta/Observability/assets/92928037/e9756ba0-2184-4346-8efe-1ab6a2308262" width="90%"/>

**O que me questiono é porque ele não subiu com todos os contêineres.**

4. Por fim, fui tentar fazer o dashboard solicitado e me deparei com outro erro:

![Captura de tela de 2024-03-22 14-32-32](https://github.com/BiancaMalta/Observability/assets/92928037/89185328-3c40-4297-90eb-45f0d28f40f2)

Aparentemente, os dados não estavam conectados justamente por falta do prometheus. Mesmo revendo à aula, não soube como solucionar isso.
</details>
<details>
  <summary>Desafio 01</summary>
Criar um dashboard de observabilidade com base nas melhores práticas, usando métricas do Prometheus, para monitorar um sistema composto por uma API Rest em Python, um Worker em Node.js, um Frontend em Node.js, um banco de dados PostgreSQL e um Redis pode ser dividido em várias etapas.

### 1. Definição de Objetivos e Requisitos

-   Identificar os principais componentes do sistema a serem monitorados (API, Worker, Frontend, PostgreSQL, Redis).
-   Definir os KPIs e as métricas essenciais para monitorar o desempenho e a saúde do sistema.
-   Especificar os painéis e visualizações necessárias para cada contexto (API, Worker, Frontend, Bancos de Dados, Cache).

### 2. Configuração do Prometheus

-   Configurar o Prometheus para coletar métricas dos componentes do sistema. Isso pode envolver a definição de alvos de coleta, regras de alerta e configuração de retenção de dados.
-   Usar etiquetas (labels) para adicionar metadados às métricas, permitindo uma segmentação eficaz dos dados.

### 3. Desenvolvimento do dashboard Grafana

-   Criar um dashboard principal com base nos quatro sinais dourados da observabilidade: latência, tráfego, erros e saturação.
-   Para cada contexto do sistema (API, Worker, Frontend, Banco de Dados, Redis), criar painéis individuais com métricas específicas e relevantes para aquele componente.
-   Personalizar os painéis com gráficos, tabelas, alertas e outros elementos visuais para representar as métricas de forma clara e informativa.

### 4. Configuração de alertas

-   Definir regras de alerta com base nos limiares definidos para cada métrica.
-   Configurar notificações para alertar a equipe responsável em caso de problemas ou degradação do sistema.
-   Garantir que os alertas sejam claros, acionáveis e escalonáveis.

### 5. Testes e monitoramento contínuo (K6/Seed)

-   Realizar testes para garantir que todas as métricas estejam sendo coletadas corretamente e que os painéis de visualização estejam funcionando conforme o esperado.
-   Implementar monitoramento contínuo para garantir que o dashboard esteja sempre atualizado e refletindo com precisão o estado do sistema.
-   Revisar e iterar sobre o dashboard conforme necessário para incluir novas métricas ou ajustar limiares de alerta com base no feedback e na evolução do sistema.


## KPIs e métricas essenciais:

**KPIs (Key Performance Indicators)** são indicadores-chave que medem o desempenho e o sucesso de um sistema ou processo em alcançar seus objetivos. Para monitorar o desempenho e a saúde do sistema composto por uma API Rest em Python, um Worker em Node.js, um Frontend em Node.js, um banco de dados PostgreSQL e um Redis, podemos considerar os seguintes KPIs e métricas essenciais:

1.  **Latência da API**:
    
    -   Métricas: Tempo médio de resposta das solicitações, tempo máximo de resposta, distribuição de tempo de resposta por intervalo.
    -   KPI: Tempo médio de resposta das solicitações deve ser mantido abaixo de um limite definido.

2.  **Taxa de Erros da API**:
    
    -   Métricas: Número total de erros, distribuição de tipos de erros (por exemplo, erros 4xx, 5xx), taxa de erros por solicitação.
    -   KPI: A taxa de erros por solicitação deve ser mantida abaixo de um limite definido.

3.  **Utilização do Worker e do Frontend**:
    
    -   Métricas: Utilização da CPU, utilização da memória.
    -   KPI: Utilização da CPU e da memória deve ser mantida dentro de limites aceitáveis para evitar sobrecarga.

4.  **Desempenho do Banco de Dados**:
    
    -   Métricas: Tempo de resposta das consultas, número de consultas por segundo, tamanho do cache de consultas.
    -   KPI: Tempo médio de resposta das consultas deve ser mantido abaixo de um limite definido.

5.  **Desempenho do Redis**:
    
    -   Métricas: Taxa de hits e misses no cache, utilização da memória.
    -   KPI: Taxa de hits no cache deve ser mantida alta para garantir uma boa taxa de cache.

## Use  quatro(4) sinais dourado como base

1.  **Latência**: Gráfico de linhas mostrando a latência média da API ao longo do tempo, com alertas configurados para disparar se a latência exceder um limite definido.
    
2.  **Tráfego**: Gráfico de barras exibindo o número de solicitações HTTP recebidas pela API, separadas por código de status (200 OK, 4xx, 5xx), para entender a carga de tráfego e identificar possíveis problemas de roteamento ou sobrecarga.
    
3.  **Erros**: Gráfico de pizza mostrando a distribuição de tipos de erros (por exemplo, erros de servidor, erros de validação) gerados pela API, com alertas configurados para acionar se o número de erros aumentar repentinamente.
    
4.  **Saturação**: Gráfico de área exibindo a utilização de CPU e memória do Worker e do Frontend, com linhas de tendência para identificar padrões de uso e alertas configurados para disparar se a utilização atingir níveis críticos.
    
## Especificação dos painéis e visualizações necessárias:

Para cada contexto do sistema (API, Worker, Frontend, Bancos de Dados, Cache), podemos especificar os seguintes painéis e visualizações:

1.  **API**:
    
    -   Gráfico de linhas para acompanhar a latência ao longo do tempo.
    -   Gráfico de barras para monitorar o número de solicitações e erros.
    -   Tabela com detalhes de erros recentes.

2.  **Worker e Frontend**:
    
    -   Gráfico de área para visualizar a utilização da CPU e memória.
    -   Gráfico de pizza para mostrar a distribuição de recursos por processo ou tarefa.

3.  **Bancos de Dados**:
    
    -   Gráfico de linha para mostrar o tempo de resposta das consultas.
    -   Gráfico de barras para monitorar o número de consultas por segundo.
    -   Gráfico de área para exibir o tamanho do cache de consultas.

4.  **Cache (Redis)**:
    
    -   Gráfico de área para mostrar a taxa de hits e misses no cache.
    -   Gráfico de linha para visualizar a utilização da memória.

### Considerações finais:

-   O roteiro acima é uma orientação geral e pode ser adaptado de acordo com as necessidades que você achar necessário.
-   É importante manter o dashboard e as configurações de alerta atualizadas à medida que o sistema evolui e novas métricas se tornam relevantes.



### Referências

**Documentação do Grafana**

https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/

https://grafana.com/docs/grafana/latest/alerting/

**Curso de Observabilidade Adatech**

https://comunidade.ada.tech/cursos/1eebae37-f785-6880-157f-4e35fb7219d4

</details>

## Referências
[Instrutor - Wilton Guilherme](https://www.linkedin.com/in/wilton-guilherme/)
## Autora 
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bianca-malta/)
