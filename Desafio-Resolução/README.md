# Resolução - Desafio
Durante o módulo de Observabilidade, foi proposto o desafio de criar um dashboard. Irei abordar, por tópicos, o desenvolvimento desse trabalho.

## 1. Definição de Objetivos e Requisitos
Em um primeiro momento, identifiquei os principais componentes do sistema:
- API: Responsável por receber e processar solicitações dos clientes.
- Frontend: Interface do usuário onde as solicitações são iniciadas.
- Worker: Responsável por processar tarefas em segundo plano.
- Cache (Redis): Armazena em cache os dados frequentemente acessados para melhorar o desempenho.
- Banco de Dados (PostgreSQL): Armazena os dados persistentes do sistema.

Após esse passo, defini o que deveria ser monitorado para buscar as devidas métricas: 
1. API:
- Taxa de solicitações por segundo.
- Latência das solicitações HTTP.
- Uso de CPU e memória.
2. Frontend:
- Latência das solicitações HTTP para a API.
- Taxa de erros de solicitação.
- Tempo médio de carregamento da página.
3. Worker:
- Taxa de tarefas processadas por segundo.
- Latência das tarefas processadas.
- Uso de CPU e memória. 
4. Redis:
- Tamanho do cache ao longo do tempo.
- Taxa de hits e misses do cache.
- Alertas para tamanho do cache próximo ao limite.
5. Banco de Dados (PostgreSQL)
- Uso de espaço em disco ao longo do tempo.
- Número de conexões ativas.
- Monitoramento em tempo real das consultas executadas.

Estipulei painéis e visualizações para fornecer uma visão abrangente do desempenho e da saúde de cada componente do sistema, permitindo a rápida identificação e resolução de problemas. Cabe mencionar que conforme fui implementando as queries, efetuei algumas mudanças no planejamento. 

