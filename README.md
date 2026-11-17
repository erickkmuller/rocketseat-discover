# Links profissionais — Erick Muller

<p align="center">
  <img src="./assets/avatar_transparente.png" alt="Foto de Erick Muller" width="160" />
</p>

Página pessoal para reunir meus principais links profissionais, projetos e currículo. O site é responsivo e oferece temas claro e escuro.

## Funcionalidades

- Links para LinkedIn, GitHub e currículo em PDF.
- Alternância entre tema claro e escuro.
- Detecção da preferência de tema do sistema quando ainda não há uma escolha salva.
- Persistência da escolha de tema no navegador.
- Layout responsivo para dispositivos móveis e desktops.
- Foco visível para navegação por teclado e suporte à preferência por movimento reduzido.

## Tecnologias

- HTML
- CSS
- JavaScript
- Figma

## Executar localmente

1. Abra a pasta do projeto no Visual Studio Code.
2. Inicie o `index.html` com a extensão **Live Server**.
3. Acesse no navegador o endereço local exibido pelo Live Server.

Também é possível abrir `index.html` diretamente no navegador. Durante o desenvolvimento, um servidor local ajuda a testar o site em condições mais próximas da publicação.

## Estrutura

```text
.
├── index.html
├── script.js
├── style.css
└── assets/
    ├── avatar_transparente.png
    ├── avatar-light.png
    ├── bg-desktop.jpg
    ├── bg-desktop-light.jpg
    ├── bg-mobile.jpg
    ├── bg-mobile-light.jpg
    ├── MoonStars.svg
    ├── Sun.svg
    └── curriculo-erick.pdf
```

## Como funciona

- `index.html` contém a estrutura da página, os metadados e os links profissionais.
- `style.css` define a aparência, as cores dos temas, os fundos responsivos e os estados de interação.
- `script.js` alterna o tema, atualiza os atributos de acessibilidade e salva a escolha no navegador.
- `assets/` reúne imagens, ícones e o currículo.

O tema inicial é aplicado durante o carregamento para reduzir a possibilidade de a página piscar no tema incorreto. Se não houver preferência salva, o site usa o tema do sistema. Uma escolha feita no botão é guardada no `localStorage`; se o navegador bloquear esse armazenamento, a alternância continua funcionando enquanto a página estiver aberta.

## Links

- [LinkedIn](https://www.linkedin.com/in/erickkmuller/)
- [GitHub](https://github.com/erickkmuller)
- [Currículo em PDF](./assets/curriculo-erick.pdf)

O currículo também contém links clicáveis para LinkedIn e GitHub.

## :memo: Licença

Esse projeto está sob a licença MIT.
