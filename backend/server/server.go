package server

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/ryanwestby/lab-notebook/backend/db"
	"github.com/ryanwestby/lab-notebook/backend/notifier"
)

func Start(database *db.Database, notifierClient *notifier.Notifier) {
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/notes", func(c *gin.Context) {
		notes := database.GetRecords()
		c.JSON(http.StatusOK, gin.H{
			"notes": notes,
		})
	})
	r.POST("/notes", func(c *gin.Context) {
		var json db.Record
		if err := c.BindJSON(&json); err == nil {
			database.AddRecord(json)
			c.JSON(http.StatusCreated, json)
			notifierClient.Notify()
		} else {
			c.JSON(http.StatusBadRequest, gin.H{})
		}
	})
	r.Run()
}