## 2. Configuração do Prometheus
A configuração do Prometheus para coletar métricas dos componentes do sistema, envolve as seguintes etapas:
*Obs: deixarei alguns exemplos para ficar mais claro.*
1. Scraping Targets:
Identificar os serviços/componente que deseja monitorar(feito no tópico anterior) e configurar o arquivo `prometheus.yml` para incluir os alvos de scraping. 
```
scrape_configs:
  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100'] # Exemplo para o Node Exporter

  - job_name: 'my_app'
    static_configs:
      - targets: ['myapp.example.com:8080'] # Exemplo para um serviço web
```
2. Alerting Rules:
Identifique as condições que deseja alertar(alta latência, erros frequentes, baixa capacidade de armazenamento...) e configure as regras de alerta.
```
groups:
- name: example
  rules:
  - alert: HighLatency
    expr: http_request_duration_seconds > 1
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: High latency detected
```
3. Retention Configuration:
Decida por quanto tempo deseja armazenar os dados de métricas e configure as políticas de retenção no arquivo.
```
storage:
  retention: 30d # Armazenar dados por 30 dias
```
## 3. Desenvolvimento do dashboard Grafana
Foi solicitado a criação de painéis individuais com métricas específicas e relevantes para cada componente em cada contexto do sistema. Entretando, antes de detalhar cada serviço, achei interessante incrementar uma visão geral.
### Geral
- Total de votos
```
sum(votes_total)
```
A função `sum` está agregando todos os valores dessa métrica ao longo do tempo, resultando em um único valor.
- Votos por categoria
```
sum by (vote_type) (votes_total)
```
A consulta está calculando a soma da métrica votes_total agrupada pelo rótulo vote_type. Isso significa que ela está agregando os valores da métrica votes_total para cada valor único do rótulo vote_type.
- Armazenamento usado
```
sum(container_fs_usage_bytes)
```
Cada contêiner possui seu próprio sistema de arquivos e essa métrica acompanha a soma de todo espaço em disco usado pelos contêineres.
- Carga do Sistema
```
node_load1
```
A carga média, muitas vezes referida como "load average", refere-se ao número médio de processos em execução (ativos ou esperando ativos) em um determinado período de tempo. Valores mais altos podem indicar que o sistema está sobrecarregado e pode estar enfrentando problemas de desempenho.
- Memória RAM
```
process_resident_memory_bytes
```
Essa métrica é uma medida do tamanho da memória residente usada por cada processo. O monitoramento da RAM é crucial para garantir a estabilidade, o desempenho e a eficiência dos sistemas computacionais. 
- Uso da CPU
```
sum by (name) (rate(container_cpu_usage_seconds_total{image!=\"\"}[1m])) / scalar(count(node_cpu_seconds_total{mode="user"})) * 100"
```
O `rate` calcula a taxa de aumento da utilização da CPU por minuto, o `sum by (name)` agrupa os resultados da consultas pelo nome do contêiner, o `count(node_cpu_seconds_total{mode="user"})` conta o número de amostras da métrica que representam o tempo de CPU gasto em modo de usuário, o `scalar .... *100` multiplica o resultado do passo anterior por 100 para obter uma porcentagem e o ` / ` 
divide a utilização total da CPU por contêiner pela utilização total da CPU nos hosts do sistema 
- Saturação da Memória
```
(node_memory_MemTotal_bytes - node_memory_MemFree_bytes) / node_memory_MemTotal_bytes * 100
```
Essa expressão calcula a porcentagem de memória RAM utilizada em relação ao total disponível no sistema.
- Saturação da CPU
```
100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
```
A parte da expressão `irate()` é usada para calcular a taxa de mudança instantânea das métricas `node_cpu_seconds_total` com o rótulo mode igual a `idle` (representando o tempo que a CPU está ociosa) nos últimos 5 minutos. O `avg by` calcula a média dos valores calculados na etapa anterior e o `100 - ....` nos dá a porcentagem de tempo da CPU gasto em processamento, em oposição ao tempo ocioso.
- Saturação da Rede
```
irate(node_network_receive_bytes_total{device="eth0"}[5m]) + irate(node_network_transmit_bytes_total{device="eth0"}[5m])
```
Combinei as taxas instantâneas de bytes recebidos e transmitidos na interface de rede eth0 ao longo dos últimos 5 minutos.
- Uso de Memória
```
sum by (name)(container_memory_usage_bytes{image!=""})
```
Essa expressão calcula a soma da métrica agrupada pelo rótulo name, excluindo os contêineres que não têm rótulo de imagem. 
- Entrada de Rede
```
sum by (name) (rate(container_network_receive_bytes_total{image!=" "}[1m]))
```
A soma da taxa de bytes recebidos na rede por contêiner, agrupados por nome (provavelmente o nome do contêiner), pode ser útil para analisar o tráfego de rede em um ambiente de contêineres.
- Saída de Rede
```
sum by (name) (rate(container_network_transmit_bytes_total{image!=" "}[1m]))
```
A diferença de importância entre esta expressão e a anterior (que calculava a taxa de bytes recebidos na rede) reside na perspectiva que elas oferecem. Enquanto a primeira expressão se concentra nos dados recebidos pela rede em cada contêiner, esta segunda expressão se concentra nos dados transmitidos pela rede em cada contêiner.
![Captura de tela de 2024-04-05 11-34-47](https://github.com/BiancaMalta/Observability/assets/92928037/eb05d170-b0e6-4634-9b8f-b8dc5329bd7e)

### API
- Backend: Uso da CPU
```
rate(process_cpu_seconds_total{job="backend"}[15m])
```

É calculado a taxa de variação da métrica para o job "backend" nos últimos 15 minutos. 
- Backend: Número de Solicitações
```
sum(rate(flask_http_request_total{job="backend"}[5m]))
```
Efetuei a soma das taxas de variação da métrica para o job "backend" ao longo dos últimos 5 minutos. Essa métrica pode ser útil para monitorar a taxa de solicitações HTTP ao longo do tempo e identificar tendências de uso em um sistema.
- Backend: Gráfico de Latência das Solicitações HTTP
```
rate(flask_http_request_duration_seconds_sum{job="backend"}[15m]) / rate(flask_http_request_duration_seconds_count{job="backend"}[15m])
```
A primeira métrica representa a soma total do tempo de duração de todas e solicitações e a segunda representa o número total de solicitações, logo a expressão retorna média da duração das solicitações HTTP processadas pelo backend durante um período estipulado.

### Frontend
- Frontend: Latência
```
(nodejs_eventloop_lag_mean_seconds + nodejs_eventloop_lag_max_seconds) / 2
```
O calculo retorna a média entre o atraso médio e o atraso máximo do loop de eventos do Node.js. Isso pode ser útil para entender melhor o desempenho e a latência do loop de eventos em sua aplicação Node.js.
- Frontend: Tráfego
```
rate(promhttp_metric_handler_requests_total{code="200"}[5m])
```
Esta consulta fornece a taxa das solicitações HTTP com códigos de resposta bem-sucedidas nos últimos 5 minutos. Isso pode ser útil para monitorar problemas e falhas no tratamento de solicitações pelo servidor HTTP do Prometheus.
### Worker
- Worker: Uso da CPU
```
rate(process_cpu_seconds_total{job="worker"}[15m])
```
Ajuda a entender como o uso da CPU pelos processos do "worker" está mudando ao longo do tempo, o que pode ajudar a identificar tendências de utilização e possíveis problemas de desempenho.
### Redis
- Redis: Taxa de Execução de Comandos
```
rate(redis_commands_total[5m])
```
O gráfico traz como número de comandos executados está variando ao longo do tempo. Isso pode ser útil para detectar picos de atividade, identificar padrões de uso e fazer ajustes conforme necessário para otimizar o desempenho do Redis.
- Redis: Taxa de solicitações
```
rate(redis_commands_processed_total[1m])
```
A primeira expressão fornecerá uma visão mais ampla e suavizada da taxa de mudança da métrica ao longo de um período de tempo mais longo (5 minutos), enquanto a segunda expressão fornecerá uma visão mais granular e sensível 
![Captura de tela de 2024-04-05 11-35-28](https://github.com/BiancaMalta/Observability/assets/92928037/c2c93248-274f-4126-9531-37da2cf630f0)
