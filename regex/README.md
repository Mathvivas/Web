# Regex

- Extrair seções específicas de um arquivo de texto;
- Validação de formatação de, por exemplo, e-mail ou telefone;
- Análise de arquivos de texto e extração de dados para, por exemplo, gravar no banco de dados;
- Substituir os valores de um texto para limpar, reformatar ou alterar o conteúdo;
- <strong>\d</strong> : Qualquer dígito;
- <strong>.</strong> : Qualquer char;
- <strong>*</strong> : Zero ou mais vezes;
- <strong>+</strong> : Uma ou mais vezes;
- <strong>\s+</strong> : Um ou mais espaços em branco;
- <strong>\w</strong> : Word Char - Atalho para [A-Za-z0-9_];
- <strong>\b</strong> : Word Boundary - Define uma fronteira no alvo. Avalia se o alvo possui um word char ao redor, se tiver, não seleciona;
- <strong>\B</strong> : Non-word-boundary, marca o que está no meio, nunca no início e nunca no fim da palavra;
- <strong>^</strong> : ^algo - No início, deve haver "algo". Garante que nada pode vir antes;
- <strong>$</strong> : algo$ - No final, deve haver "algo". Garante que nada pode vir depois;
- <strong>{n}</strong> : n vezes;
- <strong>{n,}</strong> : no mínimo n vezes;
- <strong>?</strong> : Opcional;
- <strong>[-.]</strong> : Conjunto de caractéres, ou traço, ou ponto. Nesse caso, o pronto não precisa da barra;
- <strong>[0-9]</strong> : Zero até nove, somente um deles;
- <strong>[09]</strong> : Zero ou nove;
- <strong>[^,]+</strong> : Pega qualquer dígito (número ou letra) que não sejá uma vírgula.

<br>

# Exemplos

## CNPJ

- Alvo: 15.123.321/8883-22

- Pattern: 

```
\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}
```

## IP 

- 4 grupos de no mínimo 1 e no máximo 3 números

- Alvo:
    - 126.1.112.34
    - 128.126.12.244
    - 192.168.0.34

- Pattern: 
```
\d{1, 3}\.\d{1, 3}\.\d{1, 3}\.\d{1, 3}
```

## CPF

- Alvo: João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro

- Pattern: 
```
\d{3}\.\d{3}\.\d{3}-\d{2}
```

## Telefone

- Alvo: (21) 3216-2345

- Pattern:
```
\(\d{2}\) \d{4}-\d{4}
```

## Data

- Alvo: 28 de Dezembro de 1991

- Pattern:
```
[1-3]?\d\s+de\s+[A-Z][a-zç]{3,8}\s+de\s+[12]\d{3}
```

## Placa de Carro

- Alvo: KMG-8089

- Pattern:
```
[A-Z]{3}-\d{4}
```

## Notas de Alunos

- Alvo: 
    - Alunos de 7.2 para cima.
```csv
9.8 - Robson, 7.1 - Teresa, 4.5 - Armênio, 6.5 - Zulu, 7.7 - Stefania, 7.8 - João, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 4.7 - Cinério 
```

- Pattern:
```
[7-9]\.[2-9]\s+-\s+[A-Z][a-zãéê]{3,}
ou
[7-9]\.[2-9]\s+-\s+[^,]+
```

## Separação de Palavras

- Alvo: 
    - BALEIRO GARROTE SERROTE GOLEIRO ROTEIRO
    - Selecionar GARROTE, SERROTE e ROTEIRO

- Pattern:
```
[A-Z]*ROT[A-Z]+
```

## ?classes+poderosas*

- Alvo: ?classes+poderosas*

- Pattern:
```
[a-z?*+]+
```

## Aplicação Java

- Username de no máximo 10 caracteres;
- O primeiro caractere deve ser uma letra do alfabeto;
- A partir do segundo, pode ser letra ou número.

```java
public class User {
    @Pattern(regexp = "[a-zA-Z][a-zA-Z0-9]{0,9}")
    @NotEmpty
    private String username;
}
```

## Email

- O email deve ter um @ e terminar com caelum.com.br ou alura.com.br. O nome do usuário (tudo antes do @) tem apenas letras minúsculas, pode ter um número no final e tem de 5 a 15 caracteres.

- super.mario@caelum.com.br extrai super.mario
- donkey.kong@alura.com.br extrai donkey.kong
- bowser1@alura.com.br extrai bowser1

- (?:) não marca o grupo
- | (OU)

```
([a-z.]{4,14}[a-z\d])@(?:caelum.com.br|alura.com.br)
```

## Correios

- Precisamos ajudar os correios a entregar corretamente suas correspondências. Para tal, disponibilizaram-nos um arquivo com diversas linhas, nas quais são necessárias as informações: Nome, Rua, Número e CEP.

- As outras informações também devem ser separadas para futuros serviços dos correios, porém não precisamos capturá-las neste momento.

- Nico Steppat|14/05/1977|Rua Buarque de Macedo|50|22222-222|Rio de Janeiro

- Romulo Henrique|14/06/1993|Rua do Lins|120|12345-322|Rio de Janeiro

- Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro

<br>

- Nome era necessário capturar, então iremos criar um grupo ([\w\s]+)\|

- Data de nascimento não era necessário, por isso, deixaremos esse grupo como non-capturing group (?:\d\d\/\d\d\/\d\d\d\d)\|

- Rua Onde Mora é necessário capturar, e por isso, criamos um grupo normal: ([\w\s]+)\|

- Número é necessário capturar, portanto: (\d{1,4})\|

- CEP é necessário capturar, e podemos criar um grupo dessa maneira: (\d{5}-\d{3})\|

- Cidade é a nossa última análise, e não é necessária. Portanto, basta adicionarmos ?: para deixar o seu grupo não-capturável: (?:[\w\s]{10,})

```
^([\w\s]+)\|(?:\d\d\/\d\d\/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]{10,})$
```