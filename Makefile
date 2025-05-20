front:
	@echo "Building TypeScript and copying static files..."
	cd frontend && npm i && npx tsc
	mkdir -p frontend/dist
	cp frontend/src/*.html frontend/dist/
	cp frontend/src/*.css frontend/dist/
	@echo "Starting Live Server..."
	cd frontend/ && npm run dev

build:
	docker compose up --build

.SILENT: 