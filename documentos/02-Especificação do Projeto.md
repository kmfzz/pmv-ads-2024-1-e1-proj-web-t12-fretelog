# Especificação do Projeto

## Perfis de Usuários


<table>
    <tbody>
        <tr align=center>
            <th colspan="2">Suporte e moderação</th>
        </tr>
        <tr>
            <td width="150px"><b>Descrição</b></td>
            <td width="600px">Perfil que realiza suporte da aplicação</td>
        </tr>
        <tr>
            <td><b>Necessidades</b></td>
            <td>
                <ol>
                    <li>Colaboração com usuários, auxiliando o uso da plataforma.</li>
                    <li> Moderar conteúdo, caso seja encontrado algo inadequado.</li>
                    <li>Mediar conflitos de ranqueamento de condutor.</li>
                </ol>
            </td>
        </tr>
    </tbody>
</table>


<table>
   <tbody>
      <tr align=center>
         <th colspan="2">Motorista </th>
      </tr>
      <tr>
         <td width="150px"><b>Descrição</b></td>
         <td width="600px">Motoristas que são cadastrados para sua transportadora e que prestam serviços para usuario final</td>
      </tr>
      <tr>
         <td><b>Necessidades</b></td>
         <td>
            <ol>
               <li>Acesso rápido e fácil.</li>
               <li> Utilizar de ambiente digital popular. </li>
               <li>Conteúdo auto explicativo.</li>
               <li>Possibilidade de enviar fotos e documentos.</li>
               <li>Possibilitar envio de notificação de conteúdo  inadequado.</li>
            </ol>
         </td>
      </tr>
   </tbody>
</table>

<table>
   <tbody>
      <tr align=center>
         <th colspan="2">Transportadora  </th>
      </tr>
      <tr>
         <td width="150px"><b>Descrição</b></td>
         <td width="600px">Perfil utilizado pelas empresas para cadastrarem seus motoristas</td>
      </tr>
      <tr>
         <td><b>Necessidades</b></td>
         <td>
            <ol>
               <li>Captação de motoristas.</li>
               <li>  Notificação de novos cadastros. </li>
               <li>Acesso a plataforma de cadastros para avaliar motoristas.</li>
               <li> Possibilitar envio de notificação de conteúdo inadequado</li>
            </ol>
         </td>
      </tr>
   </tbody>
</table>

## Histórias de Usuários


> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Motorista| Realizar o cadastro em transportadoras de forma ágil e protegendo meus dados.| Otimizar tempo e compartilhar cadastro com mais transportadoras.                             |
| Motorista| Proteger meus dados pessoais.| Cumprir as diretrizes da lei geral de proteção de dados.|
| Motorista| Realizar busca por ofertas de frete, de acordo com perfil  desejado | Otimizar o tempo de busca.|
| Usuário Transportador| Realizar cadastro de motoristas de forma ágil e confiável | Otimizar o tempo.
| Usuário Transportador| Captar novos motoristas de forma ágil e confiável | Otimizar a busca por novos parceiros.
| Usuário Transportador| Realizar buscas por motoristas parceiros de acordo com um determinado perfil | Otimizar o tempo de busca
| Suporte | Acompanhar a inserção dos dados dos demais usuários | Os usuários podem ter dificuldade com ferramentas digitais. |
| Suporte | Editar avaliações de condutores | Resolução de conflito ouerro material durante avaliação
 


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao usuário cadastrar uma conta                     | Alta   | 
| RF-02 |  A aplicação deve permitir ao usuário fazer o login da sua conta                    | Alta   |
| RF-03 |  A aplicação deve permitir ao usuário atualizar e recuperar sua senha                    | Alta   |
| RF-04 |  A aplicação deve oferecer a funcionalidade de envio de fotos de documentos                    | Alta   |
| RF-05 |  A aplicação deve permitir atualizar dados e documentos do usuário                    | Alta   |
| RF-06 |  A aplicação deve permitir a opção de autenticação em dois fatores                   | Média   |
| RF-07 |  A aplicação deve solicitar autorização do uso dos dados dos usuários, para fins de usabilidade, seguindo todas as diretrizes da lei geral de proteção de dados                    | Alta   |
| RF-08 |  A aplicação deve permitir ao usuário dar algum tipo de avaliação para o  motorista                    | Média   |
| RF-09 |  A aplicação deve ranquear os motoristas mais bem classificados    | Média   |
| RF-10 |  A aplicação deve permitir agendar um serviço para o motorista     | Alta   |
| RF-11 |  A aplicação deve permitir marcação de conteúdo inapropriado para posterior remoção                    | Alta   |
| RF-12 |  A aplicação deve ranquear os motoristas por tipo de veículos e rotas especificas                    | Média   |
| RF-13 |  A aplicação deve ter um chat com suporte                    | Média   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  O aplicativo deve ser capaz de processar solicitações deusuários em tempo real e fornecer respostas rápidas                    | Alta   | 
| RNF-02 |  O aplicativo deve estar disponível 24/7 para atender as necessidades dos usuários a qualquer momento                    | Alta   | 
| RNF-03 |  O aplicativo deve garantir a segurança dos dados do usuário, incluindo detalhes de pagamento e informações pessoais.                    | Alta   |
| RNF-04 |  O aplicativo deve ser capaz de lidar com um grande número de usuários simultâneos sem degradação do desempenho                    | Média   |
| RNF-05 |  O aplicativo deve ser fácil de usar, com uma interface intuitiva e amigável   | Média   |
| RNF-06 |  O aplicativo deve ser compatível com vários navegadores, como Google Chrome, Firefox e Safari  | Alta   |
| RNF-07 |  O aplicativo deve ser fácil de modificar e atualizar para atender as mudanças nas necessidades dos usuários e do mercado | Alta   |
| RNF-08 |  O aplicativo deve ser robusto e livre de erros proporcionando uma experiencia de usuário consistente   | Alta   |
| RNF-09 |  O aplicativo deve ser capaz de recuperar rapidamente de falhas ou erros, minimizando o impacto para o usuário. Isso pode incluir a capacidade de reiniciar rapidamente após uma falha ou capacidade de entrar em um modo de operação reduzida quando um erro ocorre   | Média   |
| RNF-10 |  A aplicação deve registrar todas as ações executada por seus usuários em sistema separado de armazenamento (Log)  | Média   |
| RNF-11 |  O aplicativo deve permitir dark mode                  | Baixa   |
| RNF-12 |  O aplicativo deve ter sistema de tutorial para melhor uso                    | Baixa   |


**Prioridade: Alta / Média / Baixa. 

