package main

import (
	"github.com/ryanwestby/lab-notebook/backend/db"
	"github.com/ryanwestby/lab-notebook/backend/notifier"
	"github.com/ryanwestby/lab-notebook/backend/server"
)

func main() {
	database := db.New()
	notifierClient := notifier.New(&database)
	server.Start(&database, &notifierClient)
}
