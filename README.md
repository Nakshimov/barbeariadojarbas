# Barbearia do Jarbas

Crie um site de página única, moderno, responsivo e fácil de editar para “Barbearia do Jarbas”, uma barbearia de bairro em Santa Tereza, Belo Horizonte. Este é SOMENTE um modelo demonstrativo e não deve sugerir que seja o site oficial do estabelecimento.

Direção visual: personalidade de barbearia de bairro, acolhedora e autêntica, sem aparência de luxo. Fundo carvão quase preto, vermelho queimado como acento, branco quente, textura/grão bem discreto. Tipografia marcante em títulos (estilo condensada/placa de barbearia) com fonte simples e legível no corpo. Componentes consistentes, contraste AA, foco visível, HTML semântico, responsivo começando pelo celular, animações leves e respeitando prefers-reduced-motion. Evite visual genérico de template. Faça uma identidade tipográfica forte, detalhes gráficos como listras/faixas e ícone simples de tesoura/barbeiro. Não sobrecarregue.

Imagens: use imagens fotográficas de alta qualidade com licença adequada, exclusivamente ilustrativas e não apresentadas como fotos reais do local; prefira imagens Unsplash por URL estável em images.unsplash.com, com object-fit/crop cuidadoso e texto alternativo descritivo em português. Imagens de barbearia, barbeiro trabalhando, corte/barba e interior. Não use logos de terceiros.

Estruture a página com seções e IDs para navegação:
1) Cabeçalho fixo ou sticky discreto com nome/marca “Barbearia do Jarbas”, menu âncorado “Início”, “Serviços”, “Sobre”, “Contato” e botão destacado “Agendar horário”. Em celular, menu acessível que abre/fecha e mantém aria-label/aria-expanded.
2) Hero com pequeno rótulo “SANTA TEREZA • BELO HORIZONTE”, título exato “Seu estilo, do seu jeito.”, texto curto e caloroso apresentando um espaço descontraído para cuidar do visual, CTA “Ver serviços” (rola até Serviços) e “Agendar horário”; foto ilustrativa de barbearia/corte com tratamento visual marcante. Deixe claro em microtexto que esta página é um modelo demonstrativo para personalização.
3) Serviços com cards para: “Corte tradicional — R$ 35”, “Degradê — R$ 40”, “Corte + barba — R$ 60”, “Barba — R$ 25”, “Acabamento — R$ 15”. Escreva uma descrição breve, sem alegar fatos verificáveis, para cada serviço. Exiba um aviso visível e elegante: “Preços e descrições são exemplos editáveis.” Preços e textos devem estar concentrados em um objeto/array simples para a pessoa substituir facilmente.
4) Sobre: texto acolhedor sobre atendimento próximo, conversa boa e cuidado com o estilo, sem inventar história, equipe ou estrutura específica; foto ilustrativa do interior de barbearia.
5) Galeria em grade responsiva com fotos ilustrativas de cortes e ambiente, alt text e a observação “Imagens ilustrativas — substitua por fotos reais da barbearia.”
6) Depoimentos: três comentários curtos, naturais, claramente identificados em cada card como “Exemplo editável”, sem estrelas, selo, Google ou apresentação como avaliações reais.
7) Contato/localização: referência “Santa Tereza — Belo Horizonte, MG”. Telefone/WhatsApp, endereço e horário de funcionamento começam literalmente como “Adicionar informação” e ficam em configuração central editável. Não invente endereço, telefone ou horário. Não mostre mapa enquanto endereço real não estiver configurado; como não há endereço real, omita o mapa e deixe o espaço pronto de forma simples para futura configuração. Botão WhatsApp com número vazio por padrão e um aviso próximo: “Configure um número real antes de publicar.” Botão de contato continua funcional: se número válido configurado, abre https://wa.me/NUMERO com mensagem pré-preenchida; se não, mostra feedback acessível explicando que precisa configurar um número real, sem abrir wa.me e sem atribuir um número fictício. O botão “Agendar horário” segue a mesma regra; alternativa, quando não configurado, rolar para Contato e anunciar o aviso.
8) Rodapé com nome, links de navegação funcionais para as seções, aviso explícito “Conteúdo demonstrativo: substitua textos, preços e imagens antes de publicar.” e nota de que é modelo de personalização sem vínculo oficial.

Todos os botões e links precisam funcionar: âncoras, menu mobile, CTAs, estados de foco, feedback. Centralize conteúdo editável num objeto no início do componente (nome, localização, contatos vazios, campos “Adicionar informação”, serviços, depoimentos, imagens), com comentários curtos mostrando onde editar. Não use lorem ipsum, não invente dados do negócio, não adicione mapa fictício, não use avaliação falsa do Google, e não publique/deploy. Entregue uma página visualmente polida e funcional.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5ee2a6c0-9db1-454b-b50d-e0bcdffa0a27).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
