# PATH

**Your Personal Career Navigation System**

PATH helps students move from **CONFUSED → DISCOVER → CHOOSE → PLAN → LEARN → PRACTICE → BUILD → PROVE → APPLY → GET HIRED → GROW**.

## Phase 1 Foundation

- Expo + React Native + TypeScript mobile app
- Node.js + TypeScript REST API
- PostgreSQL + Prisma data layer
- Shared TypeScript career/roadmap types
- Zod onboarding validation
- AI provider abstraction
- Initial career seed architecture
- GitHub Actions typecheck CI

## Development

Requirements: Node.js 20+ and PostgreSQL.

1. Copy `.env.example` to `.env`.
2. Install dependencies with `npm install`.
3. Generate Prisma client with `npm run db:generate`.
4. Run migrations with `npm run db:migrate`.
5. Seed development careers with `npm run db:seed`.
6. Run checks with `npm run typecheck`.

Mobile: `npm run start --workspace @path/mobile`

API: `npm run dev --workspace @path/api`

## Product rule

PATH must never invent official eligibility, exam dates, vacancies, salaries or recognition. Verified structured data is the source of truth; AI is an explanation and personalization layer.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
