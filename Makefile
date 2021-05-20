SAIL = ./vendor/bin/sail

# Run Docker containers
up:
	$(SAIL) up -d

# Stop Docker containers
down:
	$(SAIL) down

# Restart all containers
restart: down up
