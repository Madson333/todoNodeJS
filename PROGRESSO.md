# Progresso

## Status atual
**Módulo:** 2 — Express
**Desafio em andamento:** CRUD de todo list em memória (Express 5 + TypeScript)
**Último desafio concluído:** nenhum ainda

---

## Trilha

- [~] **1. Node fundamentos** — módulos, fs, env, event loop no servidor *(pulado parcialmente: módulos CJS/ESM e env vão ser vistos durante o módulo 2)*
- [ ] **2. Express** — rotas, middleware, tratamento de erro, camadas
- [ ] **3. MongoDB + Mongoose** — modelagem, relacionamentos, índices
- [ ] **4. Autenticação** — bcrypt, JWT, autorização por papel
- [ ] **5. Redis** — cache, invalidação, rate limit, lock distribuído
- [ ] **6. Kafka** — producer/consumer, consumer group, idempotência, DLQ
- [ ] **7. Testes** — Jest + Supertest, integração
- [ ] **8. Projeto final** — API completa deployada, consumida por app RN

---

## Registro

<!-- Formato:
### [data] Desafio N — título
**Fiz:** o que construí
**Aprendi:** o insight principal
**Ainda confuso:** o que não fechou
**Revisão apontou:** principais achados da revisão
**Commit:** hash ou mensagem
-->

### [2026-11-07] Setup do projeto
**Fiz:** Node 24 via nvm (`.nvmrc`), Express 5, TypeScript 7 + tsx, `tsconfig.json` com CommonJS, `server.ts` inicial.
**Aprendi:** `.tsx` é só para JSX — backend usa `.ts`. tsx executa mas não checa tipos (`tsc --noEmit` faz isso). TS 7 exige declarar `types: ["node"]`. Instalar um pacote não o importa no arquivo.
**Ainda confuso:** —

---

## Dúvidas em aberto

- Diferença real entre CommonJS e ESM no Node, e o que o TS gera com `import` + `module: commonjs` + `esModuleInterop`
- Por que `process.env.PORT` é sempre string, e o problema de `||` vs `??` para valores padrão
