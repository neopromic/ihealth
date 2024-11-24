## **Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:
- **Node.js** (versão 14 ou superior)
- **MongoDB** (instância local ou em nuvem)
- **npm** ou **yarn**

---

## **Instruções para Rodar Localmente**

### 1. Clone o Repositório
```bash
git clone https://github.com/sua-conta/ihealth-backend.git
cd ihealth-backend
npm install
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configuração do Ambiente Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
PORT=3333
MONGO_URI=mongodb://<link>/ihealth
JWT_SECRET=sua-chave-secreta-aqui
```

### 4. Inicie o Servidor
```bash
npm start
```
#### O servidor estará disponível em http://localhost:3333.

### 5. Para Desenvolvimento
```bash
npm run dev
```

---

## **Autores**

### Equipe Calvos da T.I:
- **Wesley**
- **Pedro**
- **Pablo**
- **Timóteo**

---

## **Licença**

Este projeto está licenciado sob a MIT License.