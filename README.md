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

### Prometheus
Prometheus é um sistema de monitoramento e alerta de código aberto. Ele coleta métricas de alvos configurados por meio de um modelo de coleta e armazenamento de séries temporais com um poderoso mecanismo de consulta.

#### Tipos de métricas
##### Contadores
Usados para medir incidência, como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.
##### Histogramas
Representam a distribuição de valores em um conjunto de dados. Ele divide os dados em intervalos ou "bins" e mostra quantas observações estão em cada intervalo.
##### Sumários
Também chamado de estatística resumida, é uma forma de resumir os principais aspectos de um conjunto de dados de uma forma concisa e informativa.Geralmente, inclui estatísticas descritivas, como média, mediana, moda, mínimo, máximo e desvio padrão.
##### Temporais
Mostra a mudança do valor ao longo do tempo, identifica padrões sazonais, flutuações de curto e longo prazo, e outros comportamentos temporais significativos.

 
#### Tipos de alvos(Targets)
##### Servidores
Os hosts são monitorados para garantir que estejam operando corretamente, medindo métricas como CPU, memória, disco, rede e outros recursos.
##### Bancos de dados
Sua verificação envolve acompanha o tempo que as consultas levam para serem processadas, identificando consultas lentas que podem impactar negativamente o desempenho, monitora bloqueios de transações e deadlocks, assim como, o tempo de atividade e indisponibilidade.
##### Aplicações
Métricas como tempo de resposta, tempo de carregamento da página, erros HTTP, transações por segundo, entre outras, são monitoradas para garantir uma boa experiência do usuário.
##### Serviços
Os serviços representam processos ou conjuntos de processos que trabalham juntos para fornecer uma funcionalidade específica.Eles podem incluir serviços web, bancos de dados, servidores de arquivos, etc.

#### Tipos de alertas
##### Alertas de limiar
Alertas de limiar são alertas que são acionados quando uma métrica ultrapassa um determinado limite. 
##### Alertas de anomalia
Alertas de anomalia são alertas que são acionados quando uma métrica se desvia significativamente de seu comportamento normal. 
##### Alertas de tendência
Alertas de tendência são alertas que são acionados quando uma métrica mostra uma tendência significativa ao longo do tempo.
##### Alertas de correlação
Alertas de correlação são alertas que são acionados quando duas ou mais métricas mostram um comportamento correlacionado. 

#### Tipos de consultas
##### Consultas de agregação
São usadas para realizar cálculos sobre conjuntos de dados, como soma, média, mínimo, máximo, contagem, entre outros. Exemplo: calcular a receita total de vendas em um período de tempo específico.
##### Consultas de filtro
Consultas de filtro são consultas que são usadas para filtrar um conjunto de dados com base em um critério específico. Exemplo: recuperar todos os pedidos feitos por um cliente específico.
##### Consultas de projeção
Consultas de projeção são consultas que são usadas para selecionar um subconjunto de colunas de um conjunto de dados. Exemplo: selecionar apenas os nomes e emails dos clientes de uma tabela de clientes.
##### Consultas de transformação
Consultas de transformação são consultas que são usadas para transformar um conjunto de dados em um formato diferente. Exemplo: converter todas as letras em maiúsculas em uma coluna de nomes de clientes.
### Grafana
Enquanto o Prometheus é uma ferramenta de monitoramento de código aberto projetada principalmente para sistemas baseados em métricas, o Grafana é uma plataforma de visualização e análise de dados que pode ser integrada com várias fontes de dados, incluindo o Prometheus.

Em resumo, o Grafana é uma ferramenta poderosa e versátil, oferecendo uma ampla gama de recursos e integrações para atender às necessidades de monitoramento e observabilidade em diferentes domínios e ambientes. Sua flexibilidade, facilidade de uso e extensibilidade o tornam uma escolha popular entre profissionais de TI, desenvolvedores e analistas de dados.

- [Instrumentação](https://prometheus.io/docs/instrumenting/clientlibs/)
- [Queries](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [Operadores](https://prometheus.io/docs/prometheus/latest/querying/operators/)
- [Funções](https://prometheus.io/docs/prometheus/latest/querying/functions/)
- [Grafana Exemplos](https://play.grafana.org/d/000000012/grafana-play-home?orgId=1)  
- [Grafana Dashboards](https://grafana.com/grafana/dashboards/)
- [Loading Test Grafana k6](https://grafana.com/docs/k6/latest/get-started/installation/)
  
</details>
<details>
  <summary>Elastic Stack e o Graylog</summary>  

### Elastic Stack:
A plataforma de análise distribuída consiste em várias ferramentas interconectadas desenvolvidas pela Elastic.

#### Componentes Principais:
- Elasticsearch: Um motor de busca distribuído e escalável que armazena, indexa e permite pesquisar dados de forma eficiente.
- Logstash: Um pipeline de ingestão de dados que coleta, processa e envia logs e outros dados para o Elasticsearch.
- Kibana: Uma interface de usuário para visualizar e explorar dados indexados no Elasticsearch, oferecendo recursos avançados de análise e visualização.
- Beats: Conjunto de agentes de coleta de dados leves que enviam dados de logs e métricas diretamente para o Elasticsearch ou para o Logstash.

#### Casos de Uso:
- Monitoramento de infraestrutura e aplicativos.
- Análise de logs de segurança.
- Análise de logs de servidores e aplicações.
- Monitoramento de métricas de desempenho.

### Graylog:
Graylog é uma plataforma de gerenciamento de logs de código aberto que facilita a coleta, processamento e análise em tempo real. 

#### Componentes Principais:
- Graylog Server: O núcleo da plataforma, responsável pela ingestão, processamento e indexação de logs.
- MongoDB: Um banco de dados NoSQL usado para armazenar metadados e configurações do Graylog.
- Graylog Web Interface: Uma interface web para pesquisar, visualizar e analisar logs, além de configurar alertas e dashboards.
- Graylog Collector Sidecar: Uma ferramenta para coletar logs de servidores e dispositivos e enviá-los para o Graylog Server.

### Diferenças e Comparação:
#### Arquitetura:
- Elastic Stack geralmente utiliza Elasticsearch como mecanismo de armazenamento e busca.
- Graylog utiliza Elasticsearch para armazenamento e busca de dados, mas também requer MongoDB para armazenamento de metadados e configurações.

Em resumo, tanto Elastic Stack quanto Graylog são excelentes soluções para gerenciamento de logs. A escolha entre eles geralmente depende das necessidades específicas da organização, das preferências de arquitetura e das habilidades da equipe técnica.
</details>
<details>
  <summary>Desafio</summary>
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
