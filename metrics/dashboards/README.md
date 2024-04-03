# Dashboard
No grafana, é possível criar diferentes tipos de gráficos dependendo do que deseja visualizar. 
Para analisar o tempo de resposta, status de requisição e disponibilidade para requisições HTTP e HTTPS, você pode utilizar as seguintes queries:
- Tempo de resposta:
```
flask_http_request_duration_seconds_bucket{method="GET", le="0.1", status=~"2..|3..|4..|5.."}
```
Esta query retorna o tempo de resposta das requisições GET que tiveram um status de resposta começando com 2, 3, 4 ou 5.

- Status de requisição:
```
flask_http_request_total{method="GET", status=~"2..|3..|4..|5.."}
```
Esta query retorna o número total de requisições GET que tiveram um status de resposta começando com 2, 3, 4 ou 5.

- Disponibilidade:
```
(sum(flask_http_request_total{method="GET", status=~"2..|3.."} ) / sum(flask_http_request_total{method="GET"})) * 100
```
No calculo da disponibilidade, você pode usar o PromQL para calcular o número total de requisições bem-sucedidas e o número total de requisições, e então calcular a porcentagem de sucesso.

Já para monitorar a saturação da CPU, memória e rede, você pode usar as seguintes queries:

- Saturação da CPU:
```
100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
```
Essa query calcula a porcentagem de uso da CPU subtraindo a taxa de ociosidade da CPU de 100%.

- Saturação da Memória:
```
(node_memory_MemTotal_bytes - node_memory_MemFree_bytes) / node_memory_MemTotal_bytes * 100
```
Essa query calcula a porcentagem de uso da memória subtraindo a memória livre da memória total e dividindo pelo total, para obter a porcentagem.

- Saturação da Rede:
```
irate(node_network_receive_bytes_total{device="eth0"}[5m]) + irate(node_network_transmit_bytes_total{device="eth0"}[5m])
```
Esta query calcula a taxa de transferência de bytes na interface de rede eth0. Você pode ajustar o nome do dispositivo conforme necessário para monitorar outras interfaces de rede.

Se você deseja uma query para monitorar os votos:
- Quantidade total de votos:
```
sum(votes_total)
```
- Por categorias:
```
sum by (vote_type) (votes_total)
```
Essa query vai somar os votos agrupados por tipo de voto (vote_type), assim você terá a quantidade de votos para cada categoria. Certifique-se de que vote_type é um rótulo associado à métrica votes_total em seu sistema de monitoramento.

E por fim, algumas queries adicionais que podem ser úteis para monitoramento:
- Uso da memória por processo:
```
process_resident_memory_bytes
```
Esta query retorna o tamanho da memória residente de cada processo em bytes.
- Histograma para duração das requisições HTTP com código de status 500:
```
flask_http_request_duration_seconds_bucket{status="500"}
```
- Gráfico de barras para número de descritores de arquivo abertos:
```
process_open_fds
```
- Tempo total da CPU do processo:
```
process_cpu_seconds_total
```
-Latência média do disco:
```
irate(node_disk_read_time_seconds_total[5m]) + irate(node_disk_write_time_seconds_total[5m])
```
Esta query calcula a latência média do disco somando as taxas de leitura e escrita do disco.


Lembre-se de ajustar as métricas e rótulos conforme necessário para se adequarem à sua configuração específica e às métricas que você está coletando. Além disso, é importante ajustar os intervalos de tempo e as janelas de tempo conforme necessário para obter uma visão adequada da saturação ao longo do tempo.

![Captura de tela de 2024-04-03 16-09-39](https://github.com/BiancaMalta/Observability/assets/92928037/0bd075f3-8ae5-4a28-adee-0e10ffe4bcff)
![Captura de tela de 2024-04-03 16-10-03](https://github.com/BiancaMalta/Observability/assets/92928037/3a470c24-fced-4171-85c2-e6aae67d72b1)
