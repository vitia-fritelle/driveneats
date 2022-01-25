# Descrição

Projeto usando JavaScript, HTML e CSS do site mobile do DrivenEats, um restaurante especial que entrega seu pedido em 6 minutos.

Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato+Bebida+Sobremesa.

O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.

# Requisitos

- Versionamento
    - [ ]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do [GitHub](https://github.com/)
    - [ ]  Faça commits a cada funcionalidade implementada
- Layout
    - [ ]  Aplicar layout para mobile seguindo imagens fornecida (não é necessário implementar um layout para desktop)
    - [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem
    - [ ]  Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria
    - [ ]  As fontes utilizadas são: [Righteous](https://fonts.google.com/specimen/Righteous) (nome do restaurante e títulos das categorias) e [Roboto](https://fonts.google.com/specimen/Roboto) (demais textos)
    - [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e varie os valores até que fiquem parecidas com as imagens do layout
    - [ ]  Para fazer os produtos rolarem horizontalmente, utilize `overflow-x: scroll`. No modo desktop um scroll é exibido, mas no modo celular não.
- Seleção de itens
    - [ ]  Ao clicar sobre um item, o mesmo deve ser marcado como selecionado, seguindo layout da tela 3
    - [ ]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado
    - [ ]  Ao clicar em um item já marcado, **não** é necessário desmarcá-lo
- Botão de finalizar pedido
    - [ ]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
    - [ ]  Quando o usuário tiver selecionado os itens das 3 categorias, o botão deve mudar para o estado de habilitado, seguindo layout da tela 5
- Envio do pedido
    - [ ]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o **WhatsApp Web**, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida
        
        **Dica**: Para criar um link que envia uma mensagem via WhatsApp, veja essa página de ajuda do WhatsApp: [https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=pt](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=pt)
        
        **Dica 2**: Para preparar a mensagem para o formato que o WhatsApp espera, pesquise por uma função chamada `encodeURIComponent(minhaString)`
        
    - [ ]  Essa mensagem deverá seguir este formato:
        
        ```css
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27.70
        ```
        
        **Dica**: para formatar um número decimal no formato 27.70, pesquise por `toFixed` 
        
- Para correção automática
    
    Para facilitar a correção do projeto, adicione estes atributos nos elementos HTML:
    
    - Grupos de opções de comida
        
        Os diferentes grupos de opções de comida devem ser identificados.
        
        - No elemento que contém todos os pratos (a primeira seção) adicione o atributo `data-identifier="dishes"`
            - Que elemento é esse?
                
                É o elemento com as opções de prato:
                
                ![Captura de tela de 2021-12-06 16-39-23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ebb40139-39a7-4d93-9a64-10da3e59253a/Captura_de_tela_de_2021-12-06_16-39-23.png)
                
                O elemento que contém cada um destes "Frango Yin Yang" deve receber o atributo.
                
        - No elemento que contém todas as bebidas (a segunda seção), adicione o atributo `data-identifier="drinks"`
            - Que elemento é esse?
                
                É o elemento que contém as opções de bebida:
                
                ![Captura de tela de 2021-12-06 16-40-24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1cb3c143-952b-4fce-b45d-a5b0a3ca57cf/Captura_de_tela_de_2021-12-06_16-40-24.png)
                
                O elemento que contém cada um destes "Coquinha gelada" deve receber o atributo.
                
        - No elemento que contém todas as sobremesas (a terceira seção), adicione o atributo `data-identifier="desserts"`
            - Que elemento é esse?
                
                É o elemento que contém as opções de sobremesa:
                
                ![Captura de tela de 2021-12-06 16-41-33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f8f177b-b5b0-47f8-9bf4-5da22dba21e0/Captura_de_tela_de_2021-12-06_16-41-33.png)
                
                O elemento que contém cada um destes "Pudim" deve receber o atributo.
                
    - Opções de comida
        - Em cada um dos elementos que é uma opção de comida (prato, bebida ou sobremesa) adicione o atributo `data-identifier="food-option"`
            - Que elementos são esses?
                
                São todos os elementos de comida, que seguem este layout:
                
                ![Captura de tela de 2021-12-06 16-47-30.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f95bc1e-d0b0-48db-9c2b-7266ee40513f/Captura_de_tela_de_2021-12-06_16-47-30.png)
                
                ![Captura de tela de 2021-12-06 16-47-26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aed8c6b9-36c7-4b1e-99ba-bba8d5993b08/Captura_de_tela_de_2021-12-06_16-47-26.png)
                
                ![Captura de tela de 2021-12-06 16-47-22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/404910e5-b7cc-4062-a389-1480b0548f8d/Captura_de_tela_de_2021-12-06_16-47-22.png)
                
        - Adicione também o atributo `data-identifier="food-title"` no nome da opção de comida
            - Que elemento é esse?
                
                É o elemento que exibe o título da comida dentro da caixinha de comida. 
                
                ![Captura de tela de 2021-12-06 16-51-21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7cf30da4-4f85-4cb2-9dc0-aa23e32fe61c/Captura_de_tela_de_2021-12-06_16-51-21.png)
                
        - Por fim, adiciona o atributo `data-identifier="food-price"` no preço da opção de comida
            - Que elemento é esse?
                
                É o elemento que contém o preço da comida:
                
                ![Captura de tela de 2021-12-06 16-54-43.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a7e0f3e-eda1-4382-8710-3f64b0de3a4d/Captura_de_tela_de_2021-12-06_16-54-43.png)
                
        - ⚠️ **Atenção!** O preço **deve** conter "R$", separado por um espaço e vírgula para separar os centavos!
            - Exemplos de casos
                
                ### Casos válidos
                
                ```html
                R$ 10,90
                R$ 4,33
                ```
                
                ### Casos inválidos
                
                ```html
                R$10,90
                R$ 10.90
                10,90
                10.90
                10,9
                R$ 10,9
                R$ 10.9
                R$ 10, 90
                R$ 10 ,90
                R$ 10 , 90
                ```
                
                Esta lista não é exaustiva, mas abarca vários exemplos de formatos que **não são válidos**. Por via de regra, se não segue o formato dado nos casos válidos, será considerado incorreto.
                
    - Botão de fechar pedido
        
        O botão de fechar pedido **deve ter o mesmo texto especificado no layout do Figma escrito.** Isto inclui o “Fechar pedido” e “Selecione os 3 itens para fechar o pedido”.
        
    - Bônus 1: Peça nome e endereço
        
        Ao pedir nome e endereço, pede-se com `prompt`. Qualquer outra forma irá falhar. 
        
    - Bônus 2: Confirme os dados antes de finalizar o pedido
        - Adicione o atributo `data-identifier="confirmation-dialog"` no elemento que contém as informações de confirmação.
            - Que elemento é esse?
                
                É a caixa verde com os itens selecionados e seus respectivos preços, além do total
                
                ![Captura de tela de 2021-12-06 17-01-53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12c021c1-2f52-4d89-8d0b-f4259e09beac/Captura_de_tela_de_2021-12-06_17-01-53.png)
                
        - **⚠️ Atenção!** Os preços devem ser escritos da mesma forma! Nos itens, sem o "R$". Já no total, com "R$" e espaço, além de usar vírgula em todos.
        - ⚠️ Atenção! Todos os textos
            - Confirme seu pedido
            - TOTAL
            - Tudo certo, pode pedir!
            - Cancelar
            
            devem ser escritos **da mesma maneira**
            
    
    Por fim, a página HTML do projeto deve se chamar `index.html` e deve estar na raíz do projeto.
    

# Bônus (opcional)

- Bônus 1: Peça o nome e endereço
    
    Ao clicar em finalizar pedido, lance dois `prompt` para o usuário solicitando seu nome e endereço. Essas informações são adicionadas na mensagem final que é enviada por WhatsApp no formato seguinte:
    
    ```
    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70
    
    Nome: Fulano
    Endereço: Rua...
    ```
    
- Bônus 2: Confirme os dados antes de finalizar o pedido
    
    Ao clicar em "Finalizar pedido", em vez de ir diretamente para o WhatsApp, revise primeiramente a compra, seguindo a tela Bônus disponível no Figma.