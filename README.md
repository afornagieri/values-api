## Requisitos minimos
- [Docker](https://docs.docker.com/engine/install/)
- [POSTMAN (Opcional)](https://www.postman.com/downloads/) 

## Instalação

Faça o build da imagem com o comando:

```bash
docker build . --tag values-api/1.0
```

 Rode a imagem criada com o comando:

```bash
docker run -p 3000:3000 values-api/1.0
```

## Uso
Após rodar os comandos acima, você pode utilizar a collection do POSTMAN disponibilizada dentro da pasta Api para testar seu retorno. Na mesma collection há duas pastas 'dev' e 'prod', caso você queira rodar a api localmente, utilize o endpoint da pasta dev.

## License
[MIT](https://choosealicense.com/licenses/mit/)