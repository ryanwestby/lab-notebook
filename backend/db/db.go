package db

type Record struct {
	Name string `json:"name"`
	Note string `json:"note"`
}

func NewRecord(name, note string) Record {
	return Record{name, note}
}

type Database struct {
	contents []Record
}

func New() Database {
	contents := make([]Record, 0)
	return Database{contents}
}
func (database *Database) AddRecord(r Record) {
	database.contents = append(database.contents, r)
}
func (database *Database) GetRecords() []Record {
	return database.contents
}
